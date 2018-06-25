const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: 'root',
  database: 'dev_airbnb_sdc',
});

dbConnection.connect((err) => {
  if (err) { throw err; }
  console.log('mysql connected');
});

module.exports.dbConnection = dbConnection;
