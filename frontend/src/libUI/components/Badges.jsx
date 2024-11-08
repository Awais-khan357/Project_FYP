import BadgeItem from "./BadgeItem";
import { Container, Row, Col } from "react-bootstrap";
import {
  faUsers,
  faStar,
  faCircleExclamation,
  faBook,
  faDisplay,
  faArrowsToCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Badges.css";

const BadgeData = [
  { icon: faUsers, text: "Open Acess Journals" },
  { icon: faArrowsToCircle, text: "HEC Corner" },
  { icon: faStar, text: "University Ranking" },
  { icon: faBook, text: "MOOCs" },
  { icon: faCircleExclamation, text: "Union Catalog" },
  { icon: faDisplay, text: "Open Acess Thesis" },
];

export default function Badges() {
  return (
    <Container className="mt-5">
      <Row className="d-flex">
        <Col md={12} className="text-center">
          <h1>Quick Links</h1>
        </Col>
        {BadgeData.map((item) => (
          <BadgeItem text={item.text} key={item.text} icon={item.icon} />
        ))}
      </Row>
    </Container>
  );
}
