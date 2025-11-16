// src/components/RecipeList.jsx
import useRecipeStore from './recipeStore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const searchTerm = useRecipeStore((state) => state.searchTerm);
    const filterRecipes = useRecipeStore((state) => state.filterRecipes);

    useEffect(() => {
        filterRecipes();
    }, [searchTerm, recipes, filterRecipes]); // ← safe now

    const listToDisplay = searchTerm ? filteredRecipes : recipes;

    return (
        <div>
            {listToDisplay.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <Link to={`/recipe/${recipe.id}`}>
                        <button>View Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;