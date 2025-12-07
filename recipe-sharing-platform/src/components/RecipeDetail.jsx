import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'

function RecipeDetail() {
    const { id } = useParams();
    const recipeId = parseInt(id);
    const recipe = data.find(r => r.id === recipeId);

    if (!recipe) {
        return <div className='p-6 text-center text-red-500 font-bold'>Recipe not found.</div>;
    }

    return (
        <div className='p-6 max-w-3xl mx-auto bg-gray-50 rounded-lg'>
            <Link to="/" className="inline-block mb-4 text-blue-500 hover:underline">
                &larr; Back to Home
            </Link>

            <img src={recipe.image} alt={recipe.title} className='w-full h-64 object-cover rounded-lg mb-6 shadow' />
            <h1 className='text-3xl font-bold mb-4'>{recipe.title}</h1>
            <p className='text-gray-700 mb-6'>{recipe.summary}</p>

            <div className='mb-6 bg-white p-4 rounded-lg shadow'>
                <h2 className='text-2xl font-semibold mb-2'>Ingredients</h2>
                <ul className='list-disc list-inside space-y-1'>
                    {recipe.ingredients ? recipe.ingredients.map((item, i) => <li key={i}>{item}</li>) : <li>No ingredients listed.</li>}
                </ul>
            </div>

            <div className='bg-white p-4 rounded-lg shadow'>
                <h2 className='text-2xl font-semibold mb-2'>Instructions</h2>
                <ol className='ist-decimal list-inside space-y-1'>
                    {recipe.instructions ? recipe.instructions.map((step, i) => <li key={i}>{step}</li>) : <li>No instructions listed.</li>}
                </ol>
            </div>
        </div>
    )
}

export default RecipeDetail