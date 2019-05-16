import React from "react";
import { connect } from "react-redux";
import CreateReaction from "./CreateReaction.jsx";

const MessageReactions = ({ messageReactions }) => {
   if (!messageReactions) {
      return null;
   } else {
      return messageReactions.map(reaction => {
         const { id, emoji, username } = reaction;

         return (
            <div key={id}>
               <span >
                  <em>{username}</em>
                  {emoji}
               </span>
            </div>
         );
      });
   }
};
const MessageBoard = ({ messages, reactions }) => {
   return (
      <div>
         {messages.items.map(messageItem => {
            const { text, timestamp, id, username } = messageItem;

            return (
               <div key={id}>
                  <h3>{username}</h3>
                  <p>{text}</p>
                  <CreateReaction messageId={id} username={username} />
                  <MessageReactions messageReactions={reactions[id]} />
                  <h4>{new Date(timestamp).toLocaleString()}</h4>
                  <hr />
               </div>
            );
         })}
      </div>
   );
};
export default connect(({ messages, reactions }) => ({ messages, reactions }))(
   MessageBoard,
);
