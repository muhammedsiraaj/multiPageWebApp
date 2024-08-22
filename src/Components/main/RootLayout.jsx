import React from 'react'
import Navbar from './Navbar'
import { Route, Routes, } from 'react-router-dom'
import Home from './Home'
import CountryData from '../countrydata/CountryData'
import TodoApp from '../todo/TodoApp'
import Pagenotfound from './Pagenotfound'
import Footer from './Footer'
import './RootLayout.css'


function RootLayout() {
  return (
    <div className='app-container'>
      <Navbar/>
      <div className='content-container'>
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/countries' element = {<CountryData/>} />
            <Route path='/todoapp' element ={<TodoApp/>} />
            <Route path='*' element = {<Pagenotfound/>} />
        </Routes>
        </div>  
        <Footer/> 
    </div>
  )
}

export default RootLayout
