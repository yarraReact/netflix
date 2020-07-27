import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import myListReducer from "./reducers/MyList";
import recommendationsReducer from './reducers/Recommendations'

export default () => {
  const rootReducer = combineReducers({
    myList: myListReducer,
    recommendations:recommendationsReducer
  });
  return createStore(rootReducer, composeWithDevTools());
};
