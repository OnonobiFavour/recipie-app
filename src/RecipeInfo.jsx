import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './RecipeInfo.css'

const RecipeInfo = () => {
    const {MealId} = useParams()
    const [item, setItem] = useState()

    if(MealId !=""){
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`).then(res=>res.json()).then(data=>{
            setItem(data.meals[0])
        })
        
    }
  return (
        <>
        {
            (!item)?"":(<>
            
            <div className="image">
                <img src={item.strMealThumb} alt=""/>
                <div className="inner_content">
                    <h1>Name: {item.strMeal}</h1>
                    <h2>Area: {item.strArea.toLowerCase()} meal</h2>
                    <h3>Category: {item.strCategory}</h3>
                </div>
            </div>
            <div className="recipe_details">
                <section className="ingredient">
                    <h2>Ingredient</h2>
                    <h4>{item.strIngredient1} : {item.strMeasure1}</h4>
                    <h4>{item.strIngredient2} : {item.strMeasure2}</h4>
                    <h4>{item.strIngredient3} : {item.strMeasure3}</h4>
                    <h4>{item.strIngredient4} : {item.strMeasure4}</h4>
                    <h4>{item.strIngredient5} : {item.strMeasure5}</h4>
                    <h4>{item.strIngredient6} : {item.strMeasure6}</h4>
                    <h4>{item.strIngredient7} : {item.strMeasure7}</h4>
                    <h4>{item.strIngredient8} : {item.strMeasure8}</h4>
                </section>
            </div>
            
            </>)
        }
         
        </>
  )
}

export default RecipeInfo