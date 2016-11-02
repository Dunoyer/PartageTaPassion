/* authentificationService.js
 * Service gérant l'authentification
 */
angular.module('partageTaPassionApp')
  .factory("authentificationService", function($http){
    var utilisateur = null;
    var estConnecte = false;

    return {
      getUtilisateur : function(){
        return utilisateur;
      },
      getEstConnecte : function(){
        return estConnecte;
      },
      connection : function(email, password){
        $http.post('/api/authentification', { email: mail, password: password })
          .then(function (response){
            alert('Récuparation des données OK ');
          })
          .then(function(error){
            alert('pas de données !');
          });
      }
    };
  });
