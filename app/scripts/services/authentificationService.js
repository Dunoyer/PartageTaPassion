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

        // API REST - Authentification
        $http.post('/api/authentification', { email: email, password: password })
          .then(function (response){
            utilisateur = response.data;
            estConnecte = true;

            alert('authen ' + estConnecte);

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
