//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
        //It's a shortcut that lets you refer to the object you're currently working with or on.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
        //If a function is global in scope, this refers to the window.
        //When referring to a method or property using dot notation, this is whatever immediately precedes the dot.
        //In constructor functions, it refers to the instance of the object that is currently being created.
        //Call or apply both explicitly specify this.
  // 3) What is the difference between call and apply?

      //Answer
        //Parameters are passed to apply in an array, while parameters are passed to call individually.
  // 4) What does .bind do?

      //Answer
        //Bind fixes the this reference for a method, function or object so that this always refers to the specified objects, function, or w/e.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
    username:"whatever",
    email:"whatever@gmail.com",
     getUsername:function(){
        return this.username;
    }
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
//alert(user.getUsername());

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(makeIn, modelIn, yearIn){
    this.make = makeIn;
    this.model = modelIn;
    this.year = yearIn;
    this.move = 0;
    this.moveCar = function(){
       return this.move+=10;
    }
}
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
console.log(getYear.call(prius));
console.log(getYear.call(mustang));


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername.call(myUser), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
    //undefined
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
    //the window
//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
