# PartageTaPassion

Le projet "Partage ta Passion" est une plateforme qui permet à un individu ou un groupe d'individus de partager leurs passions afin de monter un projet en commun.

## Frameworks de développement 

AngularJS 1 et Node.js sont à l'honneur sur ce projet.

## Base de donnée 
Utilisation de <strong> MySQL </strong>

## Serveur d'intégration continue pour l'automatisation des tâches (tests + déploiement)

Utilisation du serveur d'intégration continue <strong> Jenkins </strong> connecté au répository.
Lancement du build avec la commande windows `grunt default` pour lancer les tâches.
- <strong> jshint: </strong> Détection des erreurs et des problèmes potentiels
- <strong> jscs: </strong> Vérificateur de style de code
- <strong> test: </strong> Lancement des tests unitaires
- <strong> build: </strong> Lancement du build

## Testing

Utilisateur de la commande `grunt test` pour lancer les tests unitaires avec Karma et Jasmine.
