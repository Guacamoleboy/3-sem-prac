CREATE EXTENSION IF NOT EXISTS pgcrypto;

TRUNCATE TABLE
product_badge,
badge_definition,
review_rating,
rating_definition,
review,
users,
role,
product_barcode,
product_image,
product,
product_info,
subcategory,
category
RESTART IDENTITY CASCADE;

INSERT INTO category (name, description) VALUES
('Mad', 'All edible consumer products'),
('Elektronik', 'Electronic devices and accessories'),
('Drikkevarer', 'Alt væske som kan indtages');

INSERT INTO subcategory (category_id, name, description) VALUES
(2, 'Headphones', 'Wireless and wired headphones'),
(2, 'Laptops', 'Portable computers'),
(2, 'Smartphones', 'Mobile devices'),
(1, 'Frugt', 'Fresh fruits'),
(1, 'Grøntsager', 'Fresh vegetables'),
(1, 'Snacks', 'Chips, candies, and other snacks'),
(3, 'Energidrik', 'Boom! Release the beast.'),
(3, 'Læskedrik', 'Cola, pepsi, Faxe - you name it');

INSERT INTO product_info (name, description) VALUES
('Monster Energy Green', 'Energy drink with classic Monster flavor');

INSERT INTO product (product_info_id, category_id, subcategory_id) VALUES
(1, 3, 7);

INSERT INTO product_barcode (product_id, barcode, country_code) VALUES
(1, '5060337502900', 'DK'),
(1, '5060337502900', 'DE');

WITH img AS (SELECT gen_random_uuid() AS id)
INSERT INTO product_image (id, product_id, path, is_primary)
SELECT
id,
1,
'images/products/' || id || '.png',
true
FROM img;

INSERT INTO role (name) VALUES
('USER'),
('BRAND OWNER'),
('API ACCESS'),
('ADMIN');

INSERT INTO users (first_name, last_name, username, email_hashed, password_hash, role_id, xp) VALUES
(
'Jonas', 'Larsen',
'jonaslarsen_',
encode(digest('test@travlr.dk', 'sha256'), 'hex'),
crypt('password', gen_salt('bf')),
4,
250
),
(
'Customer', 'User',
'customer',
encode(digest('customer@email.com', 'sha256'), 'hex'),
crypt('customer', gen_salt('bf')),
1,
0
),
(
'Admin', 'Account',
'consumr',
encode(digest('hej@consumr.com', 'sha256'), 'hex'),
crypt('consumr', gen_salt('bf')),
4,
0
);

INSERT INTO badge_definition (code, label) VALUES
('popular', 'Populær'),
('top100', 'Top 100'),
('eco', 'Økologisk'),
('best', 'Bedst vurderet'),
('new', 'Nyhed'),
('newProduct', 'Nyt produkt'),
('top10', 'Top 10'),
('justAdded', 'Lige tilføjet'),
('newVersion', 'Ny version'),
('newTaste', 'Ny smag'),
('newPackaging', 'Ny emballage'),
('top10Category', 'Top 10 i kategori');

INSERT INTO rating_definition (subcategory_id, label, rating_type, question) VALUES
(7, 'Smag', 'SCALE_1_5', 'Hvad synes du om smagen?'),
(7, 'Energi boost', 'SCALE_1_5', 'Hvordan er Energy Boost fra produktet?'),
(7, 'Ville købe igen', 'SCALE_1_5', 'Ville du købe produktet igen?'),
(7, 'Pris', 'SCALE_1_5', 'Hvad synes du om prisen?');

INSERT INTO review (product_id, user_id, final_comment) VALUES
(1, 1, 'Super lækker energi, perfekt til træning! Køber normalt 6 rammer hver dag, og flækker dem alle på én gang.'),
(1, 2, 'Shit hvor jeg elsker den her. Den helt originale Monster energy.'),
(1, (SELECT id FROM users WHERE username='consumr'), 'Consumr vurdering af produktet: klassisk Monster energi, meget grøn!');

INSERT INTO review_rating (review_id, rating_definition_id, value, comment) VALUES
(1, 1, 4.5, 'Smagen er klassisk Monster'),
(1, 2, 4.8, 'Giver et hurtigt energi boost'),
(1, 3, 5.0, 'Ville købe igen'),
(1, 4, 4.1, 'En smule dyr men det er okay');

INSERT INTO review_rating (review_id, rating_definition_id, value, comment) VALUES
(2, 1, 2.1, 'Fantastisk smag!'),
(2, 2, 2.7, 'Giver et godt energi-boost'),
(2, 3, 1.5, 'Meget tilfredsstillende'),
(2, 4, 3.2, 'Pris/ydelse okay');

INSERT INTO review_rating (review_id, rating_definition_id, value, comment) VALUES
(3, 1, 4.1, 'Fantastisk smag!'),
(3, 2, 4.3, 'Giver et godt energi-boost'),
(3, 3, 3.5, 'Meget tilfredsstillende'),
(3, 4, 2.2, 'Pris/ydelse okay');

INSERT INTO product_badge (product_id, badge_id) VALUES
(1, 8);