import { Card } from "react-bootstrap";
import "./CardItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function CardItem({ heading, text, icon, link }) {
  return (
    <Card className="cards overflow">
      <div className="text-center bg-white">
        <div className="cardIcon">
          <span>
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>
        <h3>{heading}</h3>
      </div>
      <Card.Body>
        <p className="card-text">{text}</p>
        <div className="d-grid">
          <button className="btn" onClick={() => window.open(link, "_blank")}>
            Explore More <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}
