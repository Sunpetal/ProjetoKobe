var App = angular.module('App', [ ]);

App.controller('Auladia18ex4', ['$scope', '$filter'], function($scope, $filter){
	console.log($scope.nome);
$filter('truncate')($scope.nome, '4', '...veja mais'); //pra pegar o nome que ta no html eu preciso do $scope, por isso o $scope.nome
//dai o 4 e o veja mais sao parâmetros(que quando era uma pg só eu tava passando pelo html)
	});


 App.filter('truncate', function () {
    return function (text, length, end) {
      if(text){
        if (isNaN(length))
            length = 10;
        if (end === undefined)
            end = "...";
        if (text.length <= length) {
            return text;
        }
        else {
            return String(text).substring(0, length) + end;
        }
      }
    };
  });

 App.factory('someService', ['$filter', function($filter) {  //--> agora como coloco a factory no controller como manda no exercício??
  return function(data) {
    return $filter('truncate')(data);
  };
}]);