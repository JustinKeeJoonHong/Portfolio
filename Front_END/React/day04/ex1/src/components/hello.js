const Hello = ({ name, color, isLover }) => {
  console.log({ name, color, isLover });
  return (
    <div style={color && { color: color }}>
      안녕하세요 {name}님!
      {isLover ? <span>❤️</span> : "💔"}
      <span style={{ color: "red", fontSize: "50px" }}>반갑습니다.</span>{" "}
      {/* 첫번째 중괄호는 변수를 사용하기 위해, 2번째는 객체로 넣기 위해  */}
    </div>
  );
};
export default Hello;

/* 컴포넌트로 만든 것은 태그형태로 불러온다 (user.js에 <hello/> 이부분을 의미) */
