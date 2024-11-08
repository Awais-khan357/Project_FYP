import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import part1 from "./images/part1.jpeg";
import part3 from "./images/part3.jpeg";
import part4 from "./images/part4.jpeg";
import Header from "./Header/Header";
import "./Museum.css";

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

export default function Museum() {
  return (
    <>
      <Header />
      <Container fluid className="mesuem">
        <Row>
          <div className="Museum-page py-5">
            <div className="py-5">
              <h1 className="text-white text-center mb-3">Library Museum</h1>
            </div>
          </div>
        </Row>
        <Row className="mt-4 top-heading">
          <Col>
            <h1>Making the Book, Past and Present</h1>
          </Col>
        </Row>
        <Row className="gx-2 mb-2 mt-5">
          <Col md={{ span: 1 }}></Col>
          <CustomCard
            title="Ad Herennium,14th century"
            image={part1}
            text="This book is a truly extraordinary part of the University of Iowa’s medieval manuscript collection. The most frequently surviving medieval books are often the most important or most beautiful."
            bigger
          />
          <CustomCard
            title="Encoded Meaning in the Page"
            image={part3}
            text="In a 2016 interview when asked why he made A Humument, Tom Phillips responded: “It's inexhaustible when you find a big text that's full of words to find other things in it."
          />
          <Col md={3} className="d-flex align-items-center">
            <div className="w-100 mesuemLinks">
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
              <div className="socialLinks">
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
        <Row className="gx-2 mb-2 ">
          <Col md={{ span: 1 }}></Col>
          <CustomCard
            title="Encoded Meaning in the Page"
            image={part3}
            text="In a 2016 interview when asked why he made A Humument, Tom Phillips responded: “It’s inexhaustible when you find a big text that’s full of words to find other things in it."
          />
          <CustomCard
            title="Ad Herennium,14th century"
            image={part4}
            text="This book is a truly extraordinary part of the University of Iowa’s medieval manuscript collection. The most frequently surviving medieval books are often the most important or most beautiful."
            bigger
          />
        </Row>
      </Container>
    </>
  );
}

const CustomCard = ({ title, image, text, bigger, cardClassName }) => {
  return (
    <Col xs={12} md={bigger ? 5 : 3}>
      <Card className={`mesuemCard ${bigger ? "biggerCard" : "smallerCard"}`}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="bg-dark text-white">
          <Card.Title className="text-warning">{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
