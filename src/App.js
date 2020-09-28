import React from 'react';

class App extends React.Component {

  state = {
    isLoading : true,
    movie : []
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 6000);
  }
  
  render() {

    const { isLoading } = this.state;
    return <div>{ isLoading ? 'loading....' : 'we are ready'}</div>
  }
}

export default App;
