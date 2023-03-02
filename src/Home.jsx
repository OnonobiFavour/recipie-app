import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import RecipieIndex from './RecipieIndex'
import Loading from './Loading'
import './Home.css'
import Meal from './Meal'

const Home = () => {
    const [url, setUrl] = useState('https:/www.themealdb.com/api/json/v1/1/search.php?f=f')
    const [loading,  setLoading] = useState(true)
    const [item, setItem] = useState()
    const [search, setSearch] = useState('')

    useEffect(() =>{
        
        setLoading(true)
        fetch(url).then((res)=>res.json()).then((data)=>{
            console.log(data.meals)
            setLoading(false)
            setItem(data.meals)
        })
        .catch((err)=>{
            alert(`${err.code} Connection Problem`)
        })
    }, [url])

   const updateUrl = (letter)=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
   }

   const searchRecipe = (e)=>{
    if(e.key == 'Enter'){
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
   }

   
  return (
    <main className="main">

        <div className="text">
            <h1>Find Your Favourite Food Recipe...</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit dsye fguue ibidbuge shade the cor the vuudvh.</p>
            <input type="search" className="search" placeholder='search food' onChange={(e)=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
        </div>
        <section className="container">
            {/* {
                show ? <Meal data={item}/>: 'Not Found'
            }
             */}
            {loading? <Loading/>:<Meal data={item}/>}
            
            <div className="index">
                 {loading ? null : <RecipieIndex letterIndex={(letter)=>updateUrl(letter)}/>}
            </div>
        </section>

    </main>

  )
}

export default Home