import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );

    const [isEditing, setIsEditing] = useState(false);

    // Show error if recipe not found
    if (!recipe) return <p>Recipe not found.</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>

            {/* Edit button or EditRecipeForm */}
            {isEditing ? (
                <EditRecipeForm
                    recipe={recipe}
                    onClose={() => setIsEditing(false)}
                />
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}

            {/* Delete button */}
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};

export default RecipeDetails;
