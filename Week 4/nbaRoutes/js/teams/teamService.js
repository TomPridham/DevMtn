var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {

    this.addNewGame = function (gameObj) {
        var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;

        if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
            gameObj.won = true;
        } else {
            //if(gameObj.homeTeamScore === gameObj.opponentScore){
            //    gameObj.
            //}
            gameObj.won = false;
        }

        $http.post(url, gameObj);

    };

    this.getTeamData = function (team) {
        var defer = $q.defer();
        var url = 'https://api.parse.com/1/classes/' + team;

        $http.get(url + team).then(
            function (data) {
                var results = data.data.results;
                var wins = 0;
                var losses = 0;

                for (var i = 0; i < results.length; i++) {
                    if (results.won) {
                        wins++;
                    } else {
                        losses++;
                    }
                }
                results.wins = wins;
                results.losses = losses;
                defer.resolve(results)

            }
        );
        return defer.promise;
    };
});