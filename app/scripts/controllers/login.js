/* login.js
 * Controlleur gérant la connexion des utilisateurs
 */
angular.module('partageTaPassionApp')
  .controller('loginController', function ($scope) {
    $scope.email="";
    $scope.password="";

    // Connexion
    $scope.signup = function(){
      if($scope.signupForm.$valid){

      }else{

      }
    };

  });
