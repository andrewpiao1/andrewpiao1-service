import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <p1>React "App" working:</p1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))