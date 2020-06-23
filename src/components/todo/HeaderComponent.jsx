import React, { Component } from "react";
import {withRouter} from 'react-router';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";

class HeaderComponent extends Component {
  
    render() {
      let isUser = AuthenticationService.userLoggedIn(this.state);
      console.log("User logged in "+isUser);
      return (
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="https://vathirajan.wordpress.com" className="navbar-brand">
                <img src="ibm.png.jpg"></img>React Application
              </a>
            </div>
            <ul className="navbar-nav">
              {isUser && <li className="nav-link">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>}
              {console.log("Printing user before listoDo- "+isUser)}
              {isUser && <li className="nav-link">
                <Link className="nav-link" to="/listtodo">
                  Todos
                </Link>
              </li>}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isUser && <li className="nav-link">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>}
              
              {isUser && <li className="nav-link">
                <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>
                  Logout
                </Link>
              </li>}
            </ul>
          </nav>
        </header>
      );
    }
  } export default withRouter(HeaderComponent);