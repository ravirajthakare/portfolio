import './App.css'
import AppNavbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GithubSection from './components/GithubSection'

function App() {
  return (
    <>
      <AppNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubSection />
    </>
  )
}

export default App