import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data.json'

function RecipeDetail() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recipeId = parseInt(id)
        const foundRecipe = data.find(r => r.id === recipeId)
        setRecipe(foundRecipe || null)
        setLoading(false)
    }, [id])

    if (loading) {
        return <div className='p-10 text-center text-2xl'>Loading...</div>
    }

    if (!recipe) {
        return <div className='p-10 text-center text-red-500 text-2xl font-bold'>Recipe not found!</div>
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Link to="/" className="inline-block mb-8 text-blue-600 hover:underline text-lg">
                ← Back to recipes
            </Link>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-76 object-cover"
                />
                <div className="p-8">
                    <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
                    <p className="text-lg text-gray-600 mb-10">{recipe.summary}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                {recipe.ingredients.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                            <ol className="list-decimal pl-5 space-y-3">
                                {recipe.instructions.map((step, i) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail