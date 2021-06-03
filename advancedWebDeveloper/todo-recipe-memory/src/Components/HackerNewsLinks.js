import React, { Component } from 'react';

const componentDidMountFull = () => {
    const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/item/topstories.json';
    const storyUrlBase = 'https://hacker-news.firebaseio.com/v0/item/';
    fetch(topStoriesUrl)
        .then(data => data.json())
        .then(idList => idList.map(id => {
            const fullUrl = `${storyUrlBase}${id}.json`;
            return fetch(fullUrl).then(data => data.json())
        })) // this returns an array of Promises
        .then(promises => Promise.all(promises))
        .then(stories => this.setState({stories}))
}

class HackerNewsLinks extends Component {
    state = {
        stories: [],
    }

    componentDidMount = () => {
        const pythonStories = 'https://hn.algolia.com/api/v1/search?query=python';
        fetch(pythonStories)
            .then(data => data.json())
            .then(stories => this.setState({stories: stories.hits}))
    }

    render() {
        let views = <h2>Loading...</h2>;
        const { stories } = this.state;
        if (stories && stories.length > 0) {
            views = stories.map((item, index) => {
                return <p key={index}><a href={item.url}>{item.title}</a> <b>from</b> {item.author}</p>
            });
        }
        return (
            <div>
                <h1>Top Stories</h1>
                {views}
            </div>
        )
    }
}

export default HackerNewsLinks;