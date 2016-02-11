/*jshint eqnull:true, expr:true*/

var _ = {};

(function () {

    /**
     * COLLECTIONS
     * ===========
     *
     * In this section, we'll have a look at functions that operate on collections
     * of values; in JavaScript, a 'collection' is something that can contain a
     * number of values--either an array or an object.
     */

        // Return an array of the first n elements of an array. If n is undefined,
        // return just the first element.
    _.first = function (array, n) {
        if (n === undefined) {
            return array[0];
        }
        return array.slice(0, n);

    };

    // Like first, but for the last elements. If n is undefined, return just the
    // last element.
    _.last = function (array, n) {
        if (n === undefined) {
            return array[array.length-1];
        }
        if(n == 0){
            return [];
        }
        if (n >= array.length){
            return array;
        }
        return array.slice(n-1);
    };

    // Call iterator(value, key, collection) for each element of collection.
    // Accepts both arrays and objects.
    _.each = function (collection, iterator) {
        if(Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                iterator(collection[i], i, collection)
            }
        }
        else{
            for (var key in collection){
                iterator(collection[key], key, collection);
            }
        }
    };

    // Returns the index at which value can be found in the array, or -1 if value
    // is not present in the array.
    _.indexOf = function (array, target) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === target){
                return i;
            }
        }
        return -1;
    };

    // Return all elements of an array that pass a truth test.
    _.filter = function (collection, iterator) {
        var newArr = [];
        for (var i = 0; i < collection.length; i++) {
            if(iterator(collection[i])){
                newArr.push(collection[i]);
            }
        }
        return newArr;
    };

    // Return all elements of an array that don't pass a truth test.
    _.reject = function (collection, iterator) {
        var newArr = [];
        for (var i = 0; i < collection.length; i++) {
            if(!iterator(collection[i])){
                newArr.push(collection[i]);
            }
        }
        return newArr;
    };

    // Produce a duplicate-free version of the array.
    _.uniq = function (array) {
        var newArr = [];
        for (var i = 0; i < array.length; i++) {
            if(newArr.indexOf(array[i]) == -1){
                newArr.push(array[i]);
            }
        }
        return newArr;
    };


    // Return the results of applying an iterator to each element.
    _.map = function (array, iterator) {
        var newArr = [];
        for (var i = 0; i < array.length; i++) {
            newArr.push(iterator(array[i]));
        }
        return newArr;
    };

    // Takes an array of objects and returns and array of the values of
    // a certain property in it. E.g. take an array of people and return
    // an array of just their ages
    _.pluck = function (array, propertyName) {
        var newArr = [];
        for (var i = 0; i < array.length; i++) {
            newArr.push(array[i][propertyName])
        }
        return newArr;
    };

    // Calls the method named by methodName on each value in the list.
    _.invoke = function (list, methodName, args) {
        if(typeof methodName === 'string') {
            list.forEach(function (element) {
                element[methodName](args);
            });
        }
        else{
            list.forEach(function (element){
                methodName.call(element,args);
            });
        }
        return list;
    };

    // Reduces an array or object to a single value by repetitively calling
    // iterator(previousValue, item) for each item. previousValue should be
    // the return value of the previous iterator call.
    _.reduce = function (collection, iterator, initialValue) {

        if(Array.isArray(collection)){
            var initialValue = collection[0];

            for (var i = 1; i < collection.length; i++) {
                initialValue = iterator(initialValue,collection[i]);
            }
            return initialValue;
        }
        for(var key in collection){
            initialValue = iterator(initialValue,key);
        }
        return initialValue
    };

    // Determine if the array or object contains a given value (using `===`).
    _.contains = function (collection, target) {
        if(Array.isArray(collection)){
            for (var i = 0; i < collection.length; i++) {
                if (target === collection[i]){
                    return true;
                }
            }
        }
        else{
            for (var key in collection) {
                if(target === collection[key]){
                    return true;
                }
            }
        }
        return false;
    };


    // Determine whether all of the elements match a truth test.
    _.every = function (collection, iterator) {
        if(iterator === undefined || null){
            iterator = function(arg){
                return arg;
            }
        }
        if(Array.isArray(collection)){
            for (var i = 0; i < collection.length; i++) {
                if (!iterator(collection[i])){
                    return false;
                }
            }
        }
        else{
            for (var key in collection) {
                if(!iterator(collection[key])){
                    return false;
                }
            }
        }
        return true;
    };

    // Determine whether any of the elements pass a truth test. If no iterator is
    // provided, provide a default one
    _.some = function (collection, iterator) {
        if(iterator === undefined || null){
            iterator = function(arg){
                return arg;
            }
        }
        if(Array.isArray(collection)){
            for (var i = 0; i < collection.length; i++) {
                if (iterator(collection[i])){
                    return true;
                }
            }
        }
        else{
            for (var key in collection) {
                if(iterator(collection[key])){
                    return true;
                }
            }
        }
        return false;

    };


    /**
     * OBJECTS
     * =======
     *
     * In this section, we'll look at a couple of helpers for merging objects.
     */

        // Extend a given object with all the properties of the passed in
        // object(s).
    _.extend = function (obj) {
        var newObj = {};
        for (var i = 0; i < arguments.length; i++) {
            for(var key in arguments[i]){
                newObj[key] = arguments[i][key];
            }
        }
        return newObj;
    };

    // Like extend, but doesn't ever overwrite a key that already
    // exists in obj
    _.defaults = function (obj) {
        var newObj = {};
        for (var i = 0; i < arguments.length; i++) {
            for(var key in arguments[i]){
                if(!newObj.hasOwnProperty(key)) {
                    newObj[key] = arguments[i][key];
                }
            }
        }
        return newObj;
    };


    /**
     * FUNCTIONS
     * =========
     */

        // Return a function that can be called at most one time. Subsequent calls
        // should return the previously returned value.
    _.once = function (func) {
        var flag = false;
        var ret;
        return function(){
            if (flag){
                return ret;
            } 
            flag = true;
            ret = func.apply(this, arguments);
            func = null;
            return ret;
        }
    };

    // Memoize an expensive function by storing its results. You may assume
    // that the function takes only one argument and that it is a primitive.
    //
    // Memoize should return a function that when called, will check if it has
    // already computed the result for the given argument and return that value
    // instead if possible.
    _.memoize = function (func) {
        var memo;
        var args = arguments;
        var flag = false;
        return function(){
            if(flag && args === arguments){
                return memo;
            }
            flag = true;
            memo = func.apply(this,arguments);
            return memo;
        }
    };

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    //
    // The arguments for the original function are passed after the wait
    // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
    // call someFunction('a', 'b') after 500ms
    _.delay = function (func, wait) {
        var args = [];
        for (var i = 2; i < arguments.length; i++) {
            args.push(arguments[i])
        }
        return setTimeout(function (){return func.apply(undefined,args);}, wait);
    };


    // Shuffle an array.
    _.shuffle = function (array) {
    //    for i from 0 to n−2 do
    //        j ← random integer such that 0 ≤ j < n-i
    //    exchange a[i] and a[i+j]
        var len = array.length -2;
        var j = 0;
        var newArr = [];
        for (var i = 0; i < len; i++) {
            j = Math.random() * (len-i);
            newArr[i] = array[j];
            newArr[j] = array[i];
        }
        return newArr;
    };

    // Sort the object's values by a criterion produced by an iterator.
    // If iterator is a string, sort objects by that property with the name
    // of that string. For example, _.sortBy(people, 'name') should sort
    // an array of people by their name.
    _.sortBy = function (collection, iterator) {
        var iter;
        if(typeof iterator === 'string') {
            iter = function (one) {
                return one[iterator];
            };
        }
        else{
            iter = iterator;
        }
        var j = 0;
        var temp;
        var len = collection.length;
        for (var i = 0; i < len; i++) {
            j = i;
            if(!collection[j]){
                while(!collection[len]){
                    len--;
                }
                temp = collection[j];
                collection[j] = collection[len];
                collection[len] = temp;
            }
            while(j>0 && iter(collection[j-1]) > iter(collection[j]) ){
                temp = collection[j];
                collection[j] = collection[j-1];
                collection[j-1] = temp;
                j = j-1;
            }
        }
        return collection;
    };

    // Zip together two or more arrays with elements of the same index
    // going together.
    //
    // Example:
    // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
    _.zip = function () {
        var longest = [];
        var ret = [];
        var inner = [];
        for (var i = 0; i < arguments.length; i++) {
            if(longest.length < arguments[i].length){
                longest = arguments[i];
            }
        }
        for (var i = 0; i < longest.length; i++) {
            for (var j = 0; j < arguments.length; j++) {
                inner.push(arguments[j][i]);
            }
            ret.push(inner);
            inner = [];
        }
        return ret;
    };

    // Takes a multidimensional array and converts it to a one-dimensional array.
    // The new array should contain all elements of the multidimensional array.
    _.flatten = function (nestedArray, result) {
        if(result === undefined || null){
            result = [];
        }
        for (var i = 0; i < nestedArray.length; i++) {
            if(Array.isArray(nestedArray[i])){
                _.flatten(nestedArray[i],result);
            }
            else{
                result.push(nestedArray[i]);
            }
        }
        return result;
    };

    // Takes an arbitrary number of arrays and produces an array that contains
    // every item shared between all the passed-in arrays.
    _.intersection = function () {
        var longest = [];
        var ret = [];
        var check = true;
        for (var i = 0; i < arguments.length; i++) {
            if(longest.length < arguments[i].length){
                longest = arguments[i];
            }
        }
        for (var i = 0; i < longest.length; i++) {
            for (var j = 0; j < arguments.length; j++) {
                if(arguments[j].indexOf(longest[i]) === -1){
                    check = false;
                    continue;
                }
            }
            if(check){
                ret.push(longest[i])
            }
            check = true;
        }
        return ret;
    };
    

    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function (array) {
        var ret = [];
        var check = true;
        for (var i = 0; i < arguments[0].length; i++) {
            for (var j = 1; j < arguments.length; j++) {
                if(arguments[j].indexOf(arguments[0][i]) != -1){
                    check = false;
                    continue;
                }
            }
            if(check){
                ret.push(arguments[0][i]);

            }
            check = true;
        }
        return ret;
    };

}).call(this);