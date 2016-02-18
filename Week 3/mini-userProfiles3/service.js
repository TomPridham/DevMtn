var app = angular.module('userProfiles');

app.service('mainService', function ($http, $q) {

    this.getUsers = function () {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: 'http://reqres.in/api/users?page=1'
        }).then(function (response) {
            var cleanedResponse = response.data.data;
            for (var i = 0; i < cleanedResponse.length; i++) {
                cleanedResponse[i].first_name = 'Ralf'
            }
            defer.resolve(cleanedResponse);
        });
        return defer.promise;
    }

});
