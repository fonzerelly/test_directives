describe("How to test directives", function () {
  beforeEach(module('templates'));

  var applyScope;
  beforeEach(inject(function($rootScope, $compile, $templateCache) {
    var template = angular.element($templateCache.get('templates/ng-if-example.html'));
    applyScope = function(scope) {
        var $scope =  angular.extend($rootScope.$new(), scope);
        $compile(template)($scope);
        $scope.$digest();
        return template;
    };
  }));

  describe('when test is true', function () {
    var compiledDom;
    beforeEach(function() {
      compiledDom = applyScope({
        test : true
      });
    });

    it("h1 rendered", function () {
        expect(compiledDom.find('span').length).toEqual(1);
    });
  });

 describe('when test is false', function () {
    var compiledDom;
    beforeEach(function() {
      compiledDom = applyScope({
        test : false
      });
    });

    it("rendered", function () {
        expect(compiledDom.find('span').length).toEqual(0);
    });
  });

});
