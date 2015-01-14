angular.module('Vuba.mobile', [
  'ngRoute',
  'mobile-angular-ui',
  'Vuba.mobile.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});