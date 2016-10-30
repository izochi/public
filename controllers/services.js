var izochi = angular.module('izochi', ['ngRoute']);

izochi.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../pages/login.html'
  })
  .when('/test', {
    templateUrl: '../pages/map.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

izochi.controller('TestCtrl', function($scope) {
  console.log('hello from test page!');
});

izochi.controller('LoginCtrl', function($scope) {
  console.log('hello from login page!');
});

/*
notes:
looks like when 
  controller: 'LoginCtrl' or 'templateUrl'
is put in when object,
the controller function is run, causing
the log to run twice bc
controller is called AND called again on html page (ng-controller).
*/