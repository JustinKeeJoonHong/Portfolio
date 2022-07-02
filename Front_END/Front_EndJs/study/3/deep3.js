let add1 = function () {
  let a = 10;
  return function (x, y) {
    return x + y + a;
  };
};

console.log(add1(1, 2));
