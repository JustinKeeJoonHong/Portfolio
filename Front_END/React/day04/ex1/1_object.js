//console.log("안녕하세요");
// node 파일명 ( 실행법)

const students = {
  apple: "신민석님",
  banana: "김예찬님",
  orange: "송연우님",
};

console.log(students.apple);

//const apple = students.apple;
const { apple, banana, orange } = students;
console.log(apple); // 신민석님
console.log(banana);
console.log(orange);

// 1. import BrowserRouter from "react-router-dom"   --> 뒤에 돔을 BR로 가져옴
// 2. import {BrowserRouter} from "react-router-dom" --> 뒤에 돔중 BR 키값을 BR로 가져옴

// 1번을 선택했다면 BrowserRouter.BrowserRouter
// 2번은 BrowserRouter로 불러옴

const user = ["이영규님", "우형일님", "박선아님"];

const [lee, woo, park] = user;

console.log(user[0]); //이영규님

console.log(lee); // 이영규님
// 배열은 키 값이 아닌, 인덱스 순서로 받아올 수 있음

const dog = {
  name: "루시",
  age: 10,
  weight: 5,
};

const desDog = ({ name, age, weight }) => {
  console.log(
    `우리집 강아지의 이름은 ${name}이고 나이는 ${age} 무게는 ${weight}kg입니다.`
  );
};

//desDog(dog.name, dog.age, dog.weight);

desDog(dog);
