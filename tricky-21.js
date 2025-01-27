function a() {
  console.log(this); // { foo: λ:a }
}

var b = { foo: a };

b.foo();
