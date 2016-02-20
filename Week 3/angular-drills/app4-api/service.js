app.service('server4', function ($http, $q) {

    var baseUrl = 'http://pokeapi.co/api/v2/pokemon/';

    this.getData = function (query) {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: baseUrl + query
        }).then(
            function (response) {
                console.log(response.data);
                defer.resolve(response.data);
            });
        return defer.promise;
    };
});