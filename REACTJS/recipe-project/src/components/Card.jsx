import React, { useState } from 'react'

const Card = ({recipe, deleteRecipe,editRecipe}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = () => {
    editRecipe(editedRecipe);
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedRecipe.title}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="description"
            value={editedRecipe.description}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="image"
            value={editedRecipe.image}
            onChange={handleEditChange}
          />
          <button onClick={handleEditSubmit}>Save</button>
        </>
      ) : (
        <>
          <img src={recipe.image} alt={recipe.title} />
          <div className='card-body'>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
          <div className='buttons'>
          <button className='edit' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='delete' onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Card