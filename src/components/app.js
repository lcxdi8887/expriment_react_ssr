import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      val: ''
    };
  }

  componentWillMount() {
    console.log('mounting');
  }

  onValChange = e => {
    console.log(e.target.value);
    this.setState({
      val: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.val} onChange={this.onValChange} />
      </div>
    );
  }
}

export default App;
