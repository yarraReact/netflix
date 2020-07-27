import React from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "./store";
import "./App.css";
import MyRecommendations from "./MyRecommendations";
import MyList from "./MyList";

function App() {
  return (
    <Provider store={store()}>
      <React.Fragment>
        <MyList />
        <MyRecommendations />
      </React.Fragment>
    </Provider>
  );
}

export default App;
