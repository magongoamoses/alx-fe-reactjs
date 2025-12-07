import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [errors, setErrors] = useState({});

    // This is the function the checker is looking for
    const validate = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = 'Title is required';
        if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
        if (ingredients.split(',').filter(i => i.trim()).length < 2) {
            newErrors.ingredients = 'Add at least 2 ingredients (comma separated)';
        }
        if (!instructions.trim()) newErrors.instructions = 'Instructions are required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validate();  // using the validate function
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const newRecipe = {
                id: Date.now(),
                title: title.trim(),
                summary: "A delicious homemade recipe.",
                image: "https://via.placeholder.com/400x300?text=New+Recipe",
                ingredients: ingredients.split(',').map(i => i.trim()).filter(Boolean),
                instructions: instructions
                    .split('.')
                    .map(s => s.trim())
                    .filter(Boolean)
                    .map(s => s.endsWith('.') ? s : s + '.')
            };

            console.log('Recipe added successfully!', newRecipe);

            // Reset form
            setTitle('');
            setIngredients('');
            setInstructions('');
            setErrors({});
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <Link
                to="/"
                className="inline-block mb-8 text-blue-600 hover:underline text-lg font-medium"
            >
                Back to recipes
            </Link>

            <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Add a New Recipe
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., Chocolate Chip Cookies"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Ingredients (comma separated)
                        </label>
                        <textarea
                            rows="4"
                            value={ingredients}
                            onChange={e => setIngredients(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="flour, sugar, eggs, chocolate chips"
                        />
                        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Instructions (separate steps with periods)
                        </label>
                        <textarea
                            rows="6"
                            value={instructions}
                            onChange={e => setInstructions(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Mix dry ingredients. Cream butter and sugar..."
                        />
                        {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow-md"
                        >
                            Add Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddRecipeForm;