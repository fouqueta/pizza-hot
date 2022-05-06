DROP TABLE IF EXISTS produit CASCADE;
DROP TABLE IF EXISTS ingredient CASCADE;
DROP TABLE IF EXISTS menu CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS pizza CASCADE;
DROP TABLE IF EXISTS pizza_ingredients CASCADE;
DROP TABLE IF EXISTS sauce CASCADE;
DROP TABLE IF EXISTS entree CASCADE;
DROP TABLE IF EXISTS boisson CASCADE;
DROP TABLE IF EXISTS dessert CASCADE;
DROP TABLE IF EXISTS utilisateur CASCADE;
DROP TABLE IF EXISTS commande CASCADE;
DROP TABLE IF EXISTS commande_produits CASCADE;
DROP TABLE IF EXISTS livreur CASCADE;

CREATE TABLE produit (
  id_prod serial primary key,
  type_prod varchar(20) not null
);

CREATE TABLE ingredient (
  nom varchar(20) primary key,
  prix  float(4) not null,
  categorie varchar(20)
);

CREATE TABLE menu (
  nom varchar(20) primary key,
  prix float(4) not null,
  nb_entree integer not null,
  nb_pizza integer not null,
  nb_boisson integer not null
);

CREATE TABLE menu_items (
  id_item integer not null,
  quantite integer not null,
  nom_menu varchar(20),
  id_prod integer not null,
  foreign key (nom_menu) references menu(nom),
  foreign key (id_item) references produit(id_prod),
  foreign key (id_prod) references produit(id_prod),
  primary key (id_item, id_prod)
);

CREATE TABLE pizza (
  id_pizza serial primary key,
  nom varchar(20),
  taille varchar(10) not null,
  prix float(4) not null,
  id_prod integer not null,
  foreign key (id_prod) references produit(id_prod)
);

CREATE TABLE pizza_ingredients (
  id_pizza integer not null,
  id_ingredient varchar(20) not null,
  quantite integer not null,
  foreign key (id_pizza) references pizza(id_pizza),
  foreign key (id_ingredient) references ingredient(nom),
  primary key (id_pizza, id_ingredient)
);

CREATE TABLE sauce (
  nom varchar(20) primary key,
  prix float(4) not null,
  id_prod integer not null,
  foreign key (id_prod) references produit(id_prod)
);

CREATE TABLE entree (
  nom varchar(30),
  prix float(4) not null,
  sauce varchar(20),
  id_prod integer not null,
  foreign key (sauce) references sauce(nom),
  foreign key (id_prod) references produit(id_prod),
  primary key (nom, sauce)
);

CREATE TABLE boisson (
  nom varchar(20),
  volume varchar(20) not null,
  prix float(4) not null,
  id_prod integer not null,
  foreign key (id_prod) references produit(id_prod),
  PRIMARY KEY (nom, volume)
);

CREATE TABLE dessert (
  nom varchar(20) primary key,
  prix float(4) not null,
  id_prod integer not null,
  foreign key (id_prod) references produit(id_prod)
);

CREATE TABLE utilisateur (
  id_client serial primary key,
  prenom varchar(20) not null,
  nom varchar(20),
  email varchar(50) not null,
  mdp varchar(100) not null,
  adr_ville varchar(100) not null,
  adr_rue varchar(100) not null,
  adr_code_postal integer not null
);

CREATE TABLE commande (
  id_commande serial primary key,
  id_client int not null,
  date_cmd timestamp not null,
  prise_en_charge boolean not null,
  livree boolean not null,
  foreign key (id_client) references utilisateur(id_client)
);

CREATE TABLE commande_produits (
  id_commande integer not null,
  id_produit integer not null,
  quantite integer not null,
  foreign key (id_commande) references commande(id_commande),
  foreign key (id_produit) references produit(id_prod),
  primary key (id_commande, id_produit)
);

-- EXTENSION POUR UN COMPTE LIVREUR
-- CREATE TABLE livreur_commandes (
--   id_livreur integer not null,
--   id_commande integer not null,
--   foreign key (id_livreur) references livreur(id_livreur),
--   foreign key (id_commande) references commande(id_commande),
--   primary key (id_livreur, id_commande)
-- );

-- CREATE TABLE livreur (
--   id_livreur serial primary key,
--   nom varchar(20),
--   prenom varchar(20) not null,
--   email varchar(50) not null,
--   mdp varchar(100) not null,
-- );


