import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import Header from "./Header/Header";
import { Link } from "react-router-dom";
import styles from "./Events.module.css";
import eventimg from "./images/eventimg.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const cardStyle = {
  "--bs-card-spacer-y": "0rem",
};

const menuStyle = {
  listStyleType: "none",
  paddingLeft: "22px",
};

const menuItemStyle = {
  marginBottom: "1rem",
};

const navLinkStyle = {
  color: "#76768e",
  textDecoration: "none",
  fontSize: "larger",
};

const sideLink = [
  { text: "Connect With Us", link: "/aboutLink?tab=Contact" },
  { text: "Library Publications", link: "/aboutLink?tab=Contact" },
  { text: "Newsletter Subscription", link: "/aboutLink?tab=Contact" },
];
const sideLink2 = [
  { text: "OPAC", link: "/servicesLink?tab=OPAC" },
  { text: "Manuscripts", link: "/collectionLink?tab=ManuScript" },
  { text: "HEC (E-Resources)", link: "http://www.digitallibrary.edu.pk/" },
  { text: "Theses Repository", link: "http://121.52.147.5:4000/home" },
  { text: "Open Access journal", link: "https://doaj.org/" },
  { text: "Meuseum", link: "/meuseum" },
];

function Events() {
  const [data, setData] = useState([]);
  const baseURL = "http://localhost:4000";

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${baseURL}/events`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <div className={styles.eventPage}>
            <div className="py-5">
              <h1 className="text-white text-center mb-3">Library Events</h1>
            </div>
          </div>
        </Row>
        <Row className="mt-5">
          <Col
            md={{ span: 8, offset: 1 }}
            style={{ borderRight: "2px solid #dee2e6" }}
          >
            {data.map((event) => (
              <Card className="mb-3" key={event.id} style={cardStyle}>
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
                      src={`${baseURL}${event.event_img}`}
                      alt={event.title}
                      className="img-fluid rounded-start"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <small className="text-muted">Updated 1 week ago</small>
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text>
                        {event.caption} <br />
                        <small className="text-muted">
                          {event.DATE} (2:30 PM–4:00 PM)
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
          <Col md={3} className="d-flex align-items-start">
            <div className="w-100">
              <h2 className="mt-4">At a Glance</h2>
              <ul className="nav flex-column" style={menuStyle}>
                {sideLink.map((sidelink) => (
                  <li
                    className="mb-2 nav-item"
                    style={menuItemStyle}
                    key={sidelink.text}
                  >
                    <Link style={navLinkStyle} to={sidelink.link} as={Link}>
                      {sidelink.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <h2 className="mt-4">Categories</h2>
              <ul className="nav flex-column" style={menuStyle}>
                {sideLink2.map((sidelink2) => (
                  <li
                    className="mb-2 nav-item"
                    style={menuItemStyle}
                    key={sidelink2.text}
                  >
                    <Link style={navLinkStyle} to={sidelink2.link} as={Link}>
                      {sidelink2.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.socialLinks}>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faFacebookSquare} />{" "}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faYoutubeSquare} />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Events;
