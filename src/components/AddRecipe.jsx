import React from 'react'
import './AddRecipe.css'
import { useState } from 'react'
// Add recipe this is a functional component
const AddRecipe = ({onAddRecipe}) => {
    // Local Sate for form input
    const [title,setTitle] =useState("")
    const [description,setDescription] = useState("")
    //Handle Form submission
    const handleSubmit = (e)=>{
        e.preventDefault()
        // call the onAddRecipe function passed as a prop
        onAddRecipe({title,description});
        // Reset form feilds
        setTitle("")
        setDescription("")
    } 
  return (
    <div className='add-recipe'>
     <form onSubmit={handleSubmit} >

        <input type='text' 
        className='title' 
        onChange={(e)=>setTitle(e.target.value)} 
        value={title} placeholder='Enter the Title' required/>

        <textarea  
        className='description' 
        onChange={(e)=>setDescription(e.target.value)} 
        value={description} 
        placeholder='Enter the Description' required/>
        <button type='submit'>Add Recipe</button>

    </form> 
    </div>
    
  )
}

export default AddRecipe
