//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function () {
    var name = 'Tyler';
    return function () {
        return 'The original name was ' + name;
    }
};
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

//Code Here
var inner = outer();
//Once you do that, invoke inner.

//Code Here
console.log(inner());


//Next problem


var callFriend = function () {
    var friend = 'Jake';

    function callF(number) {
        return 'Calling ' + friend + ' at ' + number;
    }

    return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

//Code Here
var friend = callFriend();
console.log(friend('435-215-9248'));

//Next Problem


/*
 //  Write a function called makeCounter that makes the following code work properly.
 //*/
var makeCounter = function () {
    var number = 0;
    function count(){
        return ++number;
    }
    return count;
};
//Code Here
var count = makeCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

//Next Problem


/*
 Write a function named codeLove that returns the string 'I love code'. Write a second function named codeFriend that accepts the first function as it's first parameter. The second function should return a new third function. Store the third function in a variable, codeEcho which, when invoked, invokes the first, original function that was passed in, but will only ever do so once (returns null after first invocation).
 */

//Code Here
function codeLove(){
        return "I love code";
}

function codeFriend(func){
    var count=0;
    return function () {
        count++;
        if (count<2)
            return func();
        return null;
    };
}
var codeEcho = codeFriend(codeLove);
//console.log(codeEcho());

//Next Problem


/*
 Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous function to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
 */

function fnCounter(func, N){
    var counts = 0;
    return function() {
        counts++;
        if (counts > N) {
            return "STOP"
        }
        return func();
    }
}

//console.log(fnCounter(codeLove,4));

//Next Problem



 var counter = function(){
     function timer(i){
         setTimeout(function(){
             console.log(i)
         }, i*1000);
     }
    for (var i=1; i<=5; i++) {
       timer(i);
    }
 };


/*
 Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the function is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

 //Answer Here
        The function logs the variable i every ith-thousand milliseconds. So, it will print 1 after a second, 2 after 2 seconds, etc.

 Now, run the function in your console and note what happens.*/
 counter();
 /*Was your answer right or wrong?

 //Answer Here
        //Wrong

 Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
 */

//Code Here


//Next Problem


//Make the following code work



function arrFactory(num){
    var arr = [];
    var counting = 0;
    for (var i = 0; i < num; i++){
        console.log(counting);
        arr[i]=function(){
            return counting++;
        };
    }

    return arr;
}
var funcArray = arrFactory(6);


 /*Hint: Don't let this fool you. Break down what's really happening here.*/


