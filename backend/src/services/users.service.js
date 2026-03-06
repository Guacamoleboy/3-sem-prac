import pool from './db.service.js';

// _______________________________________________________________

export async function getAllUsers() {
  const { rows } = await pool.query(
    'SELECT * FROM users ORDER BY id ASC'
  );
  return rows;
}

// _______________________________________________________________

export async function addUser(name, email) {
  const { rows } = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  return rows[0];
}

// _______________________________________________________________

export async function deleteUser(id) {
  const { rowCount } = await pool.query(
    'DELETE FROM users WHERE id = $1',
    [id]
  );
  return rowCount > 0;
}