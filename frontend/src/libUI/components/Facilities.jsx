import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header/Header";
import "./Facilities.css";
import first from "./images/first.jpg";
import second from "./images/second.jpg";
import third from "./images/third.jpg";
export default function Facilities() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <div className="facility-page py-4">
            <div className="py-5">
              <h1 className="text-white text-center mb-3">
                Library Facilities
              </h1>
            </div>
          </div>
        </Row>
        <Row className="px-5 mt-5">
          <Col>
            <Row>
              <Col md={7} lg={7}>
                <p>
                  <strong>
                    <span>1. Internet Lab</span>
                  </strong>
                </p>
                <p>
                  This service is offered to all library users through file
                  maker pro LMS software The resources borrowed from the library
                  shall be returned on or before the due date during library
                  working hours. Its terms and conditions are mentioned in
                  Library Rules and Regulations.
                </p>
              </Col>
              <ImageComp img={first} alt="first" />
            </Row>
            <Row>
              <Col md={7} lg={7}>
                <p>
                  <strong>
                    <span>2. Study Cabin</span>
                  </strong>
                </p>
                <p>
                  It provides open access to all library users. They can browse,
                  read the any references in the library. It helps users to make
                  full use of the resources available in the central library..
                </p>
              </Col>
              <ImageComp img={second} alt="second" />
            </Row>
            <Row>
              <Col md={7} lg={7}>
                <p>
                  <strong>
                    <span>3. Discussion Room</span>
                  </strong>
                </p>
                <p>
                  The magazines and journals are made available to the users.
                  all the users have to read in library only.
                </p>
              </Col>
              <ImageComp img={third} alt="third" />
            </Row>
            <Row>
              <Col md={7} lg={7}>
                <p>
                  <strong>
                    <span>2. Study Cabin</span>
                  </strong>
                </p>
                <p>
                  It provides open access to all library users. They can browse,
                  read the any references in the library. It helps users to make
                  full use of the resources available in the central library..
                </p>
              </Col>
              <ImageComp img={second} alt="first" />
            </Row>
            <Row>
              <Col md={7} lg={7}>
                <p>
                  <strong>
                    <span>2. Study Cabin</span>
                  </strong>
                </p>
                <p>
                  It provides open access to all library users. They can browse,
                  read the any references in the library. It helps users to make
                  full use of the resources available in the central library..
                </p>
              </Col>
              <ImageComp img={first} alt="first" />
            </Row>
            <Row>
              <Col md={7} lg={7}>
                <p>
                  <strong>
                    <span>2. Study Cabin</span>
                  </strong>
                </p>
                <p>
                  It provides open access to all library users. They can browse,
                  read the any references in the library. It helps users to make
                  full use of the resources available in the central library..
                </p>
              </Col>
              <ImageComp img={first} alt="first" />
            </Row>
            <p>
              <strong>
                <span>7. News-Paper clipping service</span>
              </strong>
            </p>
            <p>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                All newspapers are containing very important news in special
                edition on various subjects which are very useful to the
                readers. Depending on the usefulness of the information
                available in the newspaper, so that they are able to read at
                their convenient time.
              </span>
            </p>
            <p>
              <strong>
                <span>6. Wifi</span>
              </strong>
            </p>
            <p>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Stay connected seamlessly with high-speed Wi-Fi, enabling
                uninterrupted study and research from anywhere in the library.
              </span>
            </p>
            <p>
              <strong>
                <span>8. Printing</span>
              </strong>
            </p>
            <p>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Library conducts orientation programmes for new users. beginning
                of the year. It is to enable them to use library resources
                effectively.
              </span>
            </p>
            <p>
              <strong>
                <span>9. Photocopying</span>
              </strong>
            </p>
            <p>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                The Photocopy service is provided to the users in the library,
                both students as well as faculty members. It is located at the
                central library.
              </span>
            </p>
            <p>
              <strong>
                <span>10. Scanning</span>
              </strong>
            </p>
            <p>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;The entire library is Wi-Fi enabled; users can use their
                configuration laptops to access in the central library.
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function ImageComp({ img, alt }) {
  return (
    <Col md={{ span: 4, offset: 1 }} lg={4}>
      <img src={img} alt={alt} className="img-fluid first" />
    </Col>
  );
}
