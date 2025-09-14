import React from 'react'
import { useLocation } from 'react-router-dom'
const Display = () => {

  const loc=useLocation();

  const ans=loc.state?.recipe;


  if(!ans){
    return <h2> Not found</h2>
  }
  return (
    <div>

      <h1>{ans.title || "Recipe"}</h1>

      <h2>Ingredients:
      </h2>


      <ul>
        {ans.ingredients?.map((a,i)=>(
          <li key={i}>{a}</li>
        ))}
      </ul>

      <h2> Procedure:</h2>

      <p>{ans.instructions || "No Instructions" }</p>
    </div>
  )
}

export default Display