import React, { Component } from "react";
import {withRouter} from 'react-router';
import "./todoApp.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListToDoComponent from "./ListTodoComponent";


class TodoApp extends Component {
  render() {
    return (
      <div className="Todo">
        <Router>
          <>
           <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent}></Route>
              <Route path="/login" component={LoginComponent}></Route>
              <Route path="/welcome/:name" component={()=>WelcomeComponent}></Route>
              <Route path="/listtodo" component={()=>ListToDoComponent}></Route>
              <Route path="/logout" component={LogoutComponent}></Route>
              <ErrorComponent component={ErrorComponent}></ErrorComponent>
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}
class LoginComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccess: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }
  handleChange(event) {
    //sysnthetic event
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  loginClicked() {
    //hardcoded cred
    if (this.state.username === "Vathi" && this.state.password === "pass") {
      AuthenticationService.registerSuccessfullLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      //once we redirected we dont need to update the state,, hence commneting out below
      /*  this.setState({
            showSuccess: true
        });
        this.setState({
            hasLoginFailed: false
        });*/
    } else {
      this.setState({
        showSuccess: false
      });
      this.setState({
        hasLoginFailed: true
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Login Page</h2><br/>
        <div className="container"></div>
        {/*<ShowInvalidCred hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCred>*/}
        {this.state.hasLoginFailed && (
          <div className="alert alert-warning">Invalid credentials</div>
        )}
        {/* <ShowSuccess success={this.state.showSuccess}></ShowSuccess>*/}
        {this.state.showSuccess && <div>Login Successfull</div>}
        User Name:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br/>
        <button className="btn btn-success" onClick={this.loginClicked}>
          Login
        </button>
      </div>
    );
  }
}

function ShowInvalidCred(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid credentials</div>;
  } else {
    return null;
  }
}
function ShowSuccess(props) {
  if (props.success) {
    return <div>Logic successful</div>;
  } else {
    return null;
  }
}


function ErrorComponent() {
  return <div>Error Occured, Contact Service Desk</div>;
}



class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">All rights reserved @vathirajan</span>
      </footer>
    );
  }
}


class LogoutComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>You have successlly logged out</h1>
        <div className="container">Thanks for your time in learning</div>
      </>
    );
  }
}

export default TodoApp;
