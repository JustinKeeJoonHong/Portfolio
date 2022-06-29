console.log(score);

score = 80;
var score;

console.log(score);

let x = 5;
let y;

function plus() {
  console.log(x);
  y = x++;
  console.log(x);
  console.log(y);
}
plus();

let num = 5;
let result = num % 3 ? "홀수" : "짝수";

console.log(result);

let year = 9;

// let day = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 28 : 29;
// console.log(day);

let days;

// if (year % 400 === 0) {
//   days = 1;
// } else if (year % 100 === 0) {
//   days = 2;
// } else if (year % 4 === 0) {
//   days = 3;
// } else {
//   days = 30;
// }

days = year % 400 === 0 ? 28 : year % 100 === 0 ? 29 : year % 4 === 0 ? 28 : 30;

console.log(days);
// console.log(year % 400 ? "참" : "거짓");

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j == 6) {
      console.log(i, j);
    }
  }
}

let count = 2;

do {
  count--;
  console.log(count);
  count += 2;
} while (count <= 3);

// 문자열에서 특정 문자의 개수 세기

let string = "hello world";
let search = "l";
let count1 = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] === search) {
    count1++;
  }
}
console.log(count1);

let num2 = "10" + 2;
console.log(num2);

function isFalsy(v) {
  return !v;
}

console.log(isFalsy(false));

console.log(Number(true)); // 1
console.log(parseInt(true)); // NaN
