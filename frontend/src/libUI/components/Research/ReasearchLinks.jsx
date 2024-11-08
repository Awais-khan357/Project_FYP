import {useLocation} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import {useState, useEffect} from "react";
import Header from "../Header/Header";
import Citation from "./Citation";
import DataAnalysis from "./DataAnalysis";
import "../Links.css";

export default function ReasearchLinks() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(
    tabParam || "Databases"
  );
  useEffect(() => {
    setSelectedContent(tabParam || "Databases");
  }, [tabParam]);

  const renderContent = () => {
    switch (selectedContent) {
      case "Databases":
        return "http://www.digitallibrary.edu.pk/Resources.php";
      case "Citation Management Software":
        return <Citation />;
      case "Citation Manuals":
        return "https://www.mybib.com/tools/apa-citation-generator";
      case "A to Z Journals":
        return "http://journals.uop.edu.pk/";
      case "Journal Citation Report":
        return "https://hjrs.hec.gov.pk/";
      case "Data Analysis tool":
        return <DataAnalysis />;
      case "Useful Links":
        return "http://www.digitallibrary.edu.pk/useful.php";
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
              <h4>Research List</h4>
              <nav className="main-nav">
                <ul className="unstyled list-hover-slide">
                  <a href="http://www.digitallibrary.edu.pk/Resources.php">
                    <li>Databases</li>
                  </a>
                  <a href="https://www.mybib.com/tools/apa-citation-generator">
                    <li className="mt-2">Citation Manuals</li>
                  </a>
                  <a href="http://journals.uop.edu.pk/">
                    <li className="mt-2">A to Z Journals</li>
                  </a>
                  <a href="https://hjrs.hec.gov.pk/">
                    <li className="mt-2">Journal Citation Report</li>
                  </a>
                  <a href="http://www.digitallibrary.edu.pk/useful.php">
                    <li className="mt-2">Useful Links</li>
                  </a>
                </ul>
              </nav>
            </div>
          </Col>
          <Col md={7} className="mb-3">
            <p className="content">{renderContent()}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
