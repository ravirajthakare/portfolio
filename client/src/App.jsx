import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import AppNavbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GithubSection from './components/GithubSection'
import Book from './components/Book'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 60,
      disable: 'reduced-motion',
    })
  }, [])

  return (
    <>
      <AppNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubSection />
      <Book />
      <Resume />
      <Contact />
    </>
  )
}

export default App