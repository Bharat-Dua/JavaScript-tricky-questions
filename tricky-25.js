const val = (function () {
  const x = 2;
  const y = 3;
  const z = 4;
  return { x, y };
})();

console.log(val.x); // 2
console.log(val.z); // undefined
