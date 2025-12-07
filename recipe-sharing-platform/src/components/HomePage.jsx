import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import data from "../data.json"

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data);
    }, []);

    return (
        <div className='p-6'>
            <div className="flex justify-end mb-4">
                <Link to="/add-recipe" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    + Add Recipe
                </Link>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {recipes.map((recipe) => (
                    <Link
                        key={recipe.id} to={`/recipe/${recipe.id}`}
                        className='bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition transform duration-300 block'
                    >
                        <img src={recipe.image} alt={recipe.title} className='w-full h-48 object-cover' />
                        <div className='p-4'>
                            <h2 className='text-xl font-bold mb-2'>{recipe.title}</h2>
                            <p className='text-gray-600'>{recipe.summary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomePage;
