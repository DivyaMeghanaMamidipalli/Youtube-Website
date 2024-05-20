import "./App.css";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import Body from "./components/Body";
import {Provider} from "react-redux";
import store from "./utils/store";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import WatchPage from "./components/WatchPage";


const appRouter=createBrowserRouter([{
  path:"/",
  element:<MainContainer />,
  children:[
    {
      path:"/",
      element: <Body />
    },
    {
      path:"/watch",
      element: <WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Head/>
          <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
