### Lancement du projet

- décompresser l'archive
- se déplacer à la racine du projet
- se connecter à l'utilisateur postgres avec 'psql -U postgres'
- rentrer votre mot de passe
- créer une database "pizzahot" avec 'CREATE DATABASE pizzahot;'
- se connecter à la database pizzahot avec '\c pizzahot'
- exécuter le script d’initialisation de la base de données "init.sql" avec '\i init.sql'
- sortir de postgreSQL
- dans le pool de main.js, ligne 9 'password', mettre le mot de passe de l'utilisateur postgres à la place de 'mdp'
- lancer node main.js
