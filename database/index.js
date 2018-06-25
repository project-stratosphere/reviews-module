const mysql = require('mysql');
const { Client } = require('pg');

// const { Pool, Client } = require('pg');
// const pool = new Pool(conObject);
const pgConnection = new Client({
  user: 'jonathanpizzolato',
  host: 'localhost',
  database: 'dev_airbnb_sdc',
  password: 'devadmin',
  port: 5432,
});

pgConnection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('PostgreSQL connected');
});

const dbConnection = mysql.createConnection({
  user: 'root',
  database: 'dev_airbnb_sdc',
});

dbConnection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('mysql connected');
});

module.exports = {
  dbConnection,
  pgConnection,
};
