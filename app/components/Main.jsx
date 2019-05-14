import React, { Component } from "react";
import PublishMessage from './PublishMessage.jsx';
import MessageBoard from './MessagesBoard.jsx';
class Main extends Component {
  render(){
     return(
        <div className="mainComponent">
           <h1>Reaction</h1>
           <hr/>
           <PublishMessage/>
           <hr/>
           <MessageBoard/>
        </div>
     )
  }
}

export default Main;
