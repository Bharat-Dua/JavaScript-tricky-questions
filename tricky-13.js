function Parent() {}

function Child() {}

Child.prototype = new Parent();

var obj = new Child();

console.log(obj instanceof Parent); // true
