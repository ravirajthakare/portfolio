    import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

const GITHUB_URL = 'https://github.com/ravirajthakare'
const LINKEDIN_URL = '' // TODO: paste your LinkedIn URL (hidden while empty)
const EMAIL = 'ravirajthakare2002@gmail.com'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Book', href: '#book' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container>
        <Row className="g-4 text-center text-md-start">
          <Col md={4}>
            <h3 className="footer-name">Raviraj Thakare</h3>
            <p className="footer-text">Computer Engineering Student</p>
          </Col>

          <Col md={4}>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4}>
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-list">
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              {LINKEDIN_URL && (
                <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              )}
              <li><a href={`mailto:${EMAIL}`}>Email</a></li>
            </ul>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>&copy; {year} Raviraj Thakare. All rights reserved.</p>
          <p>Built with curiosity, code and continuous learning.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer