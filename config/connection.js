// Dependencies
const mysql = require('mysql');

// Variables
let connection;

if (process.env.JAWSDB_URL){
    // Heroku deployment database
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Localhost database
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

connection.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;