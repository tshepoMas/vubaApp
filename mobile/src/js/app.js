angular.module('Vuba.mobile', [
  'ngRoute',
  'mobile-angular-ui',
  'Vuba.mobile.directives',
  'Vuba.mobile.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl:'views/home.html',
      controller: 'MainController',
      reloadOnSearch: false
  });
});