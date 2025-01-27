var x = 10;

function testNum() {
  console.log(x); // undefined
  if (true) {
    var x = 20;
  }
  console.log(x); // 20
}
testNum();
