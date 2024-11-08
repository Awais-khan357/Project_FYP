const express = require("express");
const router = express.Router();
const db = require("../config/db.config");
const upload = require("../config/multer.config");

router.get("/", (req, res) => {
  db.query("SELECT * FROM events", (err, results) => {
    if (err) {
      console.error("Error fetching events:", err);
      return res.status(500).json({ error: "Database fetch error" });
    }
    res.json(results);
  });
});

router.post("/img", upload.single("image"), (req, res) => {
  const imgPath = req.file.path;
  const imgName = req.file.filename;

  const query = "INSERT INTO images (name, path) VALUES (?, ?)";
  db.query(query, [imgName, imgPath], (err, result) => {
    if (err) throw err;
    res.send("Image uploaded successfully");
  });
});

router.post("/", upload.single("image"), (req, res) => {
  const { title, description, time, date } = req.body;
  const relativePath = req.file ? `/uploads/${req.file.filename}` : null;

  db.query(
    "INSERT INTO `events`(`title`, `caption`, `event_img`, `TIME`, `DATE`) VALUES (?, ?, ?, ?, ?)",
    [title, description, relativePath, time, date],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ error: "Database insert error" });
      }
      res.json({ ...result, imagePath: relativePath });
    }
  );
});

module.exports = router;
