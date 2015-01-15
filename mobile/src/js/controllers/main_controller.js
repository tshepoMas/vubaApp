angular.module('Vuba.mobile.controllers.Main', [])

.controller('MainController', function($scope){
    $scope.myPictures = [];
    $scope.$watch('myPicture', function(value) {
        if (value) {
            $scope.myPictures.push(value);
        }
    }, true);
});