import "./App.css";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import {Provider} from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Head/>
          <MainContainer/>
      </div>
    </Provider>
  );
}

export default App;
