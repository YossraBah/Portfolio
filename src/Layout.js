import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

const Layout = () => {
  return (
    <div className='bg-darkColor'>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Layout
