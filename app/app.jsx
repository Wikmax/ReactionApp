import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "../scss/main.scss";
import Main from "./components/Main.jsx";
import rootReducer from "./reducers";

const store = createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(()=>console.log(store.getState()))
ReactDOM.render(
   <Provider store={store}>
      <Main />
   </Provider>,
   document.getElementById("root"),
);
