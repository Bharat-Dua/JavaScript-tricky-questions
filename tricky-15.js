function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hello, my name is " + this.name;
};

var person1 = new Person("bharat");
var person2 = new Person("paras");

console.log(person1.greet === person2.greet); // True because the method that is defined in the prototype is shared across all the instances of object
