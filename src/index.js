import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./counter";
import counterReducer from "./counterReducer";

const elemento = document.getElementById("root");
const reducers = combineReducers({
  counter: counterReducer
});

ReactDOM.render(
  <div>
    <Provider store={createStore(reducers)}>
      <Counter />
    </Provider>
  </div>,
  elemento
);
