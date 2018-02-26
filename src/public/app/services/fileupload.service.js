(function () {
    'use strict';
    var myApp = angular.module('app');
    myApp.service('fileUploadService', function ($http, $q, config) {

        this.uploadFileToUrl = function (file) {
            var fileFormData = new FormData();
            fileFormData.append('file', file);

            var deffered = $q.defer();
            $http({
                url: config.uploadUrl,
                method: "POST",
                params: {api_password: config.api_password},
                data: fileFormData,
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined},
                uploadEventHandlers: {
                    progress: function(e) {
                        deffered.notify(e);
                    }
                }
            }).then(function (response) {
                deffered.resolve(response);
            }, function (response) {
                deffered.reject(response);
            });

            return deffered.promise;
        }
    });
})();