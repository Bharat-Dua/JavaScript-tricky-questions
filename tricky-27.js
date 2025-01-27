function display() {
  var a = (b = 10);
}

display();

console.log("b", typeof b === "undefined"); // [b , false]
console.log("a", typeof a === "undefined"); // [a , true]
