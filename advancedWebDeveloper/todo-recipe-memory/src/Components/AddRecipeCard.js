import React, { Component } from 'react';
import './Recipe.css'

class AddRecipeCard extends Component {
    state = {
        name: '',
        ingredient: '',
        ingredients: [],
        instructions: '',
        imgSrc: '',
        id: 0,
    }

    addIngredientClickHandler = e => {
        e.preventDefault();
        if (this.state.ingredient !== '') {
            const newList = [...this.state.ingredients];
            newList.push(this.state.ingredient);
            this.setState({
                ingredient: '',
                ingredients: newList,
            })
        }
    }

    inputChangeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value, 
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const newRecipe = {
            name: this.state.name,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions,
            imgSrc: this.state.imgSrc,
        }
        console.log('from form');
        console.log(newRecipe);
        this.props.addNewRecipe(newRecipe);
        this.setState({
            name: '',
            ingredient: '',
            ingredients: [],
            instructions: '',
            imgSrc: '',
        });
    }

    validateForm = () => {
        const { name, ingredients, instructions } = this.state;
        const check = name === '' && ingredients.length === 0 && instructions === ''
        return check
    }

    render() {
        return (
            <div className="recipe-form-container">
                <form 
                    className="recipe-form"
                    onSubmit={this.submitHandler}
                >
                    <div className="recipe-form-item">
                        <label htmlFor="recipe-name">Recipe Name</label>
                        <input 
                            type="text" 
                            name="name"
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                    
                    <div className="recipe-form-item">
                        <label htmlFor="instructions">Recipe Instructions</label>
                        <input 
                            type="text" 
                            style={{height:"100px",}}
                            value={this.state.instructions}
                            onChange={this.inputChangeHandler}
                            name="instructions"
                        />
                    </div>
                    
                    <div className="recipe-form-item">
                        <label htmlFor="recipeingredients">Recipe Ingredients</label>
                        <input 
                            type="text" 
                            name="recipe-ingredients"
                            value={this.state.ingredient}
                            onChange={this.inputChangeHandler}
                            name="ingredient"
                        />
                        <button
                            onClick={this.addIngredientClickHandler}
                        >
                            Add Ingredient

                        </button>
                    </div>
                    <ul>
                        {
                            this.state.ingredients.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                    <div className="recipe-form-item">
                        <label htmlFor="recipe-imgsrc">Image URL</label>
                        <input 
                            type="text"
                            name="imgSrc"
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            disabled={this.validateForm()}
                        >
                            Add Recipe
                        </button>
                    </div>
                </form>
                <div></div>
            </div>   
        )
    }
}

export default AddRecipeCard;