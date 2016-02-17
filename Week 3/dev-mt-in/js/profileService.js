/**
 * Created by Tom on 2/16/2016.
 */

myApp.service('profileService', function(){

    this.saveProfile = function(profile) {
        localStorage.setItem('profile', JSON.stringify(profile));
    };

    this.checkForProfile = function() {
        if (localStorage.getItem('profile')) {
            return JSON.parse(localStorage.getItem('profile'));
        }
        return {
            friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
        }
    };

    this.deleteProfile = function(){
        localStorage.removeItem('profile');
    };
});