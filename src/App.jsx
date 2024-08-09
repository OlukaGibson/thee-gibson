import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className="overflow-x-hidden text-nuetral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_120%_120%_at_30%_30%,rgba(120,119,198,0.3),rgba(8,6,10,100))]">
        </div>
      </div> */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div> 
  )
}

export default App
 