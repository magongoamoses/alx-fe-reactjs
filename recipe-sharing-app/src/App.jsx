import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import useRecipeStore from './store/recipeStore'

function App() {
  return (
    <>
      <h1>My Recipe App</h1>
      <RecipeList />
      <AddRecipeForm />
    </>
  )
}

export default App
