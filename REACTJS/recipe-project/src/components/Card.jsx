import React from 'react'

const Card = ({recipe, deleteRecipe,editRecipe}) => {
  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.title + "Picture"} />
      <div className="card-body">
        <h4>{recipe.title}</h4>
        <p>{recipe.description}</p>
        <div className='buttons'>
            <button onClick={()=>deleteRecipe(recipe.id)}     className='delete'>Delete</button>
            <button onClick={()=>editRecipe(recipe.id)} className='edit'>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Card