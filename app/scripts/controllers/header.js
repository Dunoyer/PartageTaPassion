angular.module('partageTaPassionApp')
  .controller('headerController', function ($scope, authentificationService, $location, $rootScope) {

    $scope.deconnectionBoutton = true;

    // Déconnexion
    $scope.logdown = function () {
      authentificationService.deconnexion();
      $location.path("/");
    };

    // Affichage du boutton de déconnexion
    $rootScope.on('connectionStatusChanged', function (evn, args) {

      $scope.deconnectionBoutton = args.afficheDeconnection;
    });
  });
