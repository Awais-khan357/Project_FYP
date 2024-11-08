const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/db.config.js");

const upload = require("./config/multer.config.js");
const uploads = require("./config/multer.config2.js");

const authRoutes = require("./routes/auth.routes");
const studentRoutes = require("./routes/student.routes");
const resourceRoutes = require("./routes/resource.routes");
const eventRoutes = require("./routes/event.routes");
const uploadMemory = require("./config/multer.config2.js");

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/auth", authRoutes);
app.use("/students", studentRoutes);
app.use("/resources", resourceRoutes);
app.use("/events", eventRoutes);

app.post("/api/submit-form", uploadMemory.single("image"), async (req, res) => {
  const {
    fname,
    lname,
    fathername,
    department,
    semester,
    PAddress,
    email,
    phone,
    nic,
    dob,
    status,
    designation,
    issue,
    expire,
  } = req.body;
  let image = req.file ? req.file.buffer : null;

  try {
    await db.promise().beginTransaction();
    const [studentResult] = await db
      .promise()
      .query(
        "INSERT INTO students (first_name, last_name, father_name, cnic, dob, phone, email, address, type, status, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          fname,
          lname,
          fathername,
          nic,
          dob,
          phone,
          email,
          PAddress,
          designation,
          status,
          image,
        ]
      );
    const studentId = studentResult.insertId;
    await db
      .promise()
      .query(
        "INSERT INTO student_programs (student_id, program, semester) VALUES (?, ?, ?)",
        [studentId, department, semester]
      );

    await db
      .promise()
      .query(
        "INSERT INTO card_table (student_id, issue_date, expirey_date) VALUES (?, ?, ?)",
        [studentId, issue, expire]
      );

    await db.promise().commit();
    res.json({ message: "Form submitted successfully" });
  } catch (error) {
    await db.promise().rollback();
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Error submitting form" });
  }
});

app.post("/api/resource", (req, res) => {
  const { fname, lname, department, regNo, email, phone, status } = req.body;

  db.query(
    "INSERT INTO resources (fname, lname, department, registration, email, phone, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [fname, lname, department, regNo, email, phone, status],
    (err, result) => {
      if (err) {
        console.error("Error in submitting to resources:", err);
        res.status(500).send({ message: "Error in submitting to resources" });
      } else {
        res
          .status(200)
          .send({ message: "Data successfully submitted to resources" });
      }
    }
  );
});

app.post("/api/purchase", (req, res) => {
  const { fname, lname, department, semester, isbn, title, email, phone, dop } =
    req.body;

  db.query(
    "INSERT INTO book_purchase (fname, lname, department, semester, email, phone, isbn, publication, title) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [fname, lname, department, semester, email, phone, isbn, dop, title],
    (err, result) => {
      if (err) {
        console.error("Error in submitting to purchase:", err);
        res.status(500).send({ message: "Error in submitting to purchase" });
      } else {
        res
          .status(200)
          .send({ message: "Data successfully submitted to purchase" });
      }
    }
  );
});

app.get("/events", (req, res) => {
  const query = "SELECT * FROM events";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching events:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    const processedEvents = result.map((event) => ({
      ...event,
      event_img: event.event_img
        ? `/uploads/${path.basename(event.event_img)}`
        : null,
    }));

    res.json(processedEvents);
  });
});

app.get("/message", (req, res) => {
  db.query(`SELECT * FROM contact`, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
