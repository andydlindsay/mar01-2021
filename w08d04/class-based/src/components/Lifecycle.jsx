import React from 'react';

class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      interval: null
    }
  }

  componentDidMount() {
    // fires only once
    // fetch data
    // set up a socket connection
    // set up an interval/timeout

    const interval = setInterval(() => {
      // make an axios request
      console.log('the interval has fired');
    }, 3000);

    this.setState({ interval });

    console.log('the component has mounted to the DOM');
  };

  componentDidUpdate(prevState, prevProps) {
    // fires multiple times
    // every time the component updates
    // listening to updates to values in state/props
    // this.state
    // this.props
    console.log('the component has updated');
  }

  componentWillUnmount() {
    // fire only once
    // cleanup
    // sever socket connections
    // remove timers
    clearInterval(this.state.interval);

    console.log('component will be removed from the DOM');
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Methods</h2>
        <h2>Title: {this.state.title}</h2>
        <input 
          onChange={(event) => this.setState({ title: event.target.value })}
          value={this.state.title}
        />
      </div>
    );
  }
}

export default Lifecycle;
