import React from 'react'

const Card = ({recipe}) => {
  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.title + "Picture"} />
      <div className="card-body">
        <h4>{recipe.title}</h4>
        <p>{recipe.description}</p>
      </div>
    </div>
  )
}

export default Card