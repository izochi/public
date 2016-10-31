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
  
  // --------- ANIMATE TYPING HEADER ---------- //
  
  //collection of characters to type
  var eng = ['I', 'z', 'o', 'c', 'h', 'i'];

  /*
  type: adds a character to inner html of header element
  */
  var type = function() {
    var toType = eng.shift();
    document.getElementsByClassName('login-header')[0].innerHTML += toType;
  }

  /*
  loopedTyping: simulates typing
  */
  var loopTimer;
  var loopedTyping = function() {
    if (eng.length > 0) {
      type();
    } else {
      clearTimeout(loopTimer);
    }
    loopTimer = setTimeout(loopedTyping.bind(null, eng), 90);
  }

  loopedTyping();

  // ----------- 
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