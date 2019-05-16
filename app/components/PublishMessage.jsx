import React, { Component } from "react";
import { PubSubContext } from "../pubsub.jsx";
import { newMessage } from "../actions/messages.jsx";

class PublishMessage extends Component {
   state = { text: "", username: "Anonymus" };
   updateText = event => this.setState({ text: event.target.value });
   updateUsername = event => this.setState({ username: event.target.value });
   publishMessage = () => {
      this.context.pubsub.publish(
         newMessage(this.state.text, this.state.username),
      );
   };
   handleKeyPress = event => {
      if (event.key === "Enter") this.publishMessage();
   };
   render() {
      return (
         <div>
            <h2>Please enter your username</h2>
            <input
               onChange={this.updateUsername}
               onKeyPress={this.handleKeyPress}
            />{" "}
            <h3>Got something to say?</h3>
            <input
               onChange={this.updateText}
               onKeyPress={this.handleKeyPress}
            />
            <br />
            <button onClick={this.publishMessage}>Publish it!</button>
         </div>
      );
   }
   static contextType = PubSubContext;
}
export default PublishMessage;
