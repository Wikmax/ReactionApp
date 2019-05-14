import React from "react";
import { connect } from "react-redux";


const MessageBoard = ({ messages }) => {
   return <div>
       {
           messages.items.map(messageItem =>{
               const {text,timestamp,id} = messageItem;

               return(
                   <div key={id}>
                   <h4>{new Date(timestamp).toLocaleString()}</h4>
                   <p>{text}</p>
                   <hr/>
                   </div>
               )
           })
       }
   </div>
};
export default connect(({ messages }) => ({ messages }))(MessageBoard);
