import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UpperLinks() {
  return (
    <Nav>
      <Nav.Link as={Link} to="/aboutLink?tab=Contact">
        Email
      </Nav.Link>
      <Nav.Link as={Link} to="/guideLine">
        Downloads
      </Nav.Link>
      <Nav.Link as={Link} to="/events">
        Events
      </Nav.Link>
      <Nav.Link as={Link} to="/virtualTour">
        Tour
      </Nav.Link>
      <Nav.Link as={Link} to="/aboutLink?tab=Contact">
        Contact Us
      </Nav.Link>
    </Nav>
  );
}
