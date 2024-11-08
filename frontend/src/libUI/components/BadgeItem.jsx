import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BadgeItem.css";

export default function BadgeItem({ icon, text }) {
  return (
    <Col md={4} sm={6} xs={6} className="mt-5">
      <div className="featured-block">
        <Link to="https://doaj.org/" className="d-block">
          <div className="icon">
            <span>
              <FontAwesomeIcon icon={icon} />
            </span>
          </div>
          <p className="badge-text text-center">{text}</p>
        </Link>
      </div>
    </Col>
  );
}
