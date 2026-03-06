-- New Product Addition (Local)

-- Product Info
INSERT INTO product_info (name, description) VALUES
('Monster Energy Bad Apple', 'Monster Energy, but with a twist of sour apple! A banger if you ask us.');

-- Product
INSERT INTO product (barcode, product_info_id, category_id, subcategory_id, image_path) VALUES
('5061013945325', 2, 3, 7, 'images/products/5061013945325.png');

-- Badge
INSERT INTO product_badge (product_barcode, badge_id) VALUES
('5061013945325', 1);

-- Reset product (testing)
DELETE FROM product
WHERE product_info_id IN (
    SELECT id
    FROM product_info
    WHERE name = 'Monster Energy Absolutely Zero'
);

TRUNCATE TABLE
product_info
RESTART IDENTITY CASCADE;

-- Hard reset
DELETE FROM product_info
WHERE name = 'Monster Energy Absolutely Zero';