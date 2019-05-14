import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "../scss/main.scss";
import PubSub, { PubSubContext } from "./pubsub";
import Main from "./components/Main.jsx";
import rootReducer from "./reducers";
import { newMessage } from "./actions/messages.jsx";
const store = createStore(
   rootReducer,
   // applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
store.subscribe(() => console.log(store.getState()));
const pubsub = new PubSub();
pubsub.addListener({
   message: messageObject => {
      const { message, channel } = messageObject;

      console.log("Message", message, "Channel", channel);
      store.dispatch(message);
   },
});
setTimeout(() => {
   pubsub.publish(newMessage("Hello world!"));
}, 1000);
ReactDOM.render(
   <Provider store={store}>
      <PubSubContext.Provider value={{ pubsub }}>
         <Main />
      </PubSubContext.Provider>
   </Provider>,
   document.getElementById("root"),
);
