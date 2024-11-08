import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import openAcess from "./images/openAcess.png";
import Ranking from "./images/Ranking.png";
import catalog from "./images/catalog.png";
import Elearning from "./images/Elearning.png";
import education from "./images/education.png";
import thesis from "./images/thesis.png";
import "./CheckSection.css";

const BadgeData = [
  { img: openAcess, text: "Open Acess Journals", link: "https://doaj.org/" },
  { img: education, text: "HEC Corner", link: "/heccorner" },
  {
    img: Ranking,
    text: "University Ranking",
    link: "https://www.hec.gov.pk/english/universities/pages/rank.aspx",
  },
  {
    img: Elearning,
    text: "Online Learning platform",
    link: "https://www.pcmag.com/picks/best-online-learning-services",
  },
  {
    img: catalog,
    text: "Union Catalog",
    link: "/servicesLink?tab=Union%20Catalog",
  },
  { img: thesis, text: "Open Acess Thesis", link: "https://oatd.org/" },
];

export default function checkSection() {
  return (
    <section className="about w-100">
      <Container fluid>
        <Row>
          <Col
            sm={12}
            lg={4}
            md={4}
            className="content d-flex flex-column justify-content-center mb-5"
          >
            <div className="content">
              <h3>Discover Quick Links</h3>
              <p className="content-text">
                Explore our library's vast resources and services. Get quick
                access to information, catalogs, and more. Discover a world of
                knowledge at your fingertips. Peruse our library's comprehensive
                selection of resources and services. Access information swiftly,
                including catalogs and more. Engage in an expedition through a
                wealth of knowledge, readily accessible at your convenience.
              </p>
            </div>
          </Col>
          <Col md={8} lg={8} sm={12} className="badge-img d-flex">
            <Row>
              {BadgeData.map((item) => (
                <BadgeItem
                  text={item.text}
                  key={item.text}
                  link={item.link}
                  img={item.img}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function BadgeItem({ img, text, link }) {
  return (
    <Col md={4} lg={4} sm={6}>
      <div className="featured-block justify-content-center">
        <Link to={link} className="d-block">
          <div className="img">
            <img src={img} alt={text} />
          </div>
          <p className="badge-text text-center">{text}</p>
        </Link>
      </div>
    </Col>
  );
}
