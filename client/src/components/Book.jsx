import { Container, Row, Col, Button } from 'react-bootstrap'
import './Book.css'

const BOOK_DESCRIPTION =
  'A memoir about the space between who the world expects you to be and who you actually are. Between Two Worlds follows one young man from a village in Nashik through depression, found family, and a love story that taught him the difference between being chosen and being convenient.'

const PURCHASE_LINK = 'https://store.pothi.com/book/raviraj-thakare-between-two-worlds/'

function Book() {
  return (
    <section id="book" className="book-section" data-aos="fade-up">
      <Container>
        <div className="book-wrapper">
          <Row className="align-items-center g-5">
            <Col md={5} className="text-center">
              <div className="book-cover-frame">
                <div className="book-cover-placeholder">
                  <span>Between Two Worlds</span>
                </div>
              </div>
            </Col>

            <Col md={7}>
              <p className="book-label">A Memoir</p>
              <h2 className="book-title">Between Two Worlds</h2>
              <p className="book-author">By Raviraj Thakare</p>

              <p className="book-description">{BOOK_DESCRIPTION}</p>

              <div className="book-buttons">
                <Button variant="light" href={PURCHASE_LINK} target="_blank" rel="noopener noreferrer">
                  Buy the Book
                </Button>
                <Button variant="outline-light" href="#contact">
                  Read More
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Book