import React, { Component } from 'react';
import ToDo from './Components/ToDo';
import RecipeApp from './Components/RecipeApp';
import MemoryGame from './Components/MemoryGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Recipe App</h2>
          <RecipeApp/>
        </div>
        <div style={{borderTop: '2px solid black'}}>
          <h2>Todo list</h2>
          <ToDo/>
        </div>
        <div style={{borderTop: '2px solid black'}}>
          <MemoryGame/>
        </div>
        
      </div>
    );
  }
}

export default App;
