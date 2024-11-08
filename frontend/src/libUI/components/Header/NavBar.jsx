import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import DropDown from "./DropDown";
export default function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="justify-content-center"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <DropDown
              title="Collection"
              items={[
                {
                  label: "General Collection",
                  page: "/collectionLink?tab=General",
                },
                {
                  label: "Special Collection",
                  page: "/collectionLink?tab=Special",
                },
                {
                  label: "Personal Collection",
                  page: "/collectionLink?tab=Personal",
                },
                {
                  label: "Manuscript Collection",
                  page: "/collectionLink?tab=ManuScript",
                },
                {
                  label: "Serial Collection",
                  page: "/collectionLink?tab=Serial",
                },
                {
                  label: "Newspaper Collection",
                  page: "/collectionLink?tab=NewsPaper",
                },
                {
                  label: "Oriental Collection",
                  page: "/collectionLink?tab=Oriental",
                },
                {
                  label: "Middle East Collection",
                  page: "/collectionLink?tab=MiddleEast",
                },
              ]}
            />
            <DropDown
              title="Services"
              items={[
                { label: "OPAC", page: "/servicesLink?tab=OPAC" },
                {
                  label: "Circulation Service",
                  page: "/servicesLink?tab=Circulation Services",
                },
                {
                  label: "Digital Library",
                  page: "/servicesLink?tab=Digital Library",
                },
                {
                  label: "SDI services",
                  page: "/servicesLink?tab=SDI Services",
                },
                {
                  label: "Assistive technology Room",
                  page: "/servicesLink?tab=Assertive technology",
                },
                {
                  label: "Union Catalogue",
                  page: "/servicesLink?tab=Union Catalog",
                },
                {
                  label: "Reader Advisory Service",
                  page: "/servicesLink?tab=Reader Advisory",
                },
                {
                  label: "Reference Service",
                  page: "/servicesLink?tab=Reference Services",
                },
              ]}
            />
            <Nav.Link as={Link} to="/facility">
              Facilities
            </Nav.Link>
            <DropDown
              title="Reasearch"
              items={[
                {
                  label: "Databases",
                  page: "http://www.digitallibrary.edu.pk/Resources.php",
                },
                {
                  label: "A to Z journals",
                  page: "http://journals.uop.edu.pk/",
                },
                {
                  label: "Open Acess Book",
                  page: "https://www.libgen.is/",
                },
                {
                  label: "Citation Management Software",
                  page: "/researchLink?tab=Citation Management Software",
                },
                {
                  label: "Data Analysis tools",
                  page: "/researchLink?tab=Data Analysis tool",
                },
                {
                  label: "Journal Citation Report",
                  page: "https://hjrs.hec.gov.pk/",
                },
                {
                  label: "Citation Manuals",
                  page: "https://www.mybib.com/tools/apa-citation-generator",
                },
                {
                  label: "Useful Links",
                  page: "http://www.digitallibrary.edu.pk/useful.php",
                },
              ]}
            />
            <DropDown
              title="Forms/Reservation"
              items={[
                {
                  label: "Student MemberShip Form",
                  page: "/formLink?tab=MemberShip",
                },
                {
                  label: "Book Purchase Form",
                  page: "/formLink?tab=Book Purchase",
                },
                // {
                //   label: "StudyRoom Form",
                //   page: "/formLink?tab=StudyRoom",
                // },
                {
                  label: "VPN Request Form",
                  page: "/formLink?tab=Vpn Request",
                },
                { label: "Wifi Password Form", page: "/formLink?tab=Wifi" },
              ]}
            />
            <DropDown
              title="GuideLines"
              items={[
                {
                  label: "Vpn GuideLines",
                  page: "/guideLine?tab=Vpn",
                },
                {
                  label: "PHD Theses GuideLines",
                  page: "/guideLine?tab=PHD Theses",
                },
                {
                  label: "MS Theses GuideLines",
                  page: "/guideLine?tab=MS Theses",
                },
                {
                  label: "BS Theses GuideLines",
                  page: "/guideLine?tab=BS Theses",
                },
                {
                  label: "Library HandBook GuideLines",
                  page: "/guideLine?tab=Library Handbook",
                },
              ]}
            />
            <DropDown
              title="About Us"
              items={[
                { label: "History", page: "/aboutLink?tab=History" },
                { label: "Introduction", page: "/aboutLink?tab=Introduction" },
                {
                  label: "Rules & Regulation",
                  page: "/aboutLink?tab=Rules Regulation",
                },
                { label: "Library Timing", page: "/aboutLink?tab=Timing" },
                { label: "Library Staff", page: "/aboutLink?tab=Staff" },
                { label: "Contact Us", page: "/aboutLink?tab=Contact" },
                { label: "FAQ", page: "/aboutLink?tab=Faq" },
              ]}
            />
            <Nav.Link as={Link} to="/events">
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/museum">
              Museum
            </Nav.Link>
            <Nav.Link as={Link} to="/virtualTour">
              Virtual Tour
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
