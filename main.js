const express = require('express');
const serveur = express();
const port = 8080;

serveur.set('view engine', 'ejs');
serveur.use(express.static('public'));

serveur.get('/', function (req,res) {
    res.sendFile("accueil.html", {root:'public'});
});

// serv.get('/livraison',function (req,res) {
// });

serveur.listen(8080,
    () => {
        console.log(`Server running at http://localhost:${port}/`);
    }
);
