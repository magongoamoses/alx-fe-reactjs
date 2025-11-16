import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <div>
            <h1>My Recipe App</h1>
            <RecipeList />
            <AddRecipeForm />
          </div>
        } />

        <Route path="/recipe/:id" element={
          <RecipeDetailsWrapper />
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
