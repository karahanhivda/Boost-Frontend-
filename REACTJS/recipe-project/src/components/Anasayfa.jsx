import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TarifEkle from './TarifEkle';
import TarifListesi from './TarifListesi';

const Anasayfa = () => {
  const companyName = "Magic Recipes";
  const [recipes, setRecipes] = useState([]);
  // const [editingRecipe, setEditingRecipe] = useState(null); 

  useEffect(() => {
    axios.get('http://localhost:3001/fakeRecipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the recipes!", error);
      });
  }, []);

  const addRecipe = (newRecipe) => {
    axios.post('http://localhost:3001/fakeRecipes', newRecipe)
      .then(response => {
        setRecipes(prev => [...prev, response.data]);
      })
      .catch(error => {
        console.error("There was an error adding the recipe!", error);
      });
  };

  const deleteRecipe = (id) => {
    axios.delete(`http://localhost:3001/fakeRecipes/${id}`)
      .then(() => {
        setRecipes(prev => prev.filter(recipe => recipe.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the recipe!", error);
      });
  };

  const editRecipe = (editRecipe) => {
    axios.put(`http://localhost:3001/fakeRecipes/${editRecipe.id}`, editRecipe)
      .then(response => {
        setRecipes(prev =>
          prev.map(recipe => (recipe.id === editRecipe.id ? response.data : recipe))
        );
        setEditingRecipe(null);
      })
      .catch(error => {
        console.error("There was an error updating the recipe!", error);
      });
  };

  return (
    <>
      <div className='header-text'>
        <h2>Welcome to the Recipe Sharing Platform</h2>
        <p>Find and share the best recipes from around the world!</p>
      </div>
      <TarifEkle addRecipe={addRecipe} recipes={recipes} />
      <TarifListesi recipes={recipes} deleteRecipe={deleteRecipe} editRecipe={editRecipe} />
      {companyName}
    </>
  );
};

export default Anasayfa;
