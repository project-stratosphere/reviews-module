const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: 'root',
  database: 'airbnc_data',
});

dbConnection.connect((err) => {
  if (err) { throw err; }
  console.log('mysql connected');
});

module.exports.dbConnection = dbConnection;
