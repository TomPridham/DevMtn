//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

var Person = function(nameIn, ageIn){
    this.name = nameIn;
    this.age = ageIn;
};
//Now create three instances of Person with data you make up

  //code here
var p1 = Person('jack',44);
var p2 = Person('ted',21);
var p3 = Person('fred',99);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function(){
    alert(this.name);
}
