/**
 * Created by Tom on 2/23/2016.
 */
angular.module('directivePractice').service('lessonService', function ($http) {
    this.getSchedule = function(){
        return $http.get('schedule.json')
    };

});