INSERT INTO produit (type_prod) VALUES
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('pizza'),
  ('sauce'),
  ('sauce'),
  ('sauce'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('entree'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('boisson'),
  ('dessert'),
  ('dessert'),
  ('dessert'),
  ('dessert'),
  ('dessert'),
  ('menu_items');

INSERT INTO ingredient VALUES
  ('Mozzarella', 1.50, 'commun'),
  ('Chèvre', 1.50, 'commun'),
  ('Emmental', 1.50, 'commun'),
  ('Bleu', 1.50, 'commun'),
  ('Pepperoni', 1.50, 'commun'),
  ('Jambon', 1.50, 'commun'),
  ('Champignons', 1.50, 'commun'),
  ('Jambon cru', 1.50, 'commun'),
  ('Raclette', 1.50, 'commun'),
  ('Lardons', 1.50, 'commun'),
  ('Pommes de terre', 1.50, 'commun'),
  ('Miel', 1.50, 'commun'),
  ('Merguez', 1.50, 'commun'),
  ('Saumon fumé', 1.50, 'commun'),
  ('Oignons rouges', 1.50, 'commun'),
  ('Poivrons verts', 1.50, 'commun'),
  ('Tomates', 1.50, 'commun'),
  ('Olives noires', 1.50, 'commun'),
  ('Ananas', 1.50, 'commun'),
  ('Caviar', 40.00, 'luxe');

INSERT INTO menu VALUES
  ('Extra Menu', 17.90, 1, 1, 2),
  ('Mega Menu', 30.90, 2, 2, 1),
  ('Giga Menu', 38.90, 2, 3, 1);

INSERT INTO pizza (nom, taille, prix, id_prod) VALUES
  ('Personnalisable', 'Medium', 11.50, 1),
  ('Personnalisable', 'XLarge', 15.50, 2),
  ('4 Fromages', 'Medium', 11.50, 3),
  ('4 Fromages', 'XLarge', 15.50, 4),
  ('Pepperoni', 'Medium', 11.50, 5),
  ('Pepperoni', 'XLarge', 15.50, 6),
  ('Queen', 'Medium', 9.50, 7),
  ('Queen', 'XLarge', 13.50, 8),
  ('Montagnarde', 'Medium', 11.50, 9),
  ('Montagnarde', 'XLarge', 15.50, 10),
  ('Raclette', 'Medium', 10.50, 11),
  ('Raclette', 'XLarge', 14.50, 12),
  ('Chèvre Miel', 'Medium', 9.50, 13),
  ('Chèvre Miel', 'XLarge', 13.50, 14),
  ('Margherita', 'Medium', 7.00, 15),
  ('Margherita', 'XLarge', 11.00, 16),
  ('Orientale', 'Medium', 9.50, 17),
  ('Orientale', 'XLarge', 13.50, 18),
  ('Nordique', 'Medium', 11.50, 19),
  ('Nordique', 'XLarge', 15.50, 20),
  ('Végétarienne', 'Medium', 9.50, 21),
  ('Végétarienne', 'XLarge', 13.50, 22),
  ('Campagnarde', 'Medium', 10.50, 23),
  ('Campagnarde', 'XLarge', 14.50, 24),
  ('Hawaïenne', 'Medium', 9.50, 25),
  ('Hawaïenne', 'XLarge', 13.50, 26),
  ('Jambon-Fromage', 'Medium', 7.00, 27),
  ('Jambon-Fromage', 'XLarge', 11.00, 28),
  ('Merguez', 'Medium', 7.00, 29),
  ('Merguez', 'XLarge', 11.00, 30);

INSERT INTO pizza_ingredients VALUES
  (3, 'Mozzarella', 1),
  (3, 'Chèvre', 1),
  (3, 'Emmental', 2),
  (3, 'Bleu', 1),
  (4, 'Mozzarella', 1),
  (4, 'Chèvre', 1),
  (4, 'Emmental', 2),
  (4, 'Bleu', 1),
  (5, 'Mozzarella', 2),
  (5, 'Pepperoni', 2),
  (6, 'Mozzarella', 2),
  (6, 'Pepperoni', 2),
  (7, 'Mozzarella', 1),
  (7, 'Jambon', 1),
  (7, 'Champignons', 2),
  (8, 'Mozzarella', 1),
  (8, 'Jambon', 1),
  (8, 'Champignons', 2),
  (9, 'Mozzarella', 1),
  (9, 'Jambon cru', 1),
  (9, 'Raclette', 1),
  (9, 'Champignons', 1),
  (10, 'Mozzarella', 1),
  (10, 'Jambon cru', 1),
  (10, 'Raclette', 1),
  (10, 'Champignons', 1),
  (11, 'Mozzarella', 1),
  (11, 'Pommes de terre', 1),
  (11, 'Lardons', 1),
  (11, 'Raclette', 1),
  (12, 'Mozzarella', 1),
  (12, 'Pommes de terre', 1),
  (12, 'Lardons', 1),
  (12, 'Raclette', 1),
  (13, 'Mozzarella', 1),
  (13, 'Chèvre', 1),
  (13, 'Miel', 1),
  (14, 'Mozzarella', 1),
  (14, 'Chèvre', 1),
  (14, 'Miel', 1),
  (15, 'Mozzarella', 2),
  (16, 'Mozzarella', 2),
  (17, 'Mozzarella', 1),
  (17, 'Merguez', 2),
  (17, 'Champignons', 1),
  (18, 'Mozzarella', 1),
  (18, 'Merguez', 2),
  (18, 'Champignons', 1),
  (19, 'Mozzarella', 1),
  (19, 'Saumon fumé', 1),
  (20, 'Mozzarella', 1),
  (20, 'Saumon fumé', 1),
  (21, 'Mozzarella', 1),
  (21, 'Champignons', 1),
  (21, 'Oignons rouges', 1),
  (21, 'Poivrons verts', 1),
  (21, 'Tomates', 1),
  (21, 'Olives noires', 1),
  (22, 'Mozzarella', 1),
  (22, 'Champignons', 1),
  (22, 'Oignons rouges', 1),
  (22, 'Poivrons verts', 1),
  (22, 'Tomates', 1),
  (22, 'Olives noires', 1),
  (23, 'Mozzarella', 1),
  (23, 'Lardons', 2),
  (23, 'Oignons rouges', 1),
  (23, 'Champignons', 1),
  (24, 'Mozzarella', 1),
  (24, 'Lardons', 2),
  (24, 'Oignons rouges', 1),
  (24, 'Champignons', 1),
  (25, 'Mozzarella', 1),
  (25, 'Jambon', 1),
  (25, 'Ananas', 2),
  (26, 'Mozzarella', 1),
  (26, 'Jambon', 1),
  (26, 'Ananas', 2),
  (27, 'Mozzarella', 1),
  (27, 'Jambon', 1),
  (28, 'Mozzarella', 1),
  (28, 'Jambon', 1),
  (29, 'Mozzarella', 1),
  (29, 'Merguez', 1),
  (30, 'Mozzarella', 1),
  (30, 'Merguez', 1);

INSERT INTO sauce VALUES
  ('Ketchup', 0.30, 31),
  ('Mayo', 0.30, 32),
  ('Sauce Barbecue', 0.30, 33);

INSERT INTO entree VALUES
  ('Breadsticks mozzarella', 5.00, 'Ketchup', 34),
  ('Breadsticks mozzarella', 5.00, 'Mayo', 35),
  ('Breadsticks mozzarella', 5.00, 'Sauce Barbecue', 36),
  ('Chicken Wings', 5.00, 'Ketchup', 37),
  ('Chicken Wings', 5.00, 'Mayo', 38),
  ('Chicken Wings', 5.00, 'Sauce Barbecue', 39),
  ('Chicken Nuggets', 5.00, 'Ketchup', 40),
  ('Chicken Nuggets', 5.00, 'Mayo', 41),
  ('Chicken Nuggets', 5.00, 'Sauce Barbecue', 42),
  ('Potatoes', 3.00, 'Ketchup', 43),
  ('Potatoes', 3.00, 'Mayo', 44),
  ('Potatoes', 3.00, 'Sauce Barbecue', 45),
  ('Salade Caesar', 7.00, 'Ketchup', 46),
  ('Salade Caesar', 7.00, 'Mayo', 47),
  ('Salade Caesar', 7.00, 'Sauce Barbecue', 48),
  ('Salade Grecque', 7.00, 'Ketchup', 49),
  ('Salade Grecque', 7.00, 'Mayo', 50),
  ('Salade Grecque', 7.00, 'Sauce Barbecue', 51);

INSERT INTO boisson VALUES
  ('Coca-Cola', '1,25L', 3.40, 52),
  ('Coca-Cola', '33cl', 2.00, 53),
  ('Coca-Cola Zero', '1,25L', 3.40, 54),
  ('Coca-Cola Zero', '33cl', 2.00, 55),
  ('Coca-Cola Cherry', '1,25L', 3.40, 56),
  ('Coca-Cola Cherry', '33cl', 2.00, 57),
  ('Oasis Tropical', '2L', 3.40, 58),
  ('Oasis Tropical', '33cl', 2.00, 59),
  ('Orangina', '1,5L', 3.40, 60),
  ('Orangina', '33cl', 2.00, 61),
  ('Sprite', '1,25L', 3.40, 62),
  ('Sprite', '33cl', 2.00, 63),
  ('Vittel', '50cl', 2.00, 64),
  ('Perrier', '33cl', 2.00, 65),
  ('Capri-Sun', '20cl', 2.00, 66);

INSERT INTO dessert VALUES
  ('Cookie Tout Choco', 1.80, 67),
  ('Cookie Choco au Lait', 1.80, 68),
  ('Pirulo', 1.80, 69),
  ('Magnum Almond', 2.00, 70),
  ('Fondant au Chocolat', 2.50, 71);

INSERT INTO menu_items VALUES
  (38, 1, 'Mega Menu', 72),
  (43, 1, 'Mega Menu', 72),
  (9, 1, 'Mega Menu', 72),
  (11, 1, 'Mega Menu', 72),
  (52, 1, 'Mega Menu', 72);

INSERT INTO utilisateur (prenom, nom, email, mdp, adr_ville, adr_rue, adr_code_postal) VALUES
  ('Lara', 'Pidité', 'flaaash@gmail.com', 'VroomVroom', 'Paris', '6 rue Rié', 75013);

INSERT INTO commande (id_client, date_cmd, prise_en_charge, livree) VALUES
  (1, '2022-05-25 12:30', 'false', 'false'),
  (1, '2022-05-25 19:45', 'false', 'false');

INSERT INTO commande_produits VALUES
  (1, 38, 2),
  (1, 8, 1),
  (1, 63, 1),
  (1, 67, 2),
  (2, 72, 1);
