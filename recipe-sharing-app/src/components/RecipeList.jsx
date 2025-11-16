import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
        <div>
            <h2>Recipes</h2>
            {recipes.length === 0 && <p>No recipes yet.</p>}

            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <h3>{recipe.title}</h3>

                        <p>{recipe.description}</p>

                        <Link to={`/recipe/${recipe.id}`}>
                            <button>View Details</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
