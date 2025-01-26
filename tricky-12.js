function sayHelloWorld() {
  return sayGoodByeWorld();

  function sayGoodByeWorld() {
    return "Good by world";
  }
  var sayGoodByeWorld = function () {
    return "Hello world";
  };
}

console.log(sayHelloWorld()); // 'Good by world'
