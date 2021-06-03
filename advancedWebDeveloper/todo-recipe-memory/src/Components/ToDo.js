import React, { Component } from 'react';

class ToDo extends Component {
    state = {
        todoList: [],
        inputValue: '',
    }

    onInputChangeHandler = e => {
        e.preventDefault();
        this.setState({
            inputValue: e.target.value,
        })
    }

    onSubmitHandler = e => {
        e.preventDefault();
        const arr = this.state.todoList;
        arr.push(this.state.inputValue);
        this.setState({
            inputValue: '',
            todoList: arr,
        })
    }

    onItemClickHandler = e => {
        e.preventDefault();
        console.log(e.target.textContent);
        console.log(this.state);
        
        this.setState((prevState, props) => {
            const { todoList, inputValue } = prevState;
            const todoListFilt = todoList.filter(item => {
                return item !== e.target.textContent;
            });
            return {todoList: todoListFilt, inputValue}         
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        type="text"
                        onChange={this.onInputChangeHandler}
                        value={this.state.inputValue}
                    />
                    <button type="submit">Send</button>
                </form>

                <ul>
                    {
                        this.state.todoList.map((item, index) => {
                            return (
                                <li 
                                    key={index}
                                    onClick={this.onItemClickHandler}
                                >
                                    {item}
                                </li>
                            ) 
                        })
                    }
                </ul>
            </div>


        )
    }
}

export default ToDo;