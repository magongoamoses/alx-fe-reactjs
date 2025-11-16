import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';
import SearchBar from './components/SearchBar'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center" }}>My Recipe App</h1>

            <div style={{ marginBottom: "20px" }}>
              <SearchBar />
            </div>

            <RecipeList />

            <div style={{ marginTop: "30px" }}>
              <AddRecipeForm />
            </div>
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
