import React from 'react';

class App extends React.Component {
  state = {
    instructors: [
      {
        name: 'Juan',
        hobbies: ['pescar', 'pasear'],
      },
      {
        name: 'Pedro',
        hobbies: ['manejar', 'cocinar'],
      },
      {
        name: 'Matilde',
        hobbies: ['correr', 'programar']
      },
      {
        name: 'Fermina',
        hobbies: ['masajear', 'Blackjack']
      }
    ],
    selected: '',
  }
  
  updateState = () => {
    const instructorsAux = this.state.instructors;
    const randomInstructorIdx = Math.floor( Math.random() * 4 );
    const randomHobbyIdx = Math.floor( Math.random() * 2 )
    this.setState({
      selected: `${instructorsAux[randomInstructorIdx].name}__${instructorsAux[randomInstructorIdx].hobbies[randomHobbyIdx]}`,
    })
    instructorsAux[randomInstructorIdx].hobbies = instructorsAux[randomInstructorIdx].hobbies.splice(randomHobbyIdx, 1);
    this.setState({
      instructors: instructorsAux,
    });
  }

  render() {
    return (
      <div className="App">
        <ul style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          {
            this.state.instructors.map((instructor, index)=> {
              return (
                <li key={index} style={{margin: '0 20px'}}>
                  <p>{instructor.name}</p>
                  <ul>
                    {instructor.hobbies.map((hobby, index)=> {
                      return <li key={index}>{hobby}</li>
                    })}
                  </ul>
                </li>
              )
            })
          }
        </ul>
        <button
          onClick={this.updateState}
        >
          Click Me
        </button>
        <p>{this.state.selected}</p>
        
      </div>
    );
  }
  
}

export default App;
