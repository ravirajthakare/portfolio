import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import './Projects.css'

// Empty for now — add real projects here later. Example shape:
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

const filterOptions = ['All', 'Web', 'Android', 'C++', 'Other']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <Container>
        <h2 className="section-heading">Projects</h2>
        <p className="skills-subtext">
          Projects I've built or am currently building, as I turn what I'm
          learning into real, working software.
        </p>

        <div className="filter-buttons">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'light' : 'outline-light'}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="filter-btn"
            >
              {filter}
            </Button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="projects-empty-state">
            <p>
              {projects.length === 0
                ? 'Projects are currently being built. Check back soon.'
                : `No ${activeFilter} projects yet. Check back soon.`}
            </p>
          </div>
        ) : (
          <Row className="g-4">
            {filteredProjects.map((project) => (
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