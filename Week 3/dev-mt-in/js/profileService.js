/**
 * Created by Tom on 2/16/2016.
 */

timeApp.service('profileService', function ($http) {

    var baseUrl = 'http://connections.devmounta.in/';
    this.saveProfile = function (profile) {
        return $http({
            method: 'POST' // Request method.
            , url: baseUrl + 'api/profiles/' // URL we are making the request to.
            , data: profile // The data we are requesting be posted.
        })
            .then(function (profileResponse) { // What to do after a response comes back from the server.
                localStorage.setItem('profileId', JSON.stringify({profileId: profileResponse.data._id})); // Save our unique _id to local storage
                console.log(profileResponse);
            })
            .catch(function (err) {
                console.error(err);
            });
    };

    this.checkForProfile = function (profileId) {
        return $http({
            method: 'GET'
            , url: baseUrl + 'api/profiles/' + profileId
        });
    };

    this.deleteProfile = function () {
        var profileId = JSON.parse(localStorage.getItem('profileId'));
        return $http({
            method: 'DELETE',
            url: baseUrl + 'api/profiles/' + profileId.profileId
        });
    };
});