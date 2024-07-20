import React, { useState } from 'react'
import Card from './Card'

const TarifListesi = ({recipes}) => {
  return (
    <div className="recipes-list">
    {
      recipes.map(recipe=><Card recipe={recipe} key={recipe.id} />) 
    }
    </div>
    
  )
}

export default TarifListesi