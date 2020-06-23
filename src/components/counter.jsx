import React, { Component } from "react";
//cmrc && //cc with simple react extension
class Counter extends Component {

 // constructor(){
   // super();
    //this.handleIncrement = this.handleIncrement.bind(this);
  //}
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags:['tag1','tag2','tag3'],
    
  };

  style = {};

  handleIncrement=()=>{
      console.log("Clicked", this.state.count);//if we use This here it wll be undefined.abs
      //if this is called from a method it returns refernce. If this is called from outside function, this returns windows object.
      // Use arrow function to avoid the constructor and binding the function
      this.state.count++; //wont work , hence use the state fom componenet
      //this.setState({count: this.state.count+1});//to make react aware of state changes
  }

  renderTags(){
if(this.state.tags.length===0) return <p>There are no tags</p>

    else{
    return <ul>
    {this.state.tags.map(tag=><li key= {tag}>
        {tag}
    </li>)}
    </ul>}
  }
  render() {
//Render method is a asynchronous call, it may happen in 10ms or 5ms. Once render iscalled, it will have the jsx, 
      let classes = this.getBadgeClasses();

    return (
        <div>
            {this.state.tags.length===0 && "add tags"}
            <ul>
            {this.renderTags()
  }
            </ul>

        <h1>Hello World</h1>
        <br></br>
        <span className="button">
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={this.handleIncrement} className="btn btn-primary btn-sm">Increment</button></span> 
        <span
          style={{
            fontSize: 50,
            fontWeight: "bold"
          }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <ul>
            {this.state.tags.map(tag=><li key= {tag}>
                {tag}
            </li>)}
            </ul> </div>
      
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
