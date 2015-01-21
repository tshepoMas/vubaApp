'use strict';
var app = angular.module('Vuba.mobile.directives', []);
app.directive('camera', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            elm.on('click', function() {
                navigator.camera.getPicture(
                    function(imageURI) {
                        scope.$apply(function() {
                            ctrl.$setViewValue(imageURI);
                        });
                    },
                    function(err) {
                        ctrl.$setValidity('error', false);
                    }, {
                        quality: 50, 
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType : Camera.PictureSourceType.CAMERA,
                        allowEdit : false,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: 1000,
                        targetHeight: 1000,
                        popoverOptions: CameraPopoverOptions,
                        saveToPhotoAlbum: true 
                       });
            });
        }
    };
});

app.directive('video', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            elm.on('click', function() {
                navigator.device.capture.captureVideo(
                    function(mediaFiles) {
                        scope.$apply(function() {
                            ctrl.$setViewValue(mediaFiles);
                        });
                    },
                    function(err) {
                        ctrl.$setValidity('error', false);
                    }, {
                        limit: 3,
                        duration: 5
                       });
            });
        }
    };
});

app.factory("NotificationService", function () {
    return {
        alert: function (message, title, buttonText, buttonAction) {
            navigator.notification.alert(message,
                function () {
                    $rootScope.$apply(function () {
                        buttonAction();
                    })
                },
                title,
                buttonText);
        }
    }
});