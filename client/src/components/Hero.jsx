
import { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import './Hero.css'

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    function handleMouseMove(e) {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const glowStyle = {
    background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(192, 132, 252, 0.15), transparent 40%)`
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow" style={glowStyle}></div>

      <Container className="hero-content text-center">
        <h1 className="hero-name">Raviraj Thakare</h1>
        <p className="hero-title">Computer Engineering Student | Developer in Progress</p>
        <p className="hero-tagline">
          I'm learning full-stack web development with the MERN stack, building
          practical projects, and growing one line of code at a time.
        </p>

        <div className="hero-buttons">
          <Button variant="light" href="#projects" className="hero-btn">
            View My Work
          </Button>
          <Button variant="outline-light" href="/resume.pdf" download className="hero-btn">
            Download Resume
          </Button>
          <Button
            variant="outline-light"
            href="https://github.com/ravirajthakare"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            GitHub
          </Button>
          <Button variant="outline-light" href="#contact" className="hero-btn">
            Contact Me
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Hero