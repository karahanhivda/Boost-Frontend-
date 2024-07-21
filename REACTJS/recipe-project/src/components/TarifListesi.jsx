import React from 'react'
import Card from './Card'

const TarifListesi = ({recipes, deleteRecipe, editRecipe}) => {
  return (
    <div className="recipes-list">
    {
      recipes.map(recipe=><Card recipe={recipe} key={recipe.id} deleteRecipe={deleteRecipe} editRecipe={editRecipe} />) 
    }
    </div>
    
  )
}

export default TarifListesi