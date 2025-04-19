import React from 'react'
import NavBar from './component/navBar.jsx'
import Hero from './component/Hero.jsx'
import Projects from './component/Projects.jsx'
import Skills from './component/Skills.jsx'
import BackToTop from './component/BackToTop.jsx'
import Contact from './component/Contact.jsx'
import About from './component/About.jsx'

const App = () => {
  return (
  <>
    <NavBar/>
    <Hero/>
    <Projects/>
    <Skills/>
    <About/>
    <Contact/>
    <BackToTop/>
  </>
 )
}

export default App
