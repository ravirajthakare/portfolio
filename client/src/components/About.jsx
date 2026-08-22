import { Container, Row, Col, Badge } from 'react-bootstrap'
import './About.css'

const currentlyLearning = [
  'C++', 'Data Structures & Algorithms', 'Java', 'JavaScript',
  'MERN Stack', 'React', 'Node.js', 'Express.js', 'MongoDB'
]

function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="section-heading">About Me</h2>

        <Row className="align-items-center g-4">
          <Col lg={7}>
            <p className="about-text">
              I'm a Computer Engineering student at Pune Institute of Computer
              Technology (PICT), Pune, currently learning full-stack web
              development through the MERN stack. I'm still early in my
              practical development journey — building projects, making
              mistakes, and steadily getting more comfortable with real-world
              code.
            </p>
            <p className="about-text">
              I completed an internship in MERN Stack Development at{' '}
              <strong>Sumago Infotech Pvt. Ltd., Nashik</strong>, where I got
              my first hands-on exposure to working with a full-stack
              JavaScript codebase.
            </p>
            <p className="about-text">
              Outside of code, I'm also the author of{' '}
              <em>Between Two Worlds</em>, a personal memoir — you can read
              more about it in the Book section below.
            </p>
          </Col>

          <Col lg={5}>
            <div className="learning-card">
              <h3 className="learning-heading">Currently Learning</h3>
              <div className="learning-badges">
                {currentlyLearning.map((skill) => (
                  <Badge key={skill} bg="secondary" className="learning-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About