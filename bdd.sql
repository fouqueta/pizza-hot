DROP TABLE IF EXISTS menus CASCADE;
DROP TABLE IF EXISTS pizza CASCADE;
DROP TABLE IF EXISTS ingredient CASCADE;
DROP TABLE IF EXISTS entree CASCADE;
DROP TABLE IF EXISTS boisson CASCADE;
DROP TABLE IF EXISTS dessert CASCADE;
DROP TABLE IF EXISTS sauce CASCADE;
DROP TABLE IF EXISTS produits CASCADE;
DROP TABLE IF EXISTS commande CASCADE;
DROP TABLE IF EXISTS utilisateur CASCADE;
DROP TABLE IF EXISTS livreur CASCADE;

CREATE TABLE menus (
  nom varchar(20) primary key,
  prix float(4) not null,
  nb_entree integer not null,
  nb_pizza integer not null,
  nb_boisson integer not null,
  nb_dessert integer not null
);

CREATE TABLE pizza (
  nom varchar(20),
  taille varchar(10) not null,
  prix float(4) not null,
  PRIMARY KEY (nom, taille)
);

CREATE TABLE ingredient (
  nom varchar(20) primary key,
  prix  float(4) not null,
  categorie varchar(20)
);

CREATE TABLE entree (
  nom varchar(20) primary key,
  prix float(4) not null,
  sauce varchar(20),
  foreign key (sauce) references sauce(nom)
);

CREATE TABLE boisson (
  nom varchar(20),
  volume varchar(20) not null,
  prix float(4) not null
  PRIMARY KEY (nom, volume)
);

CREATE TABLE dessert (
  nom varchar(20) primary key,
  prix float(4) not null
);

CREATE TABLE sauce
  nom varchar(20) primary key,
  prix float(4) not null
);

CREATE TABLE produits (

);

CREATE TABLE utilisateur (
  nom varchar(20) primary key,
  prenom varchar(20) not null,
  email varchar(50) not null,
  mdp varchar(100) not null,
  adr_ville varchar(100) not null,
  adr_rue varchar(100) not null,
  adr_numero integer not null,
  adr_code_postal char(5) not null
);

CREATE TABLE commande (
  id serial primary key,
  montant float(5) not null,
  entree varchar(20),
  boisson varchar(20),
  pizzas integer,
  sauce
  dessert
  menus
  date_cmd date
  foreign key (pizzas) references pizza(nom)
);
