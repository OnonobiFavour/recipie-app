import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Home.css'
import './App.css'
import './Meal.css'
import './RecipeInfo.css'
import RecipeInfo from './RecipeInfo'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/:MealId' element={<RecipeInfo />}></Route>
      </Routes>
      
    </Router>
  )
}

export default App