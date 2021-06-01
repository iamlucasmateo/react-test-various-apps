import React, { Component } from 'react';

class Input extends Component {
    state = {
        newTweet: '',
    }
    handleChange = (e) => {
        this.setState({
            newTweet: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.inputData(this.state.newTweet);
        this.setState({
            newTweet: '',
        })
    }
    validateForm = () => {
        return !this.state.newTweet
    }
    render() {
        return (
            <div className="col lightblue" style={{padding: '0 0 50px 10px'}}>
                <h2>Input</h2>
                <form onSubmit={this.submitHandler}>
                    <label>Enter your tweet:</label>
                    <input 
                        onChange={this.handleChange}
                        type="text"
                        style={{display: 'block', margin: '20px 0'}}
                        value={this.state.newTweet}
                    />
                    <input
                        disabled={this.validateForm()}
                        type="submit"
                        value="Add Tweet"
                    />
                </form>
                
            </div>
            
        )
    }
}

export default Input;