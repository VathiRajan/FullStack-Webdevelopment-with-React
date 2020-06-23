import React, { Component } from "react";
import "./todoApp.css";
import ToDoDataService from './TodoDataService.js';
import  AuthenticationService from "./AuthenticationService.js";

class ListToDoComponent extends Component {
    constructor(props) {
      console.log("constructor")
      super();
      this.state = {
        todos: [
          {/*{
            id: 1,
            description: "Learn React",
            done: false,
            targetDate: new Date()
          },
          {
            id: 2,
            description: "Learn HTML",
            done: false,
            targetDate: new Date()
          },
          {
            id: 3,
            description: "Learn CSS",
            done: false,
            targetDate: new Date()
          }*/}
        ]
      };
    }
componentDidMount(){
  console.log("Compn")
  let user = AuthenticationService.getUserLoggedUser();
  ToDoDataService.retriveAllTodos(user).then(response=>{
    this.setState({
      todos:response.data
    })
  })

}

    render() {
      return (
        <div className="container">
          <div>
            <h1> List to Do..</h1>
            <table className="table">
              <thead>
                <tr>
                <th>ID</th>
                  <th>description</th>
                  <th>Name</th>
                  <th>Target Date</th>
                  <th>Complete status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map(todo => (
                  <tr key = {todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.userName}</td>
                    <td>{todo.targetDate}</td>
                    <td>{String (todo.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }


  export default new ListToDoComponent();