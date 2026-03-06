import pkg from 'pg';
import env from '../config/env.js';

// _______________________________________________________________

const { Pool } = pkg;

// _______________________________________________________________

const pool = new Pool({
  host: env.db.host,
  port: env.db.port,
  database: env.db.database,
  user: env.db.user,
  password: env.db.password,
});

// _______________________________________________________________

export default pool;