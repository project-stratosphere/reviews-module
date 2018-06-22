const { Pool, Client } = require('pg');

const conObject = {
  user: 'jonathanpizzolato',
  host: 'localhost',
  database: 'dev_airbnb_sdc',
  password: 'devadmin',
  port: 5432,
}

const pool = new Pool(conObject);
const text = 'INSERT INTO temp_test(a_name,a_number) VALUES($1, $2) RETURNING *';
const values = ['jonp', 1];


// this uses only one pool
(async () => {
  const { rows } = await pool.query(text, values);
  console.log('user:', rows[0]);
})().catch(e => setImmediate(() => { throw e; }));

// can open multiple pools like this.
let name = 'jonp';
let number = 99;

(async () => {
  const client = await pool.connect();
  try {
    const res = await client.query(`INSERT INTO temp_test(a_name,a_number) VALUES('${name}', ${number}) RETURNING *`)
    console.log(res.rows[0]);
  } finally {
    client.release();
  }
})().catch(e => console.log(e.stack));

(async () => {
  const client = await pool.connect();
  try {
    const res = await client.query(`INSERT INTO temp_test(a_name,a_number) VALUES('${name}', ${number}) RETURNING *`)
    console.log(res.rows[0]);
  } finally {
    client.release();
  }
})().catch(e => console.log(e.stack));
