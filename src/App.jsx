// import { useState } from 'react'
import './App.css'
import News from './Pages/News'
import { Routes, Route } from "react-router-dom"
import Details from './components/Details'


function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={ <News/> } />
    <Route path="/details/:id" element={ <Details/> } />
    </Routes>
     
    </>
  )
}

export default App
