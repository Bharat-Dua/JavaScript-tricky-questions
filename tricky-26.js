function add(a, b) {
  return a + b;
}

function add(a, b, c = 2) {
  return a + b + c;
}

console.log(add(5, 10)); // 17
