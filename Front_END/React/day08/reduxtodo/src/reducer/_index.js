/* 
index로 적게되면 폴더까지만 경로로 가져와도 기본 경로로 읽음 .import from /reducer
_index 읽지 못해서 import from /reducer/_index
*/
import { combineReducers } from "redux";
import todo from "./todo"; /*  reducer 파일에 있는 todo.js 안에 todo를 가져옴 */

const rootReducer = combineReducers({
  /* 합칠 리듀서 목록 */
  todo,
});
export default rootReducer; /* 훅함수가 없으므로 첫글자를 대문자로 하지 않아도 됨 */
