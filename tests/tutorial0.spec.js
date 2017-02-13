describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));

 //test one

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});

    expect(scope.phones.length).toBe(3);

  }));

//test two

 it('expects a name to be correct', inject(function($controller) {
 	  var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});
	expect(scope.name).toBe('world');

  }));


});