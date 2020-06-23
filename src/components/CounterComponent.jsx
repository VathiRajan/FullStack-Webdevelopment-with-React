import React, { Component } from "react";
import PropTypes from "prop-types";
import "./counterCss.css";
import Counter from "./counter";

export default class CounterComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment(by) {
    console.log(`Increment from parent - ${by}`);
    console.log(this.state.count);
    this.setState(prevState => {
      return { count: prevState.count + by };
    });
    console.log(this.state.count);
  }
  decrement(by) {
    this.setState(prevState => {
      return { count: prevState.count - by };
    });
  }
  reset() {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div className="CounterComp">
        <CounterButton
          by={1}
          incrementmethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementmethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementmethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={100}
          incrementmethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className="Count"> {this.state.count}</span>
        <div>
          <button classname="reset" onClick={this.reset}>
            {" "}
            Reset
          </button>
        </div>
      </div>
    );
  }
}

class CounterButton extends Component {
  // state={count:0};
  //increment =()=>{
  //  console.log("increment");
  //this.setState(
  //  {count:this.state.count + this.props.by});
  //}
  render() {
    return (
      <div className="counter">
        <button onClick={() => this.props.incrementmethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
      </div>
    );
  }
}
CounterButton.defaultProps = {
  by: 1
};
CounterButton.propTypes = {
  by: PropTypes.number
};
