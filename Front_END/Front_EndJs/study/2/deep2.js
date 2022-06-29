console.log(Boolean("false"));

console.log(false && "dog"); // ?

let done = false;
let message = "";

// if (done) message = "완료";
message = done && "완료";

console.log(message);

let elem = null;
// let value = elem.value;
// console.log(value);  타입 에러 발생
let value = elem && elem.value;
console.log(value); // elem이 null, undefined 같은 Falsy값이면
// elem 으로 평가되고 Truthly 값이면 elem.vlaue로 평가됨

function glength(x) {
  // x = "" 매개변수에 기본값을 설정해줄 수 도있음
  x = x || "";
  return x.length;
}
console.log(glength());
console.log(glength("hi"));

//매개변수의 기본값 예시
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2)); //10
console.log(multiply(5)); // b에 값을 할당안하게 되면 기본값인 1로 할당됨
// -> 5

let person = {
  name: "lee",
  hello: function () {
    console.log(`hello i am ${this.name}`);
  },
};

console.log(person);
console.log(person.hello);
person.hello();

let foo = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(foo[0]);

let person2 = {
  "last-name": "hong",
  1: 10,
};
console.log(person2["last-name"]);

let o = { x: { y: 1 } };
let c1 = { ...o };

console.log(o.x);
console.log(c1.x === o.x);
