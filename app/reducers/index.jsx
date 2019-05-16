import { combineReducers } from "redux";
import messagesReducer from "./messages.jsx";
import reactionsReducer from "./reactions.jsx";

export default combineReducers({
   messages: messagesReducer,
   reactions: reactionsReducer,
});
