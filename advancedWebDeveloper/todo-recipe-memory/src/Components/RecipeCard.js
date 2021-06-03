import React, { Component } from 'react';

class RecipeCard extends Component {
    deleteRecipeHandler = e => {
        e.preventDefault();
        this.props.deleteRecipe(e.target.name);
    }

    render() {
        return (
            <div className="recipe-card">
                <h3>{this.props.name}</h3>
                <div
                    style={{
                        backgroundImage: `url(${this.props.imgSrc})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width: '200px',
                        height: '200px',
                    }}
                />
                <h4>Ingredients</h4>
                <ul>
                    {
                        this.props.ingredients.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
                <h4>Instructions</h4>
                <p>{this.props.instructions}</p>
                <button 
                    onClick={this.deleteRecipeHandler}
                    name={this.props.name}
                >
                    Delete
                </button>
            </div>
        )
    }
}

export default RecipeCard;