import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import openAcess from "../images/openAcess.png";
import catalog from "../images/catalog.png";
import education from "../images/education.png";
import thesis from "../images/thesis.png";
import "./AboutSideLink.css";

const BadgeData = [
  { img: openAcess, text: "Open Acess Journals" },
  { img: education, text: "HEC Corner" },
  { img: catalog, text: "Union Catalog" },
  { img: thesis, text: "Open Acess Thesis" },
];

export default function AboutSideLink() {
  return (
    <Row>
      <h4 className="text-center quick-head">Quick Link</h4>
      {BadgeData.map((item) => (
        <QuickLink text={item.text} key={item.text} img={item.img} />
      ))}
    </Row>
  );
}
function QuickLink({ img, text }) {
  return (
    <Col md={12} lg={12} sm={12} className="mt-2 mb-2">
      <div className="Link-block justify-content-center">
        <Link to="/newsEvent" className="d-block">
          <div className="img">
            <img src={img} alt={text} />
          </div>
          <p className="Link-text text-center">{text}</p>
        </Link>
      </div>
    </Col>
  );
}
