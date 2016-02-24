/**
 * Created by Tom on 2/23/2016.
 */
angular.module('directivePractice').directive('lessonHider', function () {
    return {
        template: '<ng-include src="template"/>',
        restrict: 'E',
        scope: {
            lesson: '=',
            dayAlert: '&'

        },
        controller: function ($scope, lessonService) {

            $scope.getSchedule = lessonService.getSchedule();
        },
        link: function (scope, element, attrs) {
            scope.getSchedule.then(function (result) {
                scope.schedule = result.data;


                for (var i = 0; i < scope.schedule.length; i++) {
                    scope.template = 'lessonHider.html';
                    if (scope.schedule[i].lesson === scope.lesson) {
                        element.css("text-decoration", "line-through");
                        scope.lessonDay = scope.schedule[i].weekday;
                        scope.template = 'scheduled.html';
                        return;
                    }
                }
            });
        }
    };
});
