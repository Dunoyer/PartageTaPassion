'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('partageTaPassionApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });

  it('Mon test', function () {
    var a = 1;
    var b = 1;
    expect(a+b).toBe(2);
  });
});
