import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import contact from "../images/contact.png";
import "./Contact.css";
export default function Contact() {
  return (
    <Col md={8} className="contact-section">
      <Container>
        <Row>
          <Col md={12} lg={12} sm={12} className="text-center mt-3">
            <img src={contact} alt="contact" />
            <h2 className="mt-4">CONTACT US</h2>
            <p className="text-center text-muted">
              Please fill this form in a decent manner
            </p>
          </Col>
          <Col sm={12} lg={7} md={7} className="g-3 mb-5">
            <Form>
              <Form.Group
                className="mb-4 input-group-lg"
                controlId="formBasicText"
              >
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3 input-group-lg">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                className="mb-3 input-group-lg"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Your Message"
                  rows={5}
                />
              </Form.Group>
              <button
                class="w-100 btn form-control border-warning py-3 bg-white text-warning"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </Col>
          <Col md={5} sm={12} lg={5} className="contact-icon">
            <AddressBadge
              icon={faLocationDot}
              title="Address"
              text="University of Peshawar University Road"
            />
            <AddressBadge
              icon={faEnvelope}
              title="Mail Us"
              text="info@example.com"
            />
            <AddressBadge
              icon={faPhone}
              title="Telephone"
              text="(+012) 3456 7890"
            />
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
function AddressBadge({ text, icon, title }) {
  return (
    <div class="d-flex badges p-4 rounded mb-4 bg-white">
      <span className="my-custom-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <div>
        <h4>{title}</h4>
        <div class="mb-2 text-muted">{text}</div>
      </div>
    </div>
  );
}
