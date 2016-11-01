# PartageTaPassion

Le projet "Partage ta Passion" est une plateforme qui permet à un individu ou un groupe d'individus de partager leurs passions afin de trouver des profils similaires pour monter un projet en commun.

## Frameworks de développement 

Gestion de la partie Front-End avec AngularJS 1.
Gestion de la partie Back-End agissant comme une API REST avec Node.js. 

## Base de données 
Utilisation de <strong> MySQL </strong> pour la persistance des données.

## Serveur d'intégration continue pour l'automatisation des tâches (tests + déploiement)

Utilisation du serveur d'intégration continue <strong> Jenkins </strong> connecté au répository.
Lancement du build avec la commande windows `grunt default` pour lancer les tâches.
- <strong> jshint: </strong> Détection des erreurs et des problèmes potentiels
- <strong> jscs: </strong> Vérificateur de style de code
- <strong> test: </strong> Lancement des tests unitaires 
- <strong> build: </strong> Lancement du build

## Lancement du serveur Web
Commande `nodemon server.js`

## Testing

Utilisateur de la commande `grunt test` pour lancer les tests unitaires avec Karma et Jasmine.

## Téléchargement des dépendances
Utilisation de la commande `npm install` pour télécharger les dépendances sur sa machine.
