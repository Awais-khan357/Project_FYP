import { Container, Row, Col } from "react-bootstrap";
import tools from "./images/tools.png";
import Analysis from "./images/Analysis.png";
import support from "./images/support.png";
import skills from "./images/skills.png";
import news from "./images/news.png";
import corner from "./images/corner.png";
import "./CheckCard.css";

const BadgeData = [
  {
    id: 1,
    img: tools,
    text: "Access powerful tools that streamline & enhance your research workflow.",
    heading: "Reasearch Tools",
  },
  {
    id: 2,
    img: Analysis,
    heading: "UOP Reasearch Portal",
    text: "Unlock best research resources for university scholars and professionals.",
  },
  {
    id: 3,
    img: support,
    text: "Get expert guidance and personalized support for all your research needs.",
    heading: "Reasearch Support",
  },
  {
    id: 4,
    img: skills,
    text: "Develop essential skills to navigate and excel in the information age.",
    heading: "Info Skills",
  },
  {
    id: 5,
    img: news,
    text: "Stay informed with the latest updates and trends in library science.",
    heading: "LIS Bulletin",
  },
  {
    id: 6,
    img: corner,
    text: "A dedicated space for sharing insights and collaborative research projects.",
    heading: "Researcher Corner",
  },
];

export default function CheckCard() {
  return (
    <Container fluid className="team-area section-padding40 section-bg1">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="section-tittle text-center mb-105">
              <h2>Most amazing features</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {BadgeData.map((item) => (
            <CheckCardItem
              key={item.id}
              text={item.text}
              heading={item.heading}
              img={item.img}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
}

function CheckCardItem({ text, img, heading }) {
  return (
    <Col sm={6} md={4} lg={4}>
      <div className="single-cat">
        <div className="cat-icon">
          <img src={img} alt={text} />
        </div>
        <div className="cat-cap">
          <h5>{heading}</h5>
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
}
