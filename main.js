const express = require('express');
const db = require('./queries');
const serveur = express();
const port = 8080;



serveur.set('view engine', 'ejs');
serveur.use(express.static('public'));

serveur.get('/', function (req,res) {
    res.sendFile("accueil.html", {root:'public'});
});

/*
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'init',
    password: 'password',
    port: 5432,
})

async function operations() {
    const client = await pool.connect();
// requêtes, traitement...
    let res = await client.query ("SELECT * FROM pizza");
// dernière étape indispensable, libérer le client :
    client.release();
// retour facultatif d'un résultat :
    return resultat;
}
operations()
    .then(resultat => { console.log(resultat)})
    .catch(err => console.err (err.stack)); // si une erreur se produit.


*/
serveur.listen(8080,
    () => {
        console.log(`Server running at http://localhost:${port}/`);
    }
);


