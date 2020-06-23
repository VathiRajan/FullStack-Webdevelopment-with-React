import React, { Component } from "react";
import { withRouter } from "react-router";
import "./todoApp.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";
import HelloWorldService from "./HelloWorldService.js";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: this.retrieveWelcomeMessage
    };
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleErrorResponse=this.handleErrorResponse.bind(this);
  }
  render() {
    return (
      <>
        <h1>Welcome</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. You can manage your todos
          <Link to="/listtodo">here</Link>
        </div>
        <div className="container">
          Click here to customized Welcome message.
          <button
            className="btn btn-success"
            onClick={this.retrieveWelcomeMessage}
          >
            Get Welcome Message
          </button>
        </div>
        <div className="container">{this.state.welcome}</div>
      </>
    );
  }
  retrieveWelcomeMessage() {
    HelloWorldService.executeHello().then(response =>
  this.handleSuccessfulResponse(response)).catch(error=>this.handleErrorResponse(error)
    )
  }
  handleErrorResponse(error){
console.log(error)
  }
  handleSuccessfulResponse(response) {
    this.setState({
      welcome: response.data.hello
    });
  }
}
export default new WelcomeComponent();
