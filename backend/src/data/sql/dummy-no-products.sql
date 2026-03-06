-- Extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Tables
TRUNCATE TABLE
product_badge,
review_rating,
review,
product_barcode,
product_image,
product,
product_info
RESTART IDENTITY CASCADE;

TRUNCATE TABLE subcategory, category, role, users, badge_definition, rating_definition
RESTART IDENTITY CASCADE;

-- Categories
INSERT INTO category (name, description) VALUES
('Mad', 'Alt fra dagligvarer til delikatesser – find det, du har brug for til køkkenet.'),
('Elektronik', 'Alt indenfor elektronik – fra gadgets til tilbehør, der gør hverdagen smartere.'),
('Drikkevarer', 'Udforsk vores udvalg af drikkevarer, fra vand og juice til specialøl og kaffe.');

-- Subcategories
INSERT INTO subcategory (category_id, name, description) VALUES
(2, 'Headphones', 'Wireless and wired headphones'),
(2, 'Laptops', 'Portable computers'),
(2, 'Smartphones', 'Mobile devices'),
(1, 'Frugt', 'Fresh fruits'),
(1, 'Grøntsager', 'Fresh vegetables'),
(1, 'Snacks', 'Chips, candies, and other snacks'),
(3, 'Energidrik', 'Boom! Release the beast.'),
(3, 'Læskedrik', 'Cola, pepsi, Faxe - you name it');

-- Roles
INSERT INTO role (name) VALUES
('USER'),
('BRAND OWNER'),
('API ACCESS'),
('ADMIN');

-- Dummy admin user
INSERT INTO users (first_name, last_name, username, email_hashed, password_hash, role_id, xp, profile_picture, gender) VALUES
(
'Admin', 'Account',
'admin',
encode(digest('admin@email.com', 'sha256'), 'hex'),
crypt('admin123', gen_salt('bf')),
4,
0,
'images/profile/profile-1.png',
'male'
);

-- Dummy user
INSERT INTO users (first_name, last_name, username, email_hashed, password_hash, role_id, xp, profile_picture, gender) VALUES
(
'Jonas', 'Larsen',
'jonaslarsen_',
encode(digest('jonas68@live.dk', 'sha256'), 'hex'),
crypt('password', gen_salt('bf')),
1,
0,
'images/profile/profile-2.png',
'female'
);

INSERT INTO users (first_name, last_name, username, email_hashed, password_hash, role_id, xp, profile_picture, gender) VALUES
(
'Consumr', 'Account',
'Consumr',
encode(digest('hej@consumr.dk', 'sha256'), 'hex'),
crypt('admin123', gen_salt('bf')),
4,
0,
'images/profile/profile-4.png',
'unspecified'
);

-- Badge definitions
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

-- Rating definitions
INSERT INTO rating_definition (subcategory_id, label, rating_type, question) VALUES
(7, 'Smag', 'SCALE_1_5', 'Hvad synes du om smagen?'),
(7, 'Energi boost', 'SCALE_1_5', 'Hvordan er Energy Boost fra produktet?'),
(7, 'Ville købe igen', 'SCALE_1_5', 'Ville du købe produktet igen?'),
(7, 'Pris', 'SCALE_1_5', 'Hvad synes du om prisen?');
