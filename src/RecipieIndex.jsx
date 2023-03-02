import React from 'react'
import './ReciepieIndex.css'

const RecipieIndex = ({letterIndex}) => {
    const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let num = 0;

  return (
    <>
      <div className='letters'>
    {
        letter.map(item=>{
            return(
                   <button className='letter-style' key={num++} onClick={()=>letterIndex(item)}>{item}</button> 
            )
          })
        }
        </div>
    
    
    </>
  )
}

export default RecipieIndex