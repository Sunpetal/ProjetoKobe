
var myApp = angular.module('myAppp', [ ]);


myApp.controller('MainCtrl', ['$scope', function ($scope) {
    //Captura o modelo de dado
    //e/ou inicializa-o com a string existente
    $scope.myModel = '';
   
}]);