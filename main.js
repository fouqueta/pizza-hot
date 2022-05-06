const express = require('express');
const pg = require('pg');
const serveur = express();

serveur.set('view engine', 'ejs');
serveur.use(express.static('public'));

serveur.get('/', function (req,res) {
    res.sendFile("accueil.html", {root:'public'});
});

// serv.get('/livraison',function (req,res) {
// });

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pizzaHot',
    password: 'mettre_mdp',
    port: 5432,
});

async function operations() {
    const client = await pool.connect();
// requêtes, traitement...
    let res = await client.query ("SELECT * FROM pizza");
// dernière étape indispensable, libérer le client :
    client.release();
// retour facultatif d'un résultat :
    return res;
}
operations()
    .then(resultat => { console.log(resultat)})
    .catch(err => console.err (err.stack)); // si une erreur se produit.


serveur.listen(8080,
    () => {
        console.log(`Server running at http://localhost:8080}/`);
    }
);
