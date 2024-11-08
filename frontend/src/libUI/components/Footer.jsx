import "./footer.css";
import { Container, Row } from "react-bootstrap";
import FooterSection from "./FooterSection";
import FooterBar from "./FooterBar";
import MapSection from "./MapSection";

const footerData = [
  {
    id: "useful-links",
    label: [
      "Useful Link",
      "Library Home",
      "Online Public Access Catalog",
      "UOP Union Catalog",
      "UOP Theses repository",
      "Free Online Journals",
      "HEC Digital Library",
      "HEC E-books Library",
      "Contact Us",
    ],
    links: [
      "",
      "http://localhost:5173/",
      "http://opac.uop.edu.pk:1009/",
      "/servicesLink?tab=Union%20Catalog",
      "http://121.52.147.5:4000/",
      "https://doaj.org/",
      "http://www.digitallibrary.edu.pk/",
      "http://www.digitallibrary.edu.pk/books.html",
      "/aboutLink?tab=Contact",
    ],
  },
  {
    id: "forms",
    label: [
      "Forms",
      "Student Membership Form",
      "Staff Membership Form",
      "Book Purchase Form",
      "Vpn Request Form",
      "Wifi Form",
    ],
    links: [
      "",
      "/formLink?tab=MemberShip",
      "/formLink?tab=StaffMemberShip",
      "/formLink?tab=Book%20Purchase",
      "/formLink?tab=Vpn%20Request",
      "/formLink?tab=Wifi",
    ],
  },
];

export default function Footer() {
  return (
    <Container fluid className="footers text-white">
      <Row className="mb-5">
        {footerData.map((footerSection) => (
          <FooterSection key={footerSection.id} footerSection={footerSection} />
        ))}
        <MapSection />
      </Row>
      <FooterBar />
    </Container>
  );
}
