import React from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "./store";
import "./App.css";
import logo from "./netflix-logo.png";
import Lists from "./Lists";

function App() {
  return (
    <Provider store={store()}>
      <div className="app-container">
        <img src={logo} className="image" />
        <Lists />
      </div>
    </Provider>
  );
}

export default App;
