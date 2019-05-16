import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "../scss/main.scss";
import PubSub, { PubSubContext } from "./pubsub";
import Main from "./components/Main.jsx";
import rootReducer from "./reducers";
const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
store.subscribe(() => console.log(store.getState()));
const pubsub = new PubSub();
pubsub.addListener({
   message: messageObject => {
      const { message } = messageObject;
      store.dispatch(message);
   },
});
ReactDOM.render(
   <Provider store={store}>
      <PubSubContext.Provider value={{ pubsub }}>
         <Main />
      </PubSubContext.Provider>
   </Provider>,
   document.getElementById("root"),
);
