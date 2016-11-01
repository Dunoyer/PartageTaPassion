'use strict';

/**
 * @ngdoc overview
 * @name partageTaPassionApp
 * @description
 * # partageTaPassionApp
 *
 * Configuration du module principale de l'application
 */
angular.module('partageTaPassionApp', [])

.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'modules/home/views/home.html'
    })

    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'modules/authentication/views/login.html',
      hideMenus: true
    })

    .otherwise({ redirectTo: '/login' });
}])
