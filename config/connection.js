//Setup MYSQL connection
var mysql = require('mysql');
var connection;
var test;

module.exports = connection;



var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    database: "burgers_db",
    user: "root"
    password: "password"
  });
}

connection.connect(err => {
  if (err) {
    return console.log(err.stack);
  } else {
    console.log("connected as id " + connection.threadId);
  }
});

module.exports = connection;
