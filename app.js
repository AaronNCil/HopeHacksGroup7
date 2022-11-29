const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 4000;

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

app.get('/', (req, res) => {
    fs.readFile('./public/index.html', (err, data) => {
        if (err) throw err;
        res.write(data);
    })
});

app
  .use(morgan("dev"))
  .use(express.static("public"))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .get("/api/user", async (req, res) => {
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
      `
    INSERT INTO contact_form (
        fname,
        email,
        subject,
        message
    ) VALUES (
       ?
    )
`;
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
      
    console.log('added user');
  })
  

  .listen(port, () => console.log(`Server listening on port ${port}`));