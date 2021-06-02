import './Recipe.css'

const Recipe = ({title, imgSrc, 
                 ingredients, instructions
                }) => {
    return (
        <div className="recipe-card">
            <h3 className="recipe-title">{title}</h3>
            <div 
                className="recipe-img-div" 
                style={{
                    backgroundImage: `url("${imgSrc}")`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }}
            />
            <h4>Ingredients</h4>
            <ul>
                {
                    ingredients.map((ing, i) => {
                        return <li key={i}>{ing}</li>
                    })
                }
            </ul>
            <p>{instructions}</p>
        </div>
    )
}

export default Recipe;



