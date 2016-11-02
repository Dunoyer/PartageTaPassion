'use strict';

/**
 * @ngdoc overview
 * @name partageTaPassionApp
 * @description
 * # partageTaPassionApp
 *
 * Configuration du module principale de l'application
 */
angular.module('partageTaPassionApp', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/', {
      controller: 'loginController',
      templateUrl: 'views/login.html'
    })
    .when('/accueil/membre', {
      controller: 'mainController',
      templateUrl: 'views/accueil.html'
    })

    .otherwise({ redirectTo: '/' });
}]);
