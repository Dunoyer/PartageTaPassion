'use strict';

/**
 * @ngdoc function
 * @name partageTaPassionAppp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partageTaPassionAppp
 */
angular.module('partageTaPassionApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //
    $scope.affichage = function () {
      $http.get('/api/affiche')
        .success(function(data){
          $scope.listePerso=data;
        })
    };

  });
