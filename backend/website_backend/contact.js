const express = require("express");
const router = express.Router();
const db = require("./db");

/* SAVE CONTACT */

router.post("/contact", (req, res) => {

  const { name, email, phone, message } = req.body;

  const sql =
    "INSERT INTO contacts (name,email,phone,message) VALUES (?,?,?,?)";

  db.query(sql, [name, email, phone, message], (err) => {

    if (err) {
      console.log(err);
      return res.status(500).json({ status: "error" });
    }

    res.json({ status: "success" });

  });

});


/* GET CONTACTS */

router.get("/contacts", (req, res) => {

  const sql = "SELECT * FROM contacts ORDER BY created_at DESC";

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).send("Database error");
    }

    res.json(result);

  });

});

module.exports = router;