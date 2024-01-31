import React from 'react'
import './RecipeDetail.css'
const RecipeDetail = ({recipe}) => {

  return (
   
    <div className='recipe-detail'>
     <h3>{recipe.title}</h3>
     <p>{recipe.description}</p>
    </div>
    
  )
}

export default RecipeDetail
