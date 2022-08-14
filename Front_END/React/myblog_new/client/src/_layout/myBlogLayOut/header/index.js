import { HeaderWrapper, HeaderLogo, HeaderList } from "./style";

const LayOutHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo>myBlog</HeaderLogo>
        <HeaderList>
          <ul>
            <li>회원가입</li>
            <li>로그인</li>
          </ul>
          {/*  <ul>
                <li>
                   마이블로그
                </li>
                <li>채팅</li>
            </ul> */}
        </HeaderList>
      </HeaderWrapper>
    </>
  );
};
export default LayOutHeader;
