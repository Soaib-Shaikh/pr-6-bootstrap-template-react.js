import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Service from './components/Service'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
