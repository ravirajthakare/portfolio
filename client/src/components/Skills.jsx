import { Container, Row, Col, Badge } from 'react-bootstrap'
import './Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', level: 'Comfortable' },
      { name: 'Java', level: 'Comfortable' },
      { name: 'JavaScript', level: 'Comfortable' },
      { name: 'Python', level: 'Familiar' },
      { name: 'SQL', level: 'Familiar' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 'Comfortable' },
      { name: 'CSS', level: 'Comfortable' },
      { name: 'React', level: 'Learning' },
      { name: 'Bootstrap', level: 'Familiar' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Learning' },
      { name: 'Express.js', level: 'Learning' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 'Learning' },
      { name: 'Firebase', level: 'Familiar' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 'Familiar' },
      { name: 'GitHub', level: 'Familiar' },
      { name: 'VS Code', level: 'Comfortable' },
      { name: 'Android Studio', level: 'Familiar' },
    ],
  },
]

const levelColor = {
  Learning: 'secondary',
  Familiar: 'info',
  Comfortable: 'success',
}

function Skills() {
  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <Container>
        <h2 className="section-heading">Skills</h2>
        <p className="skills-subtext">
          A snapshot of where I currently stand — not a claim of mastery, but
          an honest picture of what I know and what I'm actively building on.
        </p>

        <Row className="g-4">
          {skillCategories.map((category) => (
<           Col key={category.title} md={6} lg={4} data-aos="fade-up" data-aos-delay={100}>
              <div className="skill-card">
                <h3 className="skill-card-title">{category.title}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="skill-item">
                      <span>{skill.name}</span>
                      <Badge bg={levelColor[skill.level]} className="skill-level-badge">
                        {skill.level}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills