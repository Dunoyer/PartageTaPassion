angular.module('partageTaPassionApp')
  .controller('headerController', function ($scope, authentificationService, $location, $rootScope) {

    $scope.deconnectionBoutton = false;

    // Afficher le boutton de déconnexion si l'utilisateur est connecté
    $scope.$on('connectionStatusChanged', function(evn, args){
      if(args.getEstConnecte)
        $scope.deconnectionBoutton = true;
    });

    // Déconnexion
    $scope.logdown = function () {
      authentificationService.deconnexion();
      $scope.deconnectionBoutton = false;
      $location.path("/");
    };

    /* Affichage du boutton de déconnexion
    $rootScope.on('connectionStatusChanged', function (evn, args) {

      $scope.deconnectionBoutton = args.afficheDeconnection;
    });*/
  });
