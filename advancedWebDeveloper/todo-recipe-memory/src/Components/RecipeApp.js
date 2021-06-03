import React, { Component } from 'react';
import Navbar from './Navbar';
import AddRecipeCard from './AddRecipeCard';
import ConditionalComponent from './ConditionalComponent';
import RecipeCard from './RecipeCard';

const PIZZA_IMGSRC = 'https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=6&m=938742222&s=612x612&w=0&h=on_9ZYG1SG4Xgk7BLZSlaXJl8VYb6ZePDHTN6zukDHM='

const PIZZA_RECIPE = {
    name: 'Pizza',
    instructions: 'Amasar como un campeon',
    ingredients: ['Pan', 'Tomate'],
    imgSrc: PIZZA_IMGSRC,
}

class RecipeApp extends Component {
    state = {
        showAddRecipe: false,
        recipes: [PIZZA_RECIPE],
    }

    addNewRecipe = newRecipe => {
        const newList = [...this.state.recipes];
        newList.push(newRecipe);
        this.setState({
            recipes: newList,
        }, () => {
            console.log('from Recipe App')
            console.log(newRecipe);
        });
    };

    deleteRecipe = name => {
        const newList = this.state.recipes.filter(item => {
            return item.name !== name;
        })
        this.setState({
            recipes: newList,
        })
    }

    toggleAddRecipe = () => {
        const newState = !this.state.showAddRecipe;
        this.setState({
            showAddRecipe: newState,
        })
    }

    render() {
        const legend = this.state.showAddRecipe ? 'Hide Recipe' : 'Add Recipe';
        return (
            <div>
                <Navbar
                    toggleAddRecipe={this.toggleAddRecipe}
                    legend={legend}
                />
                <ConditionalComponent
                    conditionOk={this.state.showAddRecipe}
                    insideComponent={<AddRecipeCard
                                        addNewRecipe={this.addNewRecipe}
                                    />}
                />
                <ul>
                    {
                        this.state.recipes.map((item, index) => {
                            return (
                                <li key={index}>
                                    <RecipeCard
                                        name={item.name}
                                        ingredients={item.ingredients}
                                        instructions={item.instructions}
                                        imgSrc={item.imgSrc}
                                        deleteRecipe={this.deleteRecipe}
                                    />
                                </li>
                            ) 
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default RecipeApp;