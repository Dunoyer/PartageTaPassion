/* contenuService.js
 * Service gérant les informations publiés par les utilisateurs
 */
angular.module('partageTaPassionApp')
  .factory("contenuService", function($http, $rootScope){
    var contenu = null;

    return {
      getContenu : function(){
        return contenu;
      },
      getAllContenuAPI : function(){

        // API REST - Obtenu tous les contenus
        $http.get('/api/contenu')
          .success(function (response){
            contenu = response;
          })
          .error(function(error){
            alert('pas de données !');
          });
      },
      postContenu : function () {
        // API REST - Poster un contenu
        $http.post('/api/publier/contenu', { })
          .success(function (response){
            contenu = response;
          })
          .error(function(error){
            alert('pas de données !');
          });
      },
      putContenu : function (idcontenu) {
        // API REST - Mettre à jour un contenu
        $http.put('/api/maj/:idcontenu', {})
          .success(function (response){
            contenu = response;
          })
          .error(function(error){
            alert('pas de données !');
          });
      },
      deleteContenu : function (idcontenu) {
        // API REST - Supprimer un contenu
        $http.delete('/api/:delete', { })
          .success(function (response){
            contenu = response;
          })
          .error(function(error){
            alert('pas de données !');
          });
      }
    };
  });
