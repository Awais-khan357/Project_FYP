import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import General from "./General";
import Special from "./Special";
import ManuScript from "./ManuScript";
import NewsPaper from "./NewsPaper";
import Serial from "./Serial";
import Personal from "./Personal";
import Orientation from "./Orientation";
import MiddleEast from "./MiddleEast";
import "./CollectionLinks.css";
export default function CollectionLinks() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(tabParam || "General");
  useEffect(() => {
    setSelectedContent(tabParam || "General");
  }, [tabParam]);

  const renderContent = () => {
    switch (selectedContent) {
      case "General":
        return <General />;
      case "Personal":
        return <Personal />;
      case "ManuScript":
        return <ManuScript />;
      case "Special":
        return <Special />;
      case "Oriental":
        return <Orientation />;
      case "MiddleEast":
        return <MiddleEast />;
      case "Serial":
        return <Serial />;
      case "NewsPaper":
        return <NewsPaper />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <div className="page-header py-4">
            <div className="py-5">
              <h1 className="text-white text-center mb-3">
                {`${selectedContent} Collection`}
              </h1>
            </div>
          </div>
        </Row>
        <Row className="justify-content-md-center mt-5">{renderContent()}</Row>
      </Container>
    </>
  );
}
