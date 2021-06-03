import React, { Component } from 'react';

class FlagGame extends Component {
    state = {
        countries: [],
        loading: true,
        flag: '',
    }

    getRandomSubArray = (array, newLength) => {
        const indices = [];
        while (indices.length < newLength) {
            let randomInd = Math.floor( Math.random() * array.length );
            if (!indices.includes(randomInd)) indices.push(randomInd);
        }
        const newArr = array.filter((item, index) => {
            return indices.includes(index)
        });
        return newArr;
    }

    getNewCountries = () => {
        this.setState({loading: false}, () => {
            fetch('http://www.restcountries.eu/rest/v2/all')
                .then(data => data.json())
                .then(countryList => {
                    const newList = this.getRandomSubArray(countryList, 4);
                    this.setState({countries: newList, loading: false})
                })
        })
    }

    componentDidMount = () => {
        this.getNewCountries();
    }

    radioChangeHandler = e => {
        console.log(e.target.value);
        let imgSrc;
        for (let country of this.state.countries) {
            if (country.name === e.target.value) {
                imgSrc = country.flag;
                console.log('from if');
                console.log(country.name);
            }
        }
        this.setState({flag: imgSrc})
    }

    render() {
        const { loading, flag } = this.state;
        let flagImg = flag === '' ? <div/> : <img src={flag} width="600"/>;
        let view;
        if (loading) view = <h2>Loading...</h2>
        else view = (
            <div>
                <h2>Show Me Your Flag</h2>
                <div className="options">
                    {
                        this.state.countries.map((country, index) => {
                            const checkedValue = index === 0 ? true : false
                            return (
                                <div key={country.name}>
                                    <input 
                                        type="radio" 
                                        id={country.name} 
                                        name="country-radio" 
                                        value={country.name} 
                                        onChange={this.radioChangeHandler}
                                    />
                                    <label for="huey">{country.name}</label>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {flagImg}
                </div>
            </div>
        ) 
        return (
            <div>
                {view}
                <button onClick={this.getNewCountries}>New List</button>
            </div>
            
        )
    }
}

export default FlagGame;