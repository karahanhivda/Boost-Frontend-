import React, { useState } from 'react';
import TarifEkle from './TarifEkle'
import TarifListesi from './TarifListesi'



const Anasayfa = () => {

  const companyName = "Magic Recipes";

  const fakeRecipes = [];

  const [recipes, setRecipes] = useState(fakeRecipes);
  const addRecipe = (newRecipe) => setRecipes(prev=>[...prev,newRecipe]);
  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter(recipe => recipe.id !== id));
  }
  const editRecipe = (editRecipe) => {
    setRecipes(prev =>
      prev.map(recipe => (recipe.id === editRecipe.id ? editRecipe : recipe))
    );
    setEditingRecipe(null);
  };

  return (
    <>
        <div className='header-text'>
          <h2>Welcome to the Recipe Sharing Platform</h2>
          <p>Find and share the best recipes from around the world!</p>
        </div>
        <TarifEkle addRecipe={addRecipe} recipes={recipes}/>
        <TarifListesi recipes={recipes} deleteRecipe={deleteRecipe} editRecipe={editRecipe} />{companyName}
    </>
  )
}

export default Anasayfa