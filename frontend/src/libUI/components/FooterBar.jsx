import "./FooterBar.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function FooterBar() {
  return (
    <Row className="text-center">
      <Col md={8} lg={6} xs={10} sm={10} className="mb-4">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Student</span>
          </strong>
          . All Rights Reserved By University of Peshawar
        </div>
        <div className="create">
          <span>Created By </span>
          <a href="https://owais-home.netlify.app/" target="blank">
            Muhammad Owais
          </a>
        </div>
      </Col>
      <Col md={4} lg={6} xs={2} sm={2} className="text-center">
        <div className="social-links">
          <a href="http://facebook.com" target="blank">
            <span className="facebook">
              <FontAwesomeIcon icon={faFacebookSquare} />{" "}
            </span>
          </a>
          <a href="http://twitter.com" target="blank">
            <span className="twitter">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </span>
          </a>
          <a href="http://instagram.com" target="blank">
            <span className="instagram">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </span>
          </a>
          <a href="http://linkedin.com" target="blank">
            <span className="linkedin">
              <FontAwesomeIcon icon={faLinkedin} />{" "}
            </span>
          </a>
        </div>
      </Col>
    </Row>
  );
}
