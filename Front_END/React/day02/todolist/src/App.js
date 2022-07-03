import "./App.css";
import Todo from "./page/todo";
// 개발자 만든 컴포넌트들의 상위 폴더
// url 명시 -- react-router-dom
// 화면에 App.js가 보여지는 것
// (정확히 말하면 index.html이 보여지는데, index.js가 index.html의 root라는 <div>에 app.js의 return을 보여줌 )

function App() {
  return (
    <>
      {" "}
      {/* <div>와 같은 말  */}
      <Todo />
      <div>123</div>
    </>
  );
}

export default App;
