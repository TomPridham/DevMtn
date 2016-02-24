/**
 * Created by Tom on 2/24/2016.
 */
angular.module('carFire').service('carsService', function($stateParams){

//    getCars()`: will return a Firebase ref pointing to your app's collection of cars
//- `getCar(carId)`: will return a Firebase ref pointing to a single car in the cars collection
//- `getComments(carId)`: will return a Firebase ref pointing to a collection of comments made for a single car

    var carId = $stateParams.carId;
    var ref = new Firebase('https://carfirebruh.firebaseio.com/');
    this.getCarsRef = function(){
        return ref.child('cars');
    };

    this.getCarRef = function(carId){
        return ref.child('cars/'+carId)
    };

    this.getCommentsRef = function(carId){
        return ref.child('cars/'+carId + '/comments')
    };
});