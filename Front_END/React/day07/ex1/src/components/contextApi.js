import { useContext, useEffect, useCallback } from "react";
import { Context, REMOVE_STATE } from "../reducer/context";
import Addstate from "./addState";

const ContextAPI = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, [state]);
  /* v.id가 여기 id로 전달됨 */
  const onRemoveClick = useCallback(
    (id) => {
      dispatch({
        type: REMOVE_STATE,
        id: id,
      });
    },
    [dispatch]
  );
  return (
    <>
      {state.map((v) => (
        <div key={v.id}>
          {v.id}.{v.name}
          <button onClick={() => onRemoveClick(v.id)}>삭제</button>
          {/* v.id처럼 매개변수를 전달해주고 싶을때는 ()=> 로 덮어야함  */}
        </div>
      ))}
      <Addstate />
    </>
  );
};
export default ContextAPI;
