(function (a) {
  return (function () {
    console.log(a); // 21
    a = 6;
  })();
})(21);

//* This code demonstrates the use of closures and lexical scoping.
//* When the outer IIFE is executed, it initializes 'a' with the value 21.
//* The inner IIFE, which has access to 'a' due to closure, logs its value before modifying it.
//* At the time of logging, 'a' is still 21, so it prints 21.
//* After logging, 'a' is updated to 6, but this change does not affect the already logged value.
