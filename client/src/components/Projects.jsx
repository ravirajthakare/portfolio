import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import './Projects.css'

// Empty for now — this is exactly where you'll add real projects later.
// Example of what one entry will look like once you finish a project:
//
// {
//   title: 'Expense Tracker',
//   description: 'A simple app to track daily expenses.',
//   technologies: ['React', 'Node.js', 'MongoDB'],
//   github: 'https://github.com/ravirajthakare/expense-tracker',
//   demo: '',
//   image: '',
//   status: 'In Progress',
//   category: 'Web',
// }

const projects = []

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-heading">Projects</h2>
        <p className="skills-subtext">
          Projects I've built or am currently building, as I turn what I'm
          learning into real, working software.
        </p>

        {projects.length === 0 ? (
          <div className="projects-empty-state">
            <p>Projects are currently being built. Check back soon.</p>
          </div>
        ) : (
          <Row className="g-4">
            {projects.map((project) => (
              <Col key={project.title} md={6} lg={4}>
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  )
}

export default Projects