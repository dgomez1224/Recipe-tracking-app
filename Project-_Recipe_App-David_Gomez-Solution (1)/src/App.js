import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  function addRecipes(recipe){
    setRecipes([...recipes, recipe])
  }
 
  function deleteRecipe(deleteIdx){
    setRecipes((currentRecipe) => 
        currentRecipe.filter((recipe, index)=> 
          index !== deleteIdx
           ))}

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes = {recipes} 
        deleteRecipe = {deleteRecipe} />
      <RecipeCreate addRecipes = {addRecipes} />
    </div>
  );
}

export default App;
