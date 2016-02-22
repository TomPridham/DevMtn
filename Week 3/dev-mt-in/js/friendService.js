/**
 * Created by Tom on 2/18/2016.
 */
myApp.service('friendService', function ($http, $q) {
    var baseUrl = 'http://connections.devmounta.in/';

    this.findFriends = function (userId, query) {
        var defer = $q.defer();
        $http({
            url: baseUrl + '/api/friends/' + userId + '?name=' + query,
            method: 'GET'
        }).then(function (response) {
            console.log(response.data);
            defer.resolve(response.data);
        });
        return defer.promise;
    };

    this.addFriend = function (userId, friendId) {
        var defer = $q.defer();
        $http({
            method: 'PUT',
            url: baseUrl + '/api/friends/' + userId,
            data: {friendId: friendId}
        }).then(function (response) {
            defer.resolve(response);
        });
        return defer.promise;
    };

    this.removeFriend = function (userId, friendId) {
        var defer = $q.defer();
        $http({
            method: 'PUT',
            url: baseUrl + '/api/friends/remove/' + userId,
            data: {friendId: friendId}
        }).then(function (response) {
            defer.resolve(response);
        });
        return defer.promise;
    };

    this.findFriendsFriends = function (profile) {
        var index = 0;
        var defer = $q.defer();
        function getNextFriend() {
            if (profile.friends[index]) {
                $http({
                    url: baseUrl + '/api/friends-friends/' + profile.friends[index]._id,
                    method: "GET"
                }).then(
                    function (friends) {
                        profile.friends[index].friends = friends.data;
                        index++;
                        getNextFriend();
                    }).catch(function (err) {
                    return console.log(err);
                });
            } else {
                defer.resolve(profile);
                return defer.promise;
            }
        }
        getNextFriend();
    };
});