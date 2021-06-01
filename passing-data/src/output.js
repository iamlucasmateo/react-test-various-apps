import React, { Component } from 'react';

class Output extends Component {
    liClickHandler = (e) => {
        this.props.deleteTweet(e.target.textContent);
    }
    render() {
        return (
            <div className="col pink">
                <h2>Output</h2>
                <ul>
                    {
                        this.props.tweets.map(tweet => {
                            return <li key={tweet} onClick={this.liClickHandler}>{tweet}</li> 
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Output;