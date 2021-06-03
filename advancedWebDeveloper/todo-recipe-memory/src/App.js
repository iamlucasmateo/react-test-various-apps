import React, { Component } from 'react';
import ToDo from './ToDo';
// import Recipe from '.Recipe';
import MemoryGame from './MemoryGame';
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDo/>
        <MemoryGame/>
        {/* <Card
          hidden={true}
          color='pink'
        /> */}
      </div>
    );
  }
}

export default App;
