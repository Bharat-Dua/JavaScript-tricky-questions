let person = {
  name: "JK",
};

Object.freeze(person);
person.name = "Jef";
console.log(person); // {name:'JK'}

//* Bcoz of Object.freeze() the person object is frozen and we can't change the property of the object,we can't add new property to the object and we can't delete the property of the object.
