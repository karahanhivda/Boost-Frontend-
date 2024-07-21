import React, { useState } from 'react'

const TarifEkle = ({addRecipe, recipes}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    addRecipe({

      id: (Number(recipes[recipes.length-1].id)+1).toString(),
      title: title,
      description: description,
      image: imageUrl,
    });
    setTitle("");
    setDescription("");
    setImageUrl("");
  }

return (
  <div className="add-recipes">
      <form onSubmit={handleSubmit}>
          <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Recipe Title"
          />
          <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Recipe Description"
          />
          <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              type="url"
              placeholder="Image URL"
          />
          <input disabled={title==="" || description==="" || imageUrl===""} type="submit" value="Add Recipe" />
      </form>
  </div>
)
}

export default TarifEkle