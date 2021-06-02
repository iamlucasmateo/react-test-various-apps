import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';

const recipes = [
  {
    title: 'Pizza',
    imgSrc: 'https://www.simplyrecipes.com/thmb/YSlSLYrnOBfkzE3rD_uMSnA8dlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg',
    imgAlt: 'default alt',
    ingredients: ['Cheese', 'Flour'],
    instructions: "Silly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"
  },
  {
    title: 'Spaghetti',
    imgSrc: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563',
    imgAlt: 'default alt',
    ingredients: ['Flour', 'Tomato', 'Salt'],
    instructions: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
  },
  {
    title: 'Hamburger',
    imgSrc: 'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
    imgAlt: 'default alt',
    ingredients: ['Meat', 'Lettuce', 'Bread'],
    instructions: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
  },
];

class RecipeApp extends Component {
  render() {  
    return (
      <div className="recipe-app">
        {
          recipes.map((recipe, i) => {
            return (
              <Recipe
                key={i}
                title={recipe.title}
                imgSrc={recipe.imgSrc}
                imgAlt={recipe.imgAlt}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
              />
            )
          })
        }
      </div>
    );
  }
}

export default RecipeApp;

