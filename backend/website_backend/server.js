const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* DATABASE CONNECTION */

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Root@123",
  database: "bulldriod"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});


/* SAVE CONTACT OR ADMIN LOGIN */

app.post("/api/contact", (req, res) => {

  let { name, email, phone, message } = req.body;

  const ADMIN_EMAIL = "lawrans96@gmail.com";
  const ADMIN_PASS = "91762415025";

  const emailInput = (email || "").trim().toLowerCase();
  const phoneInput = (phone || "").trim();

  // ADMIN LOGIN CHECK FIRST → DO NOT STORE
  if (emailInput === ADMIN_EMAIL && phoneInput === ADMIN_PASS) {
    return res.json({ status: "admin" });
  }

  // NORMAL USER → SAVE TO DATABASE
  const sql =
    "INSERT INTO contacts (name,email,phone,message) VALUES (?,?,?,?)";

  db.query(sql, [name, emailInput, phoneInput, message], (err) => {

    if (err) {
      console.log(err);
      return res.status(500).json({ status: "error" });
    }

    res.json({ status: "success" });

  });

});


/* GET CONTACTS FOR DASHBOARD */

app.get("/api/contacts", (req, res) => {

  const sql = "SELECT * FROM contacts ORDER BY created_at DESC";

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).send("Database error");
    }

    res.json(result);

  });

});


/* START SERVER */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});