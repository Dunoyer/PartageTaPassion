'use strict';

describe('Tests du service authentificationService', function () {

  var authentificationService, utilisateur, $httpBackend;

  // Chargement du module
  beforeEach(module('partageTaPassionApp'));

  // Initialisation du service et du mock scope
  beforeEach(inject(function (_authentificationService_, _$httpBackend_) {
    authentificationService = _authentificationService_;
    $httpBackend = _$httpBackend_;
  }));

  it('[T1] Connexion réussi de l\'utilisateur', function () {
    // Mock du module $http pour un comportement totalement contrôlé et guidé
    $httpBackend.expectPOST("/api/authentification").respond(200, {nom:"Dunoyer", prenom:"Yoan"});

    authentificationService.getUtilisateurAPI("dunoyer.yoan@gmail.com", "admin").success(function (response) {
      utilisateur = response;
    });

    $httpBackend.flush();
    expect(utilisateur.nom).toBe("Dunoyer");
    expect(utilisateur.prenom).toBe("Yoan");
  });

  it('[T2] ', function () {

    $httpBackend.expectPOST("/api/authentification").respond(200, {nom:"Dunoyer", prenom:"Yoan"});

    utilisateur = authentificationService.connection("dunoyer.yoan@gmail.com", "admin").getUtilisateur();

    console.log('Utilisateur => ' + authentificationService.getUtilisateur());
    $httpBackend.flush();
    expect(utilisateur.getUtilisateur().nom).toBe("Dunoyer");
    expect(utilisateur.prenom).toBe("Yoan");

  });
});
