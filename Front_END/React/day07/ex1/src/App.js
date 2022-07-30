import "./App.css";
import ContextAPI from "./components/contextApi";
import Reducer from "./components/reducer";
import ContextProvider from "./reducer/context";

function App() {
  return (
    <ContextProvider>
      <ContextAPI />;
    </ContextProvider>
  );
}

export default App;
