/* authentificationService.js
 * Service gérant l'authentification
 */
angular.module('partageTaPassionApp')
  .factory("authentificationService", function($http, $rootScope){
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

        // API REST
        $http.post('/api/authentification', { email: email, password: password })
          .success(function (response){
            utilisateur = response;
            estConnecte = true;
          })
          .error(function(error){
            alert('pas de données !');
          });

        $rootScope.$broadcast("connectionStatusChanged", {getUtilisateur: utilisateur, getEstConnecte: estConnecte, afficheDeconnection : true});
      },
      deconnexion : function () {
        utilisateur = null;
        estConnecte = false;
        $rootScope.$broadcast("connectionStatusChanged", {afficheDeconnection: false});
      }
    };
  });
