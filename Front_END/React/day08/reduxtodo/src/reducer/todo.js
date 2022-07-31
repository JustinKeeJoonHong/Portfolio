const initialState = [
  {
    id: 1,
    todo: "리엑트 공부하기",
  },
  {
    id: 2,
    todo: "리엑트 또 공부하기",
  },
];
export const INSERT_TODO = "INSERT_TODO"; /* 변수화를 시켜서 오타 방지 */
/* 삭제는 실습 */

const todo = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TODO:
      return [...state, { id: action.data.id, todo: action.data.todo }];
    default:
      return state;
  }
};
export default todo;
