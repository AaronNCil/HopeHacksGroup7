const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');


const app = express();
const port = process.env.PORT || 4000;

app
.use(express.static(path.join(__dirname, "/public")))
.use(bodyParser.urlencoded({ extended: true }))
.use(bodyParser.json());

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "devuser",
    password: "hopehacks",
    database: "hopex",
})

conn.connect((err) => {

    if (err) {
        console.log(`Can't connect to database`)
        return;
    }

    console.log(`Connection is up and running`)
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/main.html"));
});

app.get("/solution", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/solution.html"));
});

app.get("/aqi", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/aqi.html"));
});

app.get("/api/user", async (req, res) => {
    const users = await conn.query(`
        SELECT
        *
        FROM
            contact_form
        ORDER BY
            contactID DESC
    `);

    res.contentType("html");

   
  });


app.post("/api/user", (req, res) => {
  const body = req.body;

   const mysqlString = 
      ` INSERT INTO contact_form (fname, email, subject, message) 
        VALUES (?)`;
        
    const values = [
        [body.fname],
        [body.email],
        [body.subject],
        [body.message],
    ]

      conn.query(mysqlString, [values], (err, result) => {
        if(err) throw err;
        console.log("added user" + result.affectedRows);
      })
      
    res.redirect('/')
    console.log('added user');
  })
  

  .listen(port, () => console.log(`Server listening on port ${port}`));

