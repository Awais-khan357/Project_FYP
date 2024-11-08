import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import VpnGuide from "./VpnGuide";
import MsGuide from "./MsGuide";
import PhdGuide from "./PhdGuide";
import BSThesis from "./BSThesis";
import HandBookGuide from "./HandBookGuide";
import "../Links.css";
const links = [
  "Vpn",
  "PHD Theses",
  "MS Theses",
  "BS Theses",
  "Library Handbook",
];
export default function Guidelines() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(tabParam || "Vpn");
  useEffect(() => {
    setSelectedContent(tabParam || "Vpn");
  }, [tabParam]);

  const renderContent = () => {
    switch (selectedContent) {
      case "Vpn":
        return <VpnGuide />;
      case "PHD Theses":
        return <PhdGuide />;
      case "MS Theses":
        return <MsGuide />;
      case "BS Theses":
        return <BSThesis />;
      case "Library Handbook":
        return <HandBookGuide />;
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
              <h4>Guidelines List</h4>
              <nav className="main-nav">
                <ul className="unstyled list-hover-slide">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={`/guideLine?tab=${encodeURIComponent(link)}`}
                    >
                      <li
                        className={`mt-2 ${
                          selectedContent === link ? "active" : ""
                        }`}
                      >
                        {`${link} Guide`}
                      </li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>
          </Col>
          {renderContent()}
        </Row>
      </Container>
    </>
  );
}
