;(function () {
    'use strict';

    angular.module('app', [
        'blueimp.fileupload'
    ])
        .controller('DemoFileUploadController', [
            '$scope', '$http', '$timeout', 'fileUploadService', '$filter', '$window',
            function ($scope, $http, $timeout, fileUploadService) {
                $scope.progress = 0;
                $scope.videos = [];
                $scope.uploadVideo = function (file) {
                    fileUploadService.uploadFileToUrl(file).then(function (data) {
                        $scope.videos.push(data.data.hashed_id);
                        $scope.clearQueue();
                    }, function (res) {
                        alert(res.data.error);
                        $scope.clearQueue();
                    }, function (e) {
                        $scope.progress = Math.floor((e.loaded / e.total) * 100);
                    })
                };

                $scope.clearQueue = function () {
                    $scope.queue = [];
                    $timeout(function () {
                        $scope.progress = 0;
                    }, 1000);
                }

            }
        ])

}());
