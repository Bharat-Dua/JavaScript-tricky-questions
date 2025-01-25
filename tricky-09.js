var x = 1;

function foo() {
  x = 10;
  return;

  function x() {}
}

foo();

console.log(x); // 1 bcoz x is a global variable and foo() is a function which is called and it returns undefined.
