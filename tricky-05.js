const items = [1,2,3,4,5,6]
const [, , ...restItems] = items;

console.log(restItems) // [3, 4, 5, 6]