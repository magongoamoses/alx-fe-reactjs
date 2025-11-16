import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
    const recommendations = useRecipeStore((state) => state.recommendations);

    if (recommendations.length === 0) return <p>No recommendations yet.</p>;

    return (
        <div style={{ marginTop: '30px' }}>
            <h2>Recommended Recipes</h2>
            {recommendations.map((recipe) => (
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

export default RecommendationsList;
