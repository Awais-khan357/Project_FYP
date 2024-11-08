import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Administrative from "./Administrative";
import Technical from "./Technical";
import Oriental from "./Oriental";
import ThesisDessertation from "./ThesisDessertation";
import "../Links.css";
const links = ["Administrative", "Technical", "Oriental", "ThesisDessertation"];
export default function SectionLinks() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(
    tabParam || "Administrative"
  );
  useEffect(() => {
    setSelectedContent(tabParam || "Administrative");
  }, [tabParam]);

  const renderContent = () => {
    switch (selectedContent) {
      case "Administrative":
        return <Administrative />;
      case "Technical":
        return <Technical />;
      case "Oriental":
        return <Oriental />;
      case "ThesisDessertation":
        return <ThesisDessertation />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Container fluid className="mt-5">
        <Row>
          <Col md={3}>
            <div className="nav-box">
              <h4>Services List</h4>
              <nav className="main-nav">
                <ul className="unstyled list-hover-slide">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={`/librarySection?tab=${encodeURIComponent(link)}`}
                    >
                      <li
                        className={`mt-2 ${
                          selectedContent === link ? "active" : ""
                        }`}
                      >
                        {link}
                      </li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>
          </Col>
          <Col md={9} className="border mb-3">
            {renderContent()}
          </Col>
        </Row>
      </Container>
    </>
  );
}
