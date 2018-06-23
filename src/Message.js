import React, { Component } from 'react';
import './App.css';

class Message extends Component {
  constructor(props){
    super(props);
    this.classMessage = 'badge-card bg-success text-light mb-2';
    if(props.message.sender === 'me'){
      this.classMessage = 'badge-card bg-primary text-light mb-2';
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-auto mw-100" /*style={{'max-width': 500+'px'}}*/>
          <div className={this.classMessage}>
            <div className="card-body p-2">
              <div className="card-text">
              { this.props.message.text.split('\n').map((line, key) => (
                <div key={key}>{line}</div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
