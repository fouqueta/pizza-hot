DROP TABLE IF EXISTS menu CASCADE;
DROP TABLE IF EXISTS pizza CASCADE;
DROP TABLE IF EXISTS ingredient CASCADE;
DROP TABLE IF EXISTS entree CASCADE;
DROP TABLE IF EXISTS boisson CASCADE;
DROP TABLE IF EXISTS dessert CASCADE;
DROP TABLE IF EXISTS sauce CASCADE;
DROP TABLE IF EXISTS produit CASCADE;
DROP TABLE IF EXISTS commande CASCADE;
DROP TABLE IF EXISTS utilisateur CASCADE;
DROP TABLE IF EXISTS livreur CASCADE;

CREATE TABLE menu (
  nom varchar(20) primary key,
  prix float(4) not null,
  nb_entree integer not null,
  nb_pizza integer not null,
  nb_boisson integer not null,
  nb_dessert integer not null,
);

CREATE TABLE menu_items (
  id_prod serial primary key,
  id_item integer not null,
  nom_menu varchar(20),
  foreign key (id_prod) references produit(id_prod),
  foreign key (id_item) references produit(id_prod),
  foreign key (nom_menu) references menu(nom)
);

CREATE TABLE pizza (
  id_pizza serial primary key,
  nom varchar(20),
  taille varchar(10) not null,
  prix float(4) not null,
  id_prod integer not null,
  foreign key (id_prod) references produit(id_prod)
);

CREATE TABLE ingredient (
  nom varchar(20) primary key,
  prix  float(4) not null,
  categorie varchar(20)
);

CREATE TABLE pizza_ingredients ( 
  id_pizza integer not null,
  id_ingredient varchar(20) not null,
  foreign key (id_pizza) references pizza(id_pizza),
  foreign key (id_ingredient) references ingredient(nom),
  primary key (id_pizza, id_ingredient)
);

CREATE TABLE entree (
  nom varchar(20) primary key,
  prix float(4) not null,
  sauce varchar(20),
  id_prod integer not null,
  foreign key (sauce) references sauce(nom)
  foreign key (id_prod) references produit(id_prod)
);

CREATE TABLE boisson (
  nom varchar(20),
  volume varchar(20) not null,
  prix float(4) not null
  id_prod integer not null,
  foreign key (id_prod) references produit(id_prod),
  PRIMARY KEY (nom, volume)
);

CREATE TABLE dessert (
  nom varchar(20) primary key,
  prix float(4) not null
  id_prod integer not null,
  foreign key (id_prod) references produit(id_prod)
);

CREATE TABLE sauce 
  nom varchar(20) primary key,
  prix float(4) not null  
  id_prod integer not null,
  foreign key (id_prod) references produit(id_prod)
);

CREATE TABLE produit (
  id_prod serial primary key,
  type_prod varchar(20) not null,
);

CREATE TABLE commande_produits (
  id_produit integer not null,
  id_commande integer not null,
  foreign key (id_produit) references produit(id_prod),
  foreign key (id_cmd) references commande(id_commande),
  primary key (id_produit, id_cmd)
);

CREATE TABLE commande (
  id_commande serial primary key,
  id_client int not null,
  montant float(5) not null,
  date_cmd datetime not null, 
  prise_en_charge boolean not null,
  livree boolean not null,
  foreign key (id_client) references utilisateur(id_client)
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

CREATE TABLE utilisateur (
  id_client serial,
  nom varchar(20),
  prenom varchar(20) not null,
  email varchar(50) not null,
  mdp varchar(100) not null,
  adr_ville varchar(100) not null,
  adr_rue varchar(100) not null,
  adr_numero integer not null,
  adr_code_postal char(5) not null,
  primary key (id_client, nom)
);