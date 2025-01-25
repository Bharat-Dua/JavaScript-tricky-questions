var x = 1;

if (function test() {}) {
  x += typeof test;
}

console.log(x); // '1undefined'
