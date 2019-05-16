import React, { Component } from "react";
import { REACTION_OBJECTS } from "../actions/types.jsx";
import { PubSubContext } from "../pubsub.jsx";
import { createReaction } from "../actions/reactions.jsx";
class CreateReaction extends Component {
   publishReaction = ({ type, emoji }) => () => {
      const { username, messageId } = this.props;
      this.context.pubsub.publish(
         createReaction({ type, emoji, username, messageId }),
      );
   };
   render() {
      return (
         <div className="reactions">
            {REACTION_OBJECTS.map(REACTION_OBJECT => {
               const { type, emoji } = REACTION_OBJECT;

               return (
                  <span
                     key={type}
                     onClick={this.publishReaction({ type, emoji })}
                  >
                     {emoji}
                  </span>
               );
            })}
         </div>
      );
   }
   static contextType = PubSubContext;
}
export default CreateReaction;
