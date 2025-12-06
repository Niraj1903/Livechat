import { Provider } from "react-redux";
import "./App.css";

import store from "./utils/store";
import LiveChat from "./components/LIveChat";

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
