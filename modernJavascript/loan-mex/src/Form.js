import React, { Component } from 'react';

class Form extends Component {
    state = {
        amount: '',
        term: '',

    }

    handleInput = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: Number(value),
        })
    }

    validateForm = () => {
        const {amount, term} = this.state;
        const notValid = !amount || !term;
        return notValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // read the values
        const {amount, term} = this.state;
        // pass data to the main component
        this.props.loanInformation(amount, term);
    }
    
    render() {
        const {amount} = this.state;      
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <label>Amount</label>
                    <input 
                        name="amount" 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Eg: 3000"
                        onChange={this.handleInput}
                    />
                </div>
                <div>
                    <label>Months to repay</label>
                    <select 
                        id="months"
                        name="term" 
                        className="u-full-width"
                        onChange={this.handleInput}
                    >
                        <option value="">Select</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option> 
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        disabled={this.validateForm()}
                        value="Calculate" 
                        className="u-full-width button-primary"
                    />
                </div>
            </form>
         );
    }
}
 
export default Form;