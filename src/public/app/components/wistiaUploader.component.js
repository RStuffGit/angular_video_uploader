angular.module('app').component('wistiaUploader', {
    templateUrl: '/app/views/wistiaUploader.template.html',
    controller: [
        '$scope', '$http', '$timeout', 'fileUploadService',
        function ($scope, $http, $timeout, fileUploadService) {
            var that = this;
            this.progress = 0;
            this.videos = [];
            this.uploadVideo = function (file, clearCallback) {
                fileUploadService.uploadFileToUrl(file).then(function (data) {
                    that.videos.push(data.data.hashed_id);
                    that.clearQueue(file, clearCallback);
                }, function (res) {
                    alert(res.data.error);
                    that.clearQueue(file, clearCallback);
                }, function (e) {
                    that.progress = Math.floor((e.loaded / e.total) * 100);
                })
            };

            this.clearQueue = function (file, clearCallback) {
                if (typeof clearCallback === "function") {
                    clearCallback([file]);
                }
                $timeout(function () {
                    that.progress = 0;
                }, 1000);
            }

        }
    ]
});
