import dotenv from 'dotenv';

// _______________________________________________________________

const NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({
  path: `.env.${NODE_ENV}`,
});

// _______________________________________________________________
// .env or default

export default {
  env: NODE_ENV,

  port: Number(process.env.PORT) || 3000,

  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};