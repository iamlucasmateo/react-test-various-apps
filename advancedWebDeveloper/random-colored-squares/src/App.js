import React, { Component } from 'react';
import Grid from './Grid';
import { getRandomColorsArray } from './helpers'

class App extends Component {
    render() {
        return (
            <div>
                <Grid
                    colors={getRandomColorsArray(50)}
                    testing='Testing'
                />
            </div>
            
        )
    }
}

export default App;