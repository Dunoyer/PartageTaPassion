'use strict';

/**
 * @ngdoc function
 * @name partageTaPassionAppp.controller:mainController
 * @description
 * # mainController
 * Controller of the partageTaPassionAppp
 */
angular.module('partageTaPassionApp')
  .controller('mainController', function ($scope, authentificationService, $location) {

    // Information sur l'utilisateur
    $scope.prenom = authentificationService.getUtilisateur().prenom;

   /* $scope.contenuPrincipal = function () {
      return contenuService.getAllContenuAPI();
    };*/
  });
