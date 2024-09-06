
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  

  return (
    <div className='bg-gradient-to-r from-[#121212]  to-slate-900'>
        <Navbar/>
      <div className='grid grid-cols-1  mx-8'>
        <HeroSection/>
      </div>
    <About/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
