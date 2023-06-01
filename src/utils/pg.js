const { Pool } = require("pg");

const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

const pool = new Pool(
  `${DB_USER}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);

const fetch = async (SQL, ...values) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, values.length ? values : null);
    return rows;
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

module.exports = { fetch };
