'use strict';

/**
 * @ngdoc function
 * @name partageTaPassionAppp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partageTaPassionAppp
 */
angular.module('partageTaPassionApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('partageTaPassionApp')
  .controller('testRouteCtrl', function ($scope, $http) {
    $scope.affichage=function(){
      $http.get('/api/affiche')
        .success(function(data){
          $scope.listePerso=data;
        })
    }
  });

