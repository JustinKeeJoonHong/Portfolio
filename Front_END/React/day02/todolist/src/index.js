import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; //App도 컴포넌트

/* 
컴포넌트 -> page -> 각 url에 맞게 App.js 해당 컴포넌트들 보여줄 수 있도록 설계
-> 해당 App.js를 index.js가 가지고와서 public 폴더의 index.html의 root에 render

옛날에는 return() -> render()
*/

// 최상위 파일
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    {/* 엄격 검사 */}
    <App />
  </React.StrictMode>
);
