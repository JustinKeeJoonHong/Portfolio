import { useState, useRef } from "react";
import AddState from "./addState";
const State = () => {
  const [state, setState] = useState("state 처음 시작");

  // const[변수명, 변수 값을 바꿔줄 함수명] = useState(변수의 기본값)
  // setState("값") ---> 변수의 값이 바뀜

  //   const onChangeText = () => {
  //     setState("두번째 시작하는 state");
  //   };

  // state의 불변성

  /* 
    const obj = {}
    const obj2 = {}

    obj === obj2 (t/f?) --> f
    const obj3 = obj // obj3와 obj가 같은 참조 값을 가진다

    따라서, obj가 가지고 있는 객체값이 변경되면 obj3도 같은 객체를 가지기 때문에
    값이 변경됨, 즉, 원본 데이터의 훼손,  이러한 훼손은 예상치 못한 오류와
    버그를 일으킬 가능성이 큼 (참조 오류)

    <얕은 복사의 에러를 해결하기 위해 깊은 복사를 실현>

    1. spread operator (...)
    2. const a = state ---> a의 변조과정 ---> setState(a)
    3. immerjs와 같은 라이브러리를 이용 (리덕스)

    Quize
    const [state, setState] = useState([
        {
            id:1,
            name: "김성용"
        },
        {
            id:2,
            name: "김사과"
        },
        {
            id:3,
            name: "예찬"
        }
    ])
    해당 객체가 state의 값이라면
    이 배열에 id:4, name:"신민석"이라는 객체의 값을 추가하려면 어떻게 해야할까요? 단 랜더링이 일어나야한다.

    1. setState([...state,{id:4, name:"신민석"}])
    복사본을 만들어서 추가함  *? 복사본의 이름은 뭔가요? ...state
    2. const arr = state
        arr.push = {id:4, name: "신민석"}
        setState(arr)
  */
  //변수명   , 변수를 바꾸는 함수
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "김성용",
    },
    {
      id: 2,
      name: "김사과",
    },
    {
      id: 3,
      name: "예찬",
    },
  ]);

  const onClickEvent = (idValue, nameValue) => {
    setUserList([...userList, { id: idValue, name: nameValue }]);
  };

  // .map기능은 userList의 각각 변수를 다 v라는 매개변수에 하나씩 담아서 돌리는 것 / for구문 같이
  /* 
  매우 중요 / 백엔드 받아오는 데이터의 형식의 대부분은 배열
  따라서 이러한 배열들을 화면에 보여주기 위해 사용하는 함수

    1. map
        [반복문, 한줄 씩 읽어오는 것]
        => 주로 배열의 길이만큼 반복할 때 사용
        ex) 
        배열명.map((결과값 변수명) =>(
            실행문 / div가 올 수도 있고 if문도 가능 
        ))

        ex)
        userList.map((v) => console.log(v.id)) // 1,2,3
        userList.map((v) => 
        (                                            * 여기서 괄호가 있는 이유는 div가 있음을 알리고 묶는 용 
            <div>
                <div></div>
            </div>
        ))
    2. find/findIndex
        [검색, 조건에 맞는 데이터를 읽어오는 것]
        => 주로 배열 내에서 조건식을 만족하는 값/인덱스를 찾아올 때 사용

        ex)
        배열명.find((결과값 변수명) => 조건식)

        ex)
        userList.find((v)=> v.id ===1).name // 김성용   // v에는 객체가 닮겨져있음
        userList.findindx((v)=> v.id ===1) // 0 (객체 반환x 인덱스 번호 반환)

    3. filter
        [거름망, 조건에 맞지 않는 데이터를 거르고
        맞는 데이터만 읽어오는 것]
        => 삭제 시에 백엔드에서 받아온 데이터가 있을 때 

        ex)
        배열명.find((결과값 변수명) => 조건식)
  */

  /* 
    ex) 상품정보에 대한 데이터
    {
        message: "success"
        data: {
            prodName : "떡볶이"
            prodPrice : 80000000
            prodImg : "http://www.tester.koreaiad/img/12345"
            prodContent : "<div>이 상품은 ..</div>"
            review : [
                {
                    User: [
                        id: 952
                        email: "asd1234@gmail.com"
                        name : "김**"
                    ]
                    point: 5
                    contents: "<div>...</div>"
                },
                {},
                {},

                .... ===> setState(draft.data.review.push(객체명)) / 불변성지키기위한 2번째 immer방법
            ]
        }
    }

  */

  const onRemoveHandler = (e) => {
    console.log(typeof e.target.value);
    const removeState = userList.filter(
      (item) => item.id !== parseInt(e.target.value)
    );
    // filter는 제거하라는 명령문이 아니라
    // 해당 상태가 맞지 않는 데이터를 제외하고 읽어오는 것이므로
    // 원본 데이터를 훼손한 상태가 아님
    setUserList(removeState); // 이순간부터 랜더링이 되며 원본이 바뀜
  };

  const removeButtonArr = useRef([]);
  const onRemoveHandler_2 = () => {
    console.log(removeButtonArr);
  };

  const onRemoveHandler_3 = (itemId) => {
    console.log(itemId);
    const removeState = userList.filter((item) => item.id !== itemId); // itemId가 숫자형이므로 parseInt할 필요 X
    setUserList(removeState);
  };
  return (
    <>
      {/* map, find, filter를 실행했을 시 결과값을 받아오는 변수에는 index를 가지고 올 수 있다. */}
      {userList.map((item, index) => (
        <div>
          {item.id}. {item.name}
          <button
            value={item.id} // value는 string으로 반환함
            // map의 안에서 매개변수로 전달을 하게되면
            // 해당 객체에 해당하는 모든 정보를 매개변수로 전달받을 수 있다.
            onClick={() => onRemoveHandler_3(item.id)} // 실행문이기때문에 앞에 ()안에는 item.id를 줄필요가 없음
            ref={(el) => (removeButtonArr[item.id] = el)} // el은 ref의 성질때문에 button을 가져온다
          >
            삭제
          </button>
        </div>
      ))}
      <AddState
        onClickEvent={onClickEvent}
        stateId={userList.length > 0 && userList[userList.length - 1].id}
      />
    </>
  );
};

export default State;
