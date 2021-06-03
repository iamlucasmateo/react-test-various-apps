import React, { Component } from 'react';
import Square from './Square';
import { getRandomColor } from './helpers'

const TOTAL_SQUARES = 50;
const LEAP_SIZE = 7;

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changing: false,
        };
        this.randomize();
    }

    randomize = () => { 
        const interval = () => {
            setInterval(() => {
                this.setState({
                    changing: !this.state.changing,
                });
            }, 2000);
        }

        setTimeout(interval, 3000);
    }

    render() {
        return (
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {
                    this.props.colors.map((color, index) => {
                        if (Math.random() < 0.2) {
                            color = getRandomColor();
                        }
                        return (
                            <Square
                                key={index}
                                index={index}
                                color={color}
                            />
                        ) 
                    })
                }
            </div>
        )
    }
}

export default Grid;