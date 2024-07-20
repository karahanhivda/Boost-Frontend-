import React, { useState } from 'react'

const TarifEkle = ({addRecipe}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && imageUrl) {
        ekleTarif({ title, description, imageUrl }); 
        setTitle('');
        setDescription('');
        setImageUrl('');
    } else {
        alert('Please fill in all fields.');
    }
};

return (
  <div className="add-recipes">
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Recipe Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />
          <input
              type="text"
              placeholder="Recipe Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          />
          <input
              type="url"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
          />
          <input type="submit" value="Add Recipe" />
      </form>
  </div>
)
}

export default TarifEkle