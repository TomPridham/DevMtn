/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, 'cahlan@devmounta.in', 'iLoveHashtags'
    2) Lenny, 'lenny@theLenster.com', 'iLoveLentilSoup'
*/

var User = function(name, email, pword){
  this.name = name;
  this.email = email;
  //noinspection JSUnusedGlobalSymbols
    this.pw = pword;
};

//Create an Array called 'users' that will store all our instances of User.

  //code here
  var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
users.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));
users.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));
users.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));

console.log('Tyler\'s information is ' + users[0]);
//Console.log all of Tyler's information
  //code here

console.log('Lenny\'s information is '+ users[2]);
//Now console.log all of Lenny's information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

  //code here
users.push(new User('Tom', 'tomp@gmail.com','whatever'));
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  //code here
for (var i = 0; i < users.length; i++) {
    console.log(users[i].name);
}