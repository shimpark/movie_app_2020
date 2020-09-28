import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    console.log('hello');
  }

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

  componentDidMount(){

    //render() 함수 이후 한번 호출된다. (ready 함수과 비슷함.)
    console.log("i am componentDidMount");
  }

  //setState 함수가 실행되면 호출되는 이벤트이다.
  componentDidUpdate(){
    console.log("i am componentDidUpdate");
  }

  componentWillUnmount(){

    //이벤트 리스터를 삭제할 때 많이 사용합니다.
    console.log("i am componentWillUnmout");
  }
  
  render() {

    console.log("render");
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
