import { Container, Button } from 'react-bootstrap'
import './Resume.css'

function Resume() {
  return (
    <section id="resume" className="resume-section" data-aos="fade-up">
      <Container className="text-center">
        <h2 className="section-heading">Resume</h2>
        <p className="resume-subtext">
          A summary of my education, skills, and experience so far, updated
          as I keep learning and building.
        </p>

        <div className="resume-buttons">
          <Button variant="light" href="/resume.pdf" download className="resume-btn">
            Download Resume
          </Button>
          <Button variant="outline-light" href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            View Resume
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Resume