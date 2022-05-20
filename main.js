const express = require('express');
const serveur = express();
const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pizzahot',
    password: 'mdp',
    port: 5432,
});


async function init_items() {
    const client = await pool.connect();
    let items = {
        menus: await client.query ("SELECT * FROM menu"),
        pizzas: await client.query ("SELECT nom, prix FROM pizza"),
        taillePizzas: await client.query("SELECT DISTINCT taille FROM pizza"),
        ingredients: await client.query ("SELECT * FROM ingredient"),
        entrees: await client.query ("SELECT nom, prix, sauce FROM entree"),
        boissons: await client.query ("SELECT nom, volume, prix FROM boisson"),
        desserts: await client.query ("SELECT nom, prix FROM dessert"),
        sauces: await client.query ("SELECT nom, prix FROM sauce"),
    };
    client.release();
    return items;
}

// init_items(menus);

// async function init_menus(tab) {
//     const client = await pool.connect();
//     let nb = await client.query ("SELECT count(nom) FROM menu");
//     for (let i = 0; i < nb; i++) {
//         tab[i] = {
//             nom: await client.query ("SELECT nom FROM menu")

//         }
//     }
//     let menus = await client.query ("SELECT * FROM menu");
//     client.release();
// }



// async function init_items(items) {
//     const client = await pool.connect();
//     let menus = await client.query ("SELECT * FROM menu");
//     let pizzas = await client.query ("SELECT nom, taille, prix FROM pizza");
//     let ingredients = await client.query ("SELECT * FROM ingredient");
//     let entrees = await client.query ("SELECT nom, prix, sauce FROM entree");
//     let boissons = await client.query ("SELECT nom, volume, prix FROM boisson");
//     let desserts = await client.query ("SELECT nom, prix FROM dessert");
//     let sauces = await client.query ("SELECT nom, prix FROM sauce");
//     client.release();
//     return [menus, pizzas, ingredients, entrees, boissons, desserts, sauces];
// }

var items = {};

init_items()
    .then(resultat => { items = resultat })
    .catch(err => console.err (err.stack));


serveur.set('view engine', 'ejs');
serveur.use(express.urlencoded({extended: true}));
serveur.use(express.static('public'));


// serveur.get('/', function (req,res) {
//     res.render('accueil.ejs', {items});
// });

serveur.get('/', function (req,res) {
    res.render('accueil.ejs', {menus: items.menus.rows, 
        pizzas: items.pizzas.rows,
        taille: items.taillePizzas.rows,
        ingredients: items.ingredients.rows,
        entrees: items.entrees.rows,
        boissons: items.boissons.rows,
        desserts: items.desserts.rows,
        sauces: items.sauces.rows});
});

// serv.get('/livraison',function (req,res) {
// });


serveur.listen(8080,
    () => {
        console.log(`Server running at http://localhost:8080`);
    }
);
