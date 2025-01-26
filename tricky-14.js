var x = 10;

function testValue() {
  console.log(x); // undefined
  var x = 20;
}

testValue();
