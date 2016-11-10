'use strict';
/* login.js
 * Controlleur gérant la connexion des utilisateurs
 */
angular.module('partageTaPassionApp')
  .controller('loginController', function ($scope, authentificationService, $location, $rootScope) {
    $scope.email="";
    $scope.password="";
    $scope.erreur=null;

    // Connexion
    $scope.signup = function(){

      // Si le formulaire est valide
      if($scope.signupForm.$valid){

        authentificationService.connection($scope.email, $scope.password); // Appel du service d'authentification

      }else{
        $scope.erreur="Email ou mot de passe invalide !";
        $location.path("/");
      }
    };

    // Changement du statut de connexion
    $scope.$on("connectionStatusChanged", function(even, data){

      if(data.getEstConnecte){
        $location.path("/accueil/membre");

      }else{
        $scope.erreur="Email ou mot de passe invalide !";
        $location.path("/");
      }
    });
  });
