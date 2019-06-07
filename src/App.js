import React, { Component } from 'react';

import './App.css';
import Nav from './component/Nav';
import Start from './component/Start';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      funds:100,
    }
  }

  render(){
    return(
      <div>
      <Nav money={this.state.funds} />
      <Start />
    </div>
    );
  }
}
export default App;
