import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Meal.css'

const Meal = ({data}) => {

    const navigate = useNavigate()
  return (
    <section className="card_display">
        {
            !data?'NOT FOUND': data.map(item=>{
                return(

                    <div className='meal_card' key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                        <img src={item.strMealThumb} alt="spicy"/>
                        <p>Name: {item.strMeal}</p>
                    </div>
                )
            })
        }
    </section>
  )
}

export default Meal