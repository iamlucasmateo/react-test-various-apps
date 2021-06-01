import React, { Component } from 'react';
import Input from './input';
import Output from './output';

class App extends Component {
  state = {
    tweets: [],
  }
  inputData = (newTweet) => {
    let tweetList = this.state.tweets;
    if (!tweetList) tweetList = [newTweet]
    else tweetList.push(newTweet);
    this.setState({
      tweets: tweetList
    })
  }
  deleteTweet = (tweet) => {
    let newList = this.state.tweets.filter(item => {
      return item != tweet;
    })
    this.setState({
      tweets: newList,
    })
  }
  render() {
    return (
      <div className="App">
        <Input
          inputData={this.inputData}
        >
        </Input>
        <Output
          tweets={this.state.tweets}
          deleteTweet={this.deleteTweet}
        >
        </Output>
      </div>
    );
  }
}

export default App;
