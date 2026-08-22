import { Card, Badge, Button } from 'react-bootstrap'
import './ProjectCard.css'

function ProjectCard({ title, description, technologies, github, demo, image, status, category }) {
  return (
    <Card className="project-card h-100">
      <div className="project-card-image-wrap">
        <Card.Img
          variant="top"
          src={image || '/placeholder-project.png'}
          alt={`${title} preview`}
          loading="lazy"
          className="project-card-image"
        />
        <Badge bg={status === 'Completed' ? 'success' : 'secondary'} className="project-status-badge">
          {status}
        </Badge>
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="project-title">{title}</Card.Title>
        <Card.Text className="project-description">{description}</Card.Text>

        <div className="project-tech-list">
          {technologies.map((tech) => (
            <Badge key={tech} bg="secondary" className="tech-badge">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="project-buttons mt-auto">
          {github && (
            <Button
              variant="outline-light"
              size="sm"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}
          {demo && (
            <Button variant="light" size="sm" href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard