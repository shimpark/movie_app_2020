import React from 'react';

class App extends React.Component {

  state = {
    count : 0
  }

  add = () => {
    
    //this.setState({count : this.state.count + 1});

    this.setState(current => ({
      count : current.count + 1
    }));
  }

  minus = () => {
    //this.setState({count : this.state.count - 1});

    this.setState(current => ({
      count : current.count - 1
    }))
  }
  
  render() {
    return (
        <div>
          <h1>i am class {this.state.count}</h1>
          <button onClick={this.add}>+1</button>
          <button onClick={this.minus}>-1</button>
        </div>
      );
  }
}

export default App;
