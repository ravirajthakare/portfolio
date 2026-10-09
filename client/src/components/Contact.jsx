import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import './Contact.css'

// Contact details. Empty string = hidden on the page.
const CONTACT_EMAIL = 'ravirajthakare2002@gmail.com' // change if you want a different public email
const GITHUB_URL = 'https://github.com/ravirajthakare'
const LINKEDIN_URL = '' // TODO: paste your LinkedIn profile URL
const INSTAGRAM_URL = '' // TODO: optional, paste your Instagram URL

const contactLinks = [
  { label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: 'GitHub', value: 'github.com/ravirajthakare', href: GITHUB_URL },
  { label: 'LinkedIn', value: 'View profile', href: LINKEDIN_URL },
  { label: 'Instagram', value: 'View profile', href: INSTAGRAM_URL },
]

const emptyForm = { name: '', email: '', message: '' }

function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function validate() {
    const newErrors = {}
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name.'
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.'
    }
    return newErrors
  }

async function handleSubmit(e) {
  e.preventDefault()
  const newErrors = validate()
  setErrors(newErrors)
  setStatus('idle')

  if (Object.keys(newErrors).length > 0) return

  try {
    setStatus('sending')
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (!res.ok) throw new Error('Request failed')
    setStatus('success')
    setFormData(emptyForm)
  } catch {
    setStatus('error')
  }
}

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <Container>
        <h2 className="section-heading">Contact</h2>
        <p className="skills-subtext">
          Have a question, an opportunity, or just want to say hello? Reach out
          using any of the options below.
        </p>

        <Row className="g-5">
          <Col lg={5}>
            <ul className="contact-links">
              {contactLinks
                .filter((link) => link.href)
                .map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.label === 'Email' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <span className="contact-link-label">{link.label}</span>
                      <span className="contact-link-value">{link.value}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </Col>

          <Col lg={7}>
            <Form onSubmit={handleSubmit} noValidate className="contact-form">
              {status === 'success' && (
                <Alert variant="success">Thank you! Your message has been received.</Alert>
                )}
                    {status === 'error' && (
                        <Alert variant="danger">
                         Something went wrong. Please try again, or email me directly.
                        </Alert>
                )}

              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  autoComplete="name"
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  autoComplete="email"
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" variant="light" className="contact-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact