import { Provider } from "react-redux";
import "./App.css";
import LiveChat from "./components/LiveChat";
import store from "./utils/store";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <LiveChat />
        </Provider>
      </div>
    </>
  );
}

export default App;
