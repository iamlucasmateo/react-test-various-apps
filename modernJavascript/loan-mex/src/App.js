import React, { Component, Fragment } from 'react';
import './css/skeleton.css';
import './css/normalize.css';
import Form from './Form'
import {calculateTotal} from './helper';

class App extends Component {
  loanInformation = (amount, state) => {
    calculateTotal(amount, state);
  }
  render() {
    return (
      <Fragment>
        <h1>Loan Calculator</h1>
        <div className="container">
          <Form
            loanInformation={this.loanInformation}
          >
          </Form>
        </div>
      </Fragment>
    );
  }
  
}

export default App;
