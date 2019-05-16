import { NEW_MESSAGE } from "../actions/types.jsx";

const DEFAULT_MESSAGES = { items: [], username: "" };

const messagesReducer = (state = DEFAULT_MESSAGES, action) => {
   switch (action.type) {
      case NEW_MESSAGE:
         return {
            ...state,
            items: [...state.items, action.item],
            username: "",
         };
      default:
         return state;
   }
};

export default messagesReducer;
