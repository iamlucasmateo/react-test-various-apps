import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    newRecipeClickHandler = e => {
        e.preventDefault();
        this.props.toggleAddRecipe();
    }
    render() {
        return (
            <nav>
                <div className="logo-div">
                    <div className="logo"></div>
                </div>
                <div>
                    <ul className="nav-links">
                        <li>
                            <span 
                                className="new-recipe"
                                onClick={this.newRecipeClickHandler}
                            >
                                {this.props.legend}
                            </span>
                        </li>
                        <li>
                            <a href="https://www.google.com">Link2</a>

                        </li>
                        <li>
                            <a href="https://www.google.com">Link3</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;