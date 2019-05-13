import { NEW_MESSAGE } from "./types.jsx";
import uuid from 'uuid/v4';

export const newMessage = text => ({
   type: NEW_MESSAGE,
   item: { text, timestamp: Date.now(), id:uuid() },
});
