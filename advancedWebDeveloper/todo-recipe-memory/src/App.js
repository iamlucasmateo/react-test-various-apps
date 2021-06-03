import React, { Component } from 'react';
import ToDo from './Components/ToDo';
import RecipeApp from './Components/RecipeApp';
import MemoryGame from './Components/MemoryGame';
import HackerNewsLinks from './Components/HackerNewsLinks'; 
import FlagGame from './Components/FlagGame';

class App extends Component {
  state = {
    hideRecipe: true,
    hideToDo: true,
    hideGame: true,
    hideHackerNews: true,
    hideFlagGame: false,
  }
  render() {
    return (
      <div className="App">
        <div hidden={this.state.hideRecipe}>
          <h2>Recipe App</h2>
          <RecipeApp/>
        </div>
        <div style={{borderTop: '2px solid black'}}  hidden={this.state.hideToDo}>
          <h2>Todo list</h2>
          <ToDo/>
        </div>
        <div style={{borderTop: '2px solid black'}}  hidden={this.state.hideGame}>
          <MemoryGame/>
        </div>
        <div style={{borderTop: '2px solid black'}}  hidden={this.state.hideHackerNews}>
          <HackerNewsLinks/>
        </div>
        <div style={{borderTop: '2px solid black'}}  hidden={this.state.hideFlagGame}>
          <FlagGame/>
        </div>
      </div>
    );
  }
}

export default App;
