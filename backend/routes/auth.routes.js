const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db.config");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ message: "No token provided!" });
  }

  try {
    const decoded = jwt.verify(token, "secret_key");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Invalid token!" });
  }
};

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO `login`(`username`, `email`, `password`) VALUES (?,?,?)",
    [username, email, hashedPassword],
    (err, result) => {
      if (err) {
        res.status(500).send({ message: "Error registering user" });
      } else {
        res.status(200).send({ message: "User Registered Successfully" });
      }
    }
  );
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM login WHERE email = ?",
    [email],
    async (err, result) => {
      if (err || result.length === 0) {
        res.status(401).send({ message: "User not found" });
      } else {
        const user = result[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          res.status(401).send({ message: "Incorrect password" });
        } else {
          const token = jwt.sign({ id: user.id }, "secret_key", {
            expiresIn: "1h",
          });
          res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // false for development
            sameSite: "lax",
            path: "/",
            maxAge: 3600000,
          });
          res.status(200).send({ message: "Successfully logged In" });
        }
      }
    }
  );
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // false for development
    sameSite: "lax",
    path: "/",
  });
  res.status(200).send({ message: "Successfully logged out" });
});

router.get("/protected", verifyToken, (req, res) => {
  res.status(200).send({ message: "Access granted", user: req.user });
});

module.exports = router;
