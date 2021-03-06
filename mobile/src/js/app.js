

angular.module('Vuba.mobile', [
  'ngRoute',
  'mobile-angular-ui',
  'Vuba.mobile.services',
  'Vuba.mobile.directives',
  'Vuba.mobile.controllers.Main'
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html', 
       controller: 'MainController'
    })
    .when('/about', {
        templateUrl: 'views/about.html', 
        controller: 'MainController'
    })
    .when('/stepone', {
        templateUrl: 'views/stepone.html', 
        controller: 'MainController'
    })
    .when('/steptwo', {
        templateUrl: 'views/steptwo.html', 
        controller: 'MainController'
    })
    .when('/record', {
        templateUrl: 'views/record.html', 
        controller: 'MainController'
    })
    .when('/search', {
        templateUrl: 'views/search.html', 
        controller: 'SearchController'
    });
}]);

/*var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
         console.log('Received Event: ' + id);
        angular.bootstrap(document, ["Vuba.mobile"]);
    }
};*/