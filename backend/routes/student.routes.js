const express = require("express");
const router = express.Router();
const db = require("../config/db.config");
const { verifyToken } = require("../middleware/auth.middleware");

router.get("/", (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || 5;
  const query = `
    SELECT 
      s.std_id,
      s.first_name,
      s.last_name,
      s.father_name,
      s.cnic,
      s.dob,
      s.phone,
      s.email,
      s.address,
      s.type,
      s.status,
      s.image,
      sp.program,
      sp.semester
    FROM 
      students s
    JOIN 
      student_programs sp ON s.std_id = sp.student_id
    WHERE 
      s.status = 'pending'
    ORDER BY 
      s.std_id
    LIMIT ${limit} OFFSET ${offset}
  `;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/:cnic", (req, res) => {
  const { cnic } = req.params;
  db.query(
    `SELECT 
      s.*,
      sp.program,
      sp.semester,
      c.issue_date,
      c.expirey_date
    FROM 
      students s
    LEFT JOIN 
      student_programs sp ON s.std_id = sp.student_id
    LEFT JOIN 
      card_table c ON s.std_id = c.student_id
    WHERE 
      s.cnic = ?`,
    [cnic],
    (err, result) => {
      if (err) {
        console.error("Error fetching student:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      if (result.length === 0) {
        return res.status(404).json({ message: "Student Not found" });
      }

      const student = result[0];

      if (student.image) {
        student.image = `data:image/jpeg;base64,${student.image.toString(
          "base64"
        )}`;
      }

      res.json(student);
    }
  );
});

router.put("/:cnic", (req, res) => {
  const { cnic } = req.params;

  db.query(
    `UPDATE students SET status  = 'approved'  WHERE cnic = ?`,
    [cnic],
    (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).send({ message: "Status Not  found" });
      } else {
        res.json(result[0]);
      }
    }
  );
});

router.put("/update/:id", async (req, res) => {
  const {
    id,
    fname,
    lname,
    father,
    program,
    semester,
    cnic,
    phone,
    dob,
    address,
    type,
    email,
  } = req.body;

  try {
    await db.promise().beginTransaction();

    await db
      .promise()
      .query(
        "UPDATE students SET `first_name`=? , `last_name` =? , `father_name` =? , `cnic` =?, `dob` =?, `phone` =?, `email` =?,`address`=?, `type`=?, `status`=? WHERE std_id =?",
        [
          fname,
          lname,
          father,
          cnic,
          dob,
          phone,
          email,
          address,
          type,
          "pending",
          id,
        ]
      );

    const studentId = id;

    await db
      .promise()
      .query(
        "UPDATE `student_programs` SET `program`=?,`semester`=? WHERE student_id =?",
        [program, semester, studentId]
      );

    await db.promise().commit();

    res.json({ message: "Form submitted successfully" });
  } catch (error) {
    await db.promise().rollback();
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Error submitting form" });
  }
});

router.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM students WHERE std_id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });

    return res.json(result);
  });
});

module.exports = router;
