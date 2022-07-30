import { useContext, useEffect } from "react";
import { Context } from "../reducer/context";
import Addstate from "./addState";

const ContextAPI = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <div>
        <button>삭제</button>
      </div>
      <Addstate />
    </>
  );
};
export default ContextAPI;
