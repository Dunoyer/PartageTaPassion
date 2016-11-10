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
      templateUrl: 'views/login.html',
      controller: 'loginController'
    })
    .when('/accueil/membre', {
      templateUrl: 'views/accueil.html',
      controller: 'mainController'
    })

    .otherwise({ redirectTo: '/' });
}]);
