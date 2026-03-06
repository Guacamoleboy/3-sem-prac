import pool from './db.service.js';

export async function getAllProducts() {
  const { rows } = await pool.query(`
    SELECT 
    p.id AS product_id,
    pi.name,
    pi.description,
    c.id AS category_id,
    c.name AS category_name,
    sc.id AS subcategory_id,
    sc.name AS subcategory_name,
    json_agg(
    json_build_object(
        'id', img.id,
        'path', img.path,
        'is_primary', img.is_primary
    )
    ) AS images
    FROM product p
    JOIN product_info pi ON p.product_info_id = pi.id
    JOIN category c ON p.category_id = c.id
    JOIN subcategory sc ON p.subcategory_id = sc.id
    LEFT JOIN product_image img ON img.product_id = p.id
    GROUP BY p.id, pi.name, pi.description, c.id, c.name, sc.id, sc.name
  `);
  return rows;
}