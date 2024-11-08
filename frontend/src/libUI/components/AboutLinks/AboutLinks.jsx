import { useLocation } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import History from "./History";
import Contact from "./Contact";
import Staff from "./Staff";
import Timing from "./Timing";
import Rules from "./Rules";
import FAQ from "./FAQ";
import Introduction from "./Introduction";
import Footer from "../Footer";
import "./AboutLinks.css";

export default function AboutLinks() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(tabParam || "History");
  useEffect(() => {
    setSelectedContent(tabParam || "History");
  }, [tabParam]);

  const renderContent = () => {
    switch (selectedContent) {
      case "History":
        return <History />;
      case "Contact":
        return <Contact />;
      case "Staff":
        return <Staff />;
      case "Timing":
        return <Timing />;
      case "Faq":
        return <FAQ />;
      case "Rules Regulation":
        return <Rules />;
      case "Introduction":
        return <Introduction />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <div className="about-header py-4">
            <div className="py-5">
              <h1 className="text-white text-center mb-3">
                {`${selectedContent}`}
              </h1>
            </div>
          </div>
        </Row>
        <Row className="justify-content-md-center mt-5 aboutUs">
          {renderContent()}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
