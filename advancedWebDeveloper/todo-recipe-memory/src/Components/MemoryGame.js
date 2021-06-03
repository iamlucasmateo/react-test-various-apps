import React, { Component } from 'react';
import Card from './Card';

const COLORS = ['red', 'yellow', 'blue', 'green', 'pink', 'salmon', 'turquoise'];

const getRandomColor = colors => {
    return colors[Math.floor( Math.random() * colors.length )]
}

const getMatches = (array, item) => {
    const filtArr = array.filter(el => {
        return el === item
    });
    return filtArr.length;
}

const getNewList = () => {
    const colorList = [];
    while (colorList.length < COLORS.length * 2) {
        let newColor = getRandomColor(COLORS);
        while (getMatches(colorList, newColor) === 2) newColor = getRandomColor(COLORS);
        colorList.push(newColor);
    };
    const objectList = colorList.map(item => {
        return { color: item, revealed: false }
    })
    return objectList;
}


class MemoryGame extends Component {
    state = {
        cardList: [],
        selectedCard: '',
        firstTurn: true,
        waiting: false, 
    }
    
    startNewGame = e => {
        e.preventDefault();
        this.setState({
            cardList: getNewList(),
        })
    }
    
    newGameDisabled = () => {
        return false;
    }

    handleUserChoice = index => {
        if (!this.state.waiting) {
            if (this.state.firstTurn) this.handleFirstTurn(index)
            else this.handleSecondTurn(index);
        };
    }

    getNewCardList = index => {
        const newList = this.state.cardList.map((item, idx) => {
            if (index === idx) item.revealed = true;
            return item;
        });
        return newList;
    }

    getSelectedCard = index => this.state.cardList[index];
    
    handleFirstTurn = index => {
        this.setState({
            cardList: this.getNewCardList(index),
            selectedCard: this.getSelectedCard(index),
            firstTurn: false,
        });
    }

    handleSecondTurn = index => {
        console.log(this.state)
        this.setState({
            cardList: this.getNewCardList(index),
            waiting: true,
        }, () => this.secondTurnCallback(index));
    }

    secondTurnCallback = index => {
        let newList = [...this.state.cardList];
        const selectedColor = this.state.cardList[index].color;
        if (selectedColor !== this.state.selectedCard.color) {
            newList = newList.map(item => {
                if ((item.color === selectedColor) || (item.color === this.state.selectedCard.color)) item.revealed = false; 
                return item;
            })
        }
        setTimeout(() => {
            this.setState({
                cardList: newList,
                waiting: false,
                firstTurn: true,
            })
        }, 1000)
    }
    
    render() {
        return (
            <div>
                <h2>Memory Game</h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    {
                        this.state.cardList.map((item, index) => {
                            return (
                                <div>
                                    <Card
                                        key={index}
                                        index={index}
                                        color={item.color}
                                        revealed={item.revealed}
                                        handleUserChoice={this.handleUserChoice}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <p>{this.state.message}</p>
                <div>
                    <button
                        disabled={this.newGameDisabled()}
                        onClick={this.startNewGame}
                    >
                        New Game
                    </button>
                </div>
            </div>

        )
    }
}

export default MemoryGame;