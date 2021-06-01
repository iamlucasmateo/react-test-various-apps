import React, { Component, Fragment } from 'react';
import './css/skeleton.css';
import './css/normalize.css';
import Form from './Components/Form'
import {calculateTotal} from './Components/helper';
import Result from './Components/Result'
import Message from './Components/Message'
import Spinner from './Components/Spinner'

class App extends Component {
  state = {
    total: '',
    amount: '',
    term: '',
    loading: false,
  }
  loanInformation = (amount, term) => {
    const total = calculateTotal(amount, term);
    const loadingCallback = () => {
      setTimeout(() => {
        this.setState({
          loading:false, 
          amount,
          term,
          total,
        })
      }, 3000)
    }
    this.setState({
      loading: true
    }, loadingCallback)
  }
  render() {
    // Destructure state
    const {total, amount, term, loading} = this.state;

    // Conditionally render component
    let component;
    if (loading) component = <Spinner/>
    else if (!total) component = <Message/>
    else {
      component = <Result
                    total={total}
                    amount={amount}
                    term={term}
                  />
    } 
    return (
      <Fragment>
        <h1>Loan Calculator</h1>
        <div className="container">
          <Form
            loanInformation={this.loanInformation}
          >
          </Form>
          <div className="messages">
            {component}
          </div>
        </div>
      </Fragment>
    );
  }
  
}

export default App;
