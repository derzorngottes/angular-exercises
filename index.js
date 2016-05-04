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
}]);

app.controller('pimoneyController', ['$scope', function pimoneyController($scope) {
  $scope.pi = 3.14159265359;
}]);

app.controller('sayController', ['$scope', function sayController($scope) {
  $scope.something = '';
}]);

app.controller('droptwoController', ['$scope', function droptwoController($scope) {
  $scope.pi = 3.14159265359;
  $scope.numbers = ['1','2','3','4','5','6','7'];
  $scope.digits = $scope.numbers[1];
}]);

app.controller('tipController', ['$scope', function tipController($scope) {
  $scope.price = 0;
  $scope.numbers = [
    { id: '10%', calc: 0.1 },
    { id: '15%', calc: 0.15 },
    { id: '20%', calc: 0.2 }
  ];
  $scope.tip = $scope.numbers[2];
}]);

app.controller('madController', ['$scope', function madController($scope) {
  $scope.boyname = 'Erwin';
  $scope.adjective = 'ponderous';
  $scope.pluralnoun = 'poodles';
  $scope.pluralinsect = 'hornets';
  $scope.pluralnoun2 = 'firemen';
  $scope.verb = 'lazy';
}]);

app.controller('symsController', ['$scope', '$sce', function symsController($scope, $sce) {
  $scope.symbols = [
    { id: 'heart', html: $sce.trustAsHtml('&hearts;') },
    { id: 'spade', html: $sce.trustAsHtml('&spades;') },
    { id: 'club', html: $sce.trustAsHtml('&clubs;') },
    { id: 'diam', html: $sce.trustAsHtml('&diams;') }
  ]
}]);
