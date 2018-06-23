import React, { Component } from 'react';
import Messages from './Messages.js';
import ChatBot from './ChatBot.js';
import './App.css';

class Chat extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      messagesList: [
        {text: 'bonjour, je suis un bot\nSelon vous, qui va gagner la coupe du monde cette année ?', sender: 'bot', id: Date.now()}
      ],
      message: '',
      chatBot: new ChatBot()
    }
    // this.options = {
    //   url: 'https://aiaas.pandorabots.com',
    //   app_id: ,
    //   user_key: ,
    //   botname: 
    // }
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleKeyDown(e) {
   
    if(e.shiftKey === false && e.which === 13){
      e.preventDefault();
      this.handleSubmit(e);
      setTimeout(() => {
        this.updateScroll();  
      }, 500);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.message.length) {
      return;
    }
    const newItem = {
      text: this.state.message,
      sender: 'me',
      id: Date.now()
    };
    this.setState(prevState => ({
      messagesList: prevState.messagesList.concat(newItem),
      message: ''
    }));
    if(this.state.message !== 'OK'){
      const newItem2 = {
        text: this.state.chatBot.getResponse(this.state.message),
        sender: 'bot',
        id: Date.now()
      };
      this.setState(prevState => ({
        messagesList: prevState.messagesList.concat(newItem2),
        message: ''
      }));
    }
  }

  updateScroll(){
    let element = document.getElementById("messages");
    element.scrollTop = element.scrollHeight;
  }

  render() {
    return (
      <div className="col offset-md-2 col-md-8">
          <div className="card">
            <h5 className="card-header bg-success text-light">Chat Bot</h5>
            <div className="card-body pt-2">
              <Messages messagesList={this.state.messagesList}/>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <textarea 
                    id="new-message"
                    className="form-control"
                    type="textarea"
                    onChange={this.handleChange}
                    placeholder="Ecrivez votre message"
                    value={this.state.message}
                    rows="1"
                    autoFocus
                    onKeyDown={this.handleKeyDown}>
                  </textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Envoyer</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default Chat;