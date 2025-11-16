import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
    const favorites = useRecipeStore((state) =>
        state.favorites
            .map((id) => state.recipes.find((r) => r.id === id))
            .filter(Boolean)
    );

    if (favorites.length === 0) return <p>No favorites yet.</p>;

    return (
        <div style={{ marginTop: '30px' }}>
            <h2>My Favorites</h2>
            {favorites.map((recipe) => (
                <div
                    key={recipe.id}
                    style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}
                >
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

export default FavoritesList;
