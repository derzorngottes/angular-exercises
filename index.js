var app = angular.module('angular-exercises', []);

app.controller('helloController', ['$scope', function helloController($scope) {
  $scope.greeting = 'Hello';
}]);

app.controller('whoController', ['$scope', function whoController($scope) {
  $scope.name = '';
}]);

app.controller('dropdownController', ['$scope', function downdownController($scope) {
  $scope.animals = [
    'dogs',
    'cats',
    'dogs and cats',
    'neither'
  ];
}])
