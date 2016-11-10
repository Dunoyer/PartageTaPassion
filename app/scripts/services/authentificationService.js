'use strict';
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
      getUtilisateurAPI : function(email,password){
        return $http.post('/api/authentification', { email: email, password: password });
      },
      getEstConnecte : function(){
        return estConnecte;
      },
      connection : function(email, password){

        // API REST - Authentification
        return $http.post('/api/authentification', { email: email, password: password })
          .then(function (response){
            utilisateur = response.data;
            estConnecte = true;

            $rootScope.$broadcast("connectionStatusChanged", {getUtilisateur: utilisateur, getEstConnecte: estConnecte});
          })
          .catch(function (error) {
            utilisateur = null;
            estConnecte = false;
            $rootScope.$broadcast("connectionStatusChanged", {getUtilisateur: utilisateur, getEstConnecte: estConnecte});
          });
      },
      deconnexion : function () {
        utilisateur = null;
        estConnecte = false;
        $rootScope.$broadcast("connectionStatusChanged", {getUtilisateur: utilisateur, getEstConnecte: estConnecte});
      }
    };
  });
