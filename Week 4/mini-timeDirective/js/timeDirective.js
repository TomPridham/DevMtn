/**
 * Created by Tom on 2/23/2016.
 */

angular.module('timeApp').directive('showTime', function () {

    return {
        restrict: 'E',
        template: '<div>The current time is: {{time | date:format}}</div><br><div>The current GMT time is {{gmtTime | date:format}}</div>',
        scope:{
            format: '=',
            update: '&'
        },
        link: function (scope, element, attrs) {
            var currentTime = new Date();
            element.css({
                "color":'pink',
                "fontWeight":'bold'
            });

            element.on('mousedown', function(){
                //scope.time = new Date();
                scope.update();
                scope.$apply();
            });
            scope.time = currentTime;
            scope.gmtTime = new Date(currentTime.toGMTString());
        },
        controller: function($scope, $timeout){
            //myService.validateEmail($scope.email).
            //    then(
            //    function(){
            //        //do stuff
            //    }
            //);
        }
    };
});