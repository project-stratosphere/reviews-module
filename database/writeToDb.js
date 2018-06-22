const { Pool, Client } = require('pg');
const path = require('path');

const conObject = {
  user: 'jonathanpizzolato',
  host: 'localhost',
  database: 'dev_airbnb_sdc',
  password: 'devadmin',
  port: 5432,
};

const filePath = path.resolve(__dirname, 'seed/users.csv');
const pool = new Pool(conObject);
const sql = `COPY tbl_users (first_name, last_name, user_name)  FROM '${filePath}' WITH DELIMITER '|' CSV HEADER;`;
// const values;

console.time('writeToDb');
(async () => {
  const client = await pool.connect();
  try {
    const res = await client.query(sql);
    console.timeEnd('writeToDb');
    console.log(res.rows[0]);
  } finally {
    client.release();
  }
})().catch(e => console.log(e.stack));
