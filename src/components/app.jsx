import React, { Component } from 'react';

class App extends Component {
  componentWillMount() {
    console.log('mounting');
  }
  render () {
    return (
      <div>
        inner app.
      </div>
    );
  }
}

export default App;