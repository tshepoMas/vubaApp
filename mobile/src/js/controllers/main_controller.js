angular.module('Vuba.mobile.controllers.Main', [])

.controller('MainController', function($scope, $location, $rootScope){
    $scope.myPictures = [];
    $scope.$watch('myPicture', function(value) {
        if (value) {
            $scope.myPictures.push(value);
        }
    }, true);
    
    $scope.go = function(view)
    {
        $location.path('/' + view);  
    };
    
    $scope.show = function(){
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
    };
    
    var onSuccess = function(position) {
        $scope.position = position;
      };
      var onError = function(error) {
        console.log('ERROR! code: ' + error.code + ' ' + 'message: ' + error.message);
      };
      
})
.controller('SearchController', function($scope, $rootScope, NotificationService){
    $scope.employees = [];
    
     $scope.showAlert = function () {
        NotificationService.alert("You caused an alert.", "Alert", "Ok", function () {
            $scope.message = "You clicked it!"
        })
    };
});