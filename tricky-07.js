let fn = () => {
  console.log(1);
};

setTimeout(fn, 100); // 1 bcoz we changing the reference of fn function after setimeout is called

fn = () => {
  console.log(2);
};
