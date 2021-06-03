import React from 'react';

class Card extends React.Component {
    onClickHandler = e => {
        this.props.handleUserChoice(this.props.index);
    }
    render() {
        return (
            <div
                color={this.props.color}
                onClick={this.onClickHandler}
                index={this.props.index}
                style={{
                    backgroundColor: this.props.revealed ? this.props.color : '#333',
                    border: '2px solid #444',
                    borderRadius: '20px',
                    width: '100px',
                    height: '100px',
                    margin: '10px',
                }}
            >
            </div>
        )
    }
}

// 

export default Card;