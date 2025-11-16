import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useEffect } from 'react';
import useRecipeStore from './components/recipeStore';

function App() {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  // Regenerate recommendations whenever recipes or favorites change
  useEffect(() => {
    generateRecommendations();
  }, [recipes, favorites]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
              <h1 style={{ textAlign: 'center' }}>My Recipe App</h1>

              <div style={{ marginBottom: '20px' }}>
                <SearchBar />
              </div>

              <RecipeList />

              <div style={{ marginTop: '30px' }}>
                <AddRecipeForm />
              </div>

              <FavoritesList />

              <RecommendationsList />
            </div>
          }
        />

        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
