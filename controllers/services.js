var izochi = angular.module('izochi', ['ngRoute']);

izochi.config(function($routeProvider) {
  $routeProvider
  .when('/test', {
    templateUrl: '../pages/map.html',
    controller: 'TestCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
});

izochi.controller('TestCtrl', function($scope) {
  console.log('hello from controller');
});