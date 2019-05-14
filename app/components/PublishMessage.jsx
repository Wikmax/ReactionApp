import React, { Component } from "react";
import { PubSubContext } from "../pubsub.jsx";
import { newMessage } from "../actions/messages.jsx";

class PublishMessage extends Component {
   state = { text: "", inputText: this.state.text };
   updateText = event => this.setState({ text: event.target.value });
   publishMessage = () => {
      this.context.pubsub.publish(newMessage(this.state.text));
   };
   handleKeyPress = event => {
      if (event.key === "Enter") this.publishMessage();
      if (event.key === "Enter") {
         this.setState({ inputText: this.state.text });
      } else {
         this.setState({ inputText: this.state.text });
      }
   };
   render() {
       console.log("Publish State",this.state)
      return (
         <div>
            <h3>Got something to say?</h3>
            <input
               onChange={this.updateText}
               onKeyPress={this.handleKeyPress}
               value={this.state.inputText}
            />
            <br />
            <button onClick={this.publishMessage}>Publish it!</button>
         </div>
      );
   }
   static contextType = PubSubContext;
}
export default PublishMessage;
