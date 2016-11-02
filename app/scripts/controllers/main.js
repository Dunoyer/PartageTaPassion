'use strict';

/**
 * @ngdoc function
 * @name partageTaPassionAppp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partageTaPassionAppp
 */
angular.module('partageTaPassionApp')
  .controller('headerController', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('mainController', function ($scope, authentificationService, $location) {

    $scope.prenom = authentificationService.getUtilisateur().prenom;

    // Déconnexion
    $scope.logdown = function () {
      authentificationService.deconnexion();
      $location.path("/");
    };

  });
