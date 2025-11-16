// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],

    setSearchTerm: (term) => set({ searchTerm: term }),

    filterRecipes: () => {
        const state = get(); // capture once
        const filtered = state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
        set({ filteredRecipes: filtered });
    },

    addRecipe: (newRecipe) =>
        set((state) => ({ recipes: [...state.recipes, newRecipe] })),

    updateRecipe: (id, updatedData) =>
        set((state) => ({
            recipes: state.recipes.map((r) =>
                r.id === id ? { ...r, ...updatedData } : r
            ),
        })),

    deleteRecipe: (id) =>
        set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

    favorites: [],
    addFavorite: (recipeId) =>
        set((state) => ({
            favorites: state.favorites.includes(recipeId)
                ? state.favorites
                : [...state.favorites, recipeId],
        })),
    removeFavorite: (recipeId) =>
        set((state) => ({ favorites: state.favorites.filter((id) => id !== recipeId) })),

    recommendations: [],
    generateRecommendations: () =>
        set((state) => ({
            recommendations: state.recipes.filter((r) => !state.favorites.includes(r.id)),
        })),
}));

export default useRecipeStore;