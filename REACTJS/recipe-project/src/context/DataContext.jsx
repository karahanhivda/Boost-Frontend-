import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe.id !== id));
  };

  const editRecipe = (updatedRecipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
    );
  };

  return (
    <DataContext.Provider value={{ recipes, addRecipe, deleteRecipe, editRecipe }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider };
