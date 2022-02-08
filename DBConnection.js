const mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootpassword",
    database: "highscoredb"
});

con.connect((err) => {
    if (err) {
        throw err;
    } 
    console.log("Connected to MySQL...");
});

module.exports = con;