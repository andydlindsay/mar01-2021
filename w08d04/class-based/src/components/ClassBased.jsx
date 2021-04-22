import React from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    super();
    this.state = {
      internalMessage: 'I am on the inside',
      myNum: props.num + 1,
      counter: 0
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    // alert('hello there!');
    // this.state.counter += 1; // DON'T DO THIS

    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const {props} = this;

    return (
      <div>
        <h2>Inside a class-based component</h2>
        <h2>Internal message: {this.state.internalMessage}</h2>
        {/* <h2>My better number: {this.state.myNum}</h2>
        <h2>{props.message}</h2>
        {props.children} */}
        <button onClick={this.clickHandler}>Click Me!</button>
        <h2>Current count: {this.state.counter}</h2>
      </div>
    );
  }
}

export default ClassBased;

// const classBased = new ClassBased(props);
// classBased.props = props;
