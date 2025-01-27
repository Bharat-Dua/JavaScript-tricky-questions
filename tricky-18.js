function userData() {
  return userData;
}

console.log(typeof userData()); // 'function' bcoz userData function returns itself (the function reference). Therefore, the result of calling typeof userData() will be 'function'.
