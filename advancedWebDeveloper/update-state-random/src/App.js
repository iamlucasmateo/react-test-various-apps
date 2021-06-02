import React from 'react';

const InstructorItem = props => (
  <li key={props.index} style={{margin: '0 20px'}}>
      <p>{props.name}</p>
      <ul>
          {props.hobbies.map((hobby, idx)=> {
              return <li key={idx}>{hobby}</li>
          })}
      </ul>
  </li>
)

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
    moreOptions: true,
  }

  updateState = () => {
    const instructorsAux = this.state.instructors;
    const randomInstructorIdx = Math.floor( Math.random() * 4 );
    const randomInstructor = instructorsAux[randomInstructorIdx]; 
    const selectedLen = randomInstructor.hobbies.length;
    if (selectedLen === 0) {
      const lengthSum = this.state.instructors.reduce((accum,current,idx) => {
        let lenItems = current.hobbies.length;
        return accum + lenItems;
      }, 0);
      if (lengthSum === 0) this.setState({selected: 'No more options', moreOptions: false})
      else this.updateState();
    } else {
      let hobbyIdx = selectedLen ===  1 ? 0 : (Math.random() > 0.5 ? 0 : 1)  
      this.setState({
        selected: `${randomInstructor.name}__${randomInstructor.hobbies[hobbyIdx]}`,
      })
      instructorsAux[randomInstructorIdx].hobbies = (
        randomInstructor.hobbies.filter((hobby, idx) => {
          return idx !== hobbyIdx;
        })
      );
      this.setState({
        instructors: instructorsAux,
      });
    } 
  }

  resetState = () => {
    this.setState({
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
      moreOptions: true,
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
                <InstructorItem
                  key={index}
                  index={index}
                  name={instructor.name}
                  hobbies={instructor.hobbies}
                />
              )
            })
          }
        </ul>
        <button
          onClick={this.updateState}
        >
          Click Me
        </button>
        
        <p>{this.state.moreOptions ? 'Last Deleted: ' : ''}{this.state.selected}</p>

        <button
          onClick={this.resetState}
        >
          Reset
        </button>
  
      </div>
    );
  }
  
}

export default App;
