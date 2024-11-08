import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import styles from "./FormsLink.module.css";
import BookPurchase from "./BookPurchase";
import MemberShipForm from "./MemberShipForm";
import VpnForm from "./VpnForm";
import WifiForm from "./WifiForm";
import StaffMemberShip from "./StaffMemberShip";
export default function FormsLink() {
  const location = useLocation();
  const tabParam = new URLSearchParams(location.search).get("tab");
  const [selectedContent, setSelectedContent] = useState(
    tabParam || "Book Purchase"
  );
  useEffect(() => {
    setSelectedContent(tabParam || "Book Purchase");
  }, [tabParam]);
  const renderContent = () => {
    switch (selectedContent) {
      case "Book Purchase":
        return <BookPurchase />;
      case "MemberShip":
        return <MemberShipForm />;
      case "StaffMemberShip":
        return <StaffMemberShip />;
      case "Vpn Request":
        return <VpnForm />;
      case "Wifi":
        return <WifiForm />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <Container fluid className={styles.back}>
        <Row>
          <div className={`py-4 ${styles.formHeader}`}>
            <div className="py-5">
              <h1 className="text-white text-center mb-3">
                {`${selectedContent} Form`}
              </h1>
            </div>
          </div>
        </Row>
        <Row className="justify-content-md-center mt-5">
          <Col md={7} className={styles.background}>
            {renderContent()}
          </Col>
        </Row>
      </Container>
    </>
  );
}
