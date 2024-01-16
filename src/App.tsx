import React from "react";
import { Provider } from "react-redux";
import { store } from "./reduxStore";

import { Home } from "./pages";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
