var x = 5;

function outer() {
  var x = 10;
  function inner() {
    console.log(x); // 10
  }
  return inner;
}

var finalResult = outer();

finalResult();
