import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],

    addRecipe: (newRecipe) => set((state) => ({
        recipes: [...state.recipes, newRecipe]
    })),

    updateRecipe: (id, updatedData) => set((state) => ({
        recipes: state.recipes.map((recipe) => recipe.id === id ? { ...recipe, ...updatedData } : recipe),
    })),

    deleteRecipe: (id) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })), setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;