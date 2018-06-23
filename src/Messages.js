import React, { Component } from 'react';
import Message from './Message.js';
import './App.css';

class Messages extends Component {

  render() {
    return (
      <div>
        <div className="messages mb-1" id="messages">
          { this.props.messagesList.map((message, key) => (
            <Message key={key} message={message}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Messages;
