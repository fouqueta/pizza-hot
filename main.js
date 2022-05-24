const express = require('express');
const serveur = express();
const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pizzahot',
    password: 'BD6',
    port: 5432,
});


async function init_items() {
    const client = await pool.connect();
    let items = {
        menus: await client.query ("SELECT * FROM menu"),
        pizzas: await client.query ("SELECT nom, prix, taille FROM pizza"),
        taillePizzas: await client.query("SELECT DISTINCT taille FROM pizza"),
        ingredients: await client.query ("SELECT * FROM ingredient"),
        pizzaIngredients: await client.query("SELECT * FROM pizza_ingredients"),
        entrees: await client.query ("SELECT nom, prix, sauce FROM entree"),
        boissons: await client.query ("SELECT nom, volume, prix FROM boisson"),
        desserts: await client.query ("SELECT nom, prix FROM dessert"),
        sauces: await client.query ("SELECT nom, prix FROM sauce"),
    };
    client.release();
    return items;
}

async function init_livreurs() {
    const client = await pool.connect();
    let livreurs = await client.query ("SELECT nom, prenom, email, mdp FROM livreur");
    client.release();
    return livreurs;
}

// async function init_commandes() {
//     const client = await pool.connect();
//     let commandes = await client.query ("SELECT id_client, date_cmd, prise_en_charge, livree FROM commandes");
//     client.release();
//     return commandes;
// }


async function verifLivreurs(email, mdp) {
    const client = await pool.connect();
    let livreur = await client.query("SELECT * from livreur WHERE email = $1 AND mdp = $2;", [email, mdp]);
    client.release();
    if (livreur) { return true; }
    else { return false; }
}



var items = {};
var livreurs = {};
var commandes = {};

init_items()
    .then(resultat => { items = resultat })
    .catch(err => console.error(err.stack));
    
init_livreurs()
    .then(resultat => { livreurs = resultat })
    .catch(err => console.error(err.stack));
    
// init_commandes()
//     .then(resultat => { commandes = resultat })
//     .catch(err => console.error(err.stack));


serveur.set('view engine', 'ejs');
serveur.use(express.urlencoded({extended: true}));
serveur.use(express.static('public'));


serveur.get('/', function (req,res) {
    res.render('accueil.ejs', {menus: items.menus.rows, 
        pizzas: items.pizzas.rows,
        taille: items.taillePizzas.rows,
        ingredients: items.ingredients.rows,
        pizzaIngredients: items.pizzaIngredients.rows,
        entrees: items.entrees.rows,
        boissons: items.boissons.rows,
        desserts: items.desserts.rows,
        sauces: items.sauces.rows});
});


serveur.get('/livraison', function (req,res) {
    res.render('livraison.ejs', {livreurs: livreurs.rows});
});


serveur.post('/livraison/test', function (req,res) {
    console.log("test");
    alert("test !!");
    verifLivreurs(req.body.email, req.body.mdp)
        .then(resultat => { return resultat })
        .catch(err => console.error(err.stack));
});


serveur.listen(8080,
    () => {
        console.log(`Server running at http://localhost:8080`);
    }
);
