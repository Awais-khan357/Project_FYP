const express = require("express");
const router = express.Router();
const db = require("../config/db.config");

router.get("/vpn", (req, res) => {
  db.query(`SELECT * FROM Resources where STATUS = 'vpn'`, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/wifi", (req, res) => {
  db.query(`SELECT * FROM Resources where STATUS = 'wifi'`, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
