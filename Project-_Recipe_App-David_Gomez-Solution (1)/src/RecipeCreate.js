import React, { useState } from "react";

function RecipeCreate({addRecipes}) {

  const initialFormState = {
    name:'',
    cuisine:'',
    photo:'',
    ingredients:'',
    preparation:''
  }
  const [formData, setFormData] = useState({...initialFormState});
  
  const handleNameChange = ({target}) => {
      setFormData({
        ...formData,
        [target.name]: target.value
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipes(formData);
    setFormData({...initialFormState})
  };
  

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleNameChange}
                value={formData.name}
                placeholder='Name'
                />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleNameChange}
                value={formData.cuisine}
                placeholder='Cuisine'
                />
            </td>
            <td>
              <input
                id="photo"
                type="text"
                name="photo"
                onChange={handleNameChange}
                value={formData.photo}
                placeholder='URL'
                />
            </td>
            <td>
              <textarea
                id="ingredient"
                type="text"
                name="ingredients"
                onChange={handleNameChange}
                value={formData.ingredients}
                placeholder='Ingredients'
                />
            </td>
            <td>
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                onChange={handleNameChange}
                value={formData.preparation}
                placeholder='Preparation'
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
