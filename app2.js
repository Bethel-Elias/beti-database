const mysql = require("mysql2/promise");
let express = require("express");

let App = express();

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "beti",
      password: "123456789",
      database: "mybethel",
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    });
    console.log("Connected to MySQL database!");
    return connection;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}
App.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running at http://localhost:4000");
  }
});