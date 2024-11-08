import { Row, Col } from "react-bootstrap";
import table1 from "../images/table1.png";
import table2 from "../images/table2.png";
export default function digitalLibrary() {
  return (
    <>
      <p>
        <strong>
          <span>Digital Library</span>
        </strong>
      </p>
      <p>
        Higher Education Commission (HEC) Start National Digital Library Program
        in 2004 with aim to build the research culture and provide access to
        international scholarly resources. Keeping in view these objectives the
        HEC launched access to online resources with the collaboration of
        international network for the availability of scientific publications
        (INASP) known as Digital Library program. This program provides access
        to international and national scholarly publications based on electronic
        format, providing access to high quality peer-reviewed journals,
        databases, articles, and eBooks across a spacious range of disciplines.
      </p>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;In addition to the above resource, the
        central library also provides the facility to access the Publications of
        United Nation, International Monitory Fund (IMF) both in printed and in
        soft format. Digital Library Resources are categorized into
        twocategories: Basic Resources and Premium Resources.HEC taken token
        charges of the basic resources as mentioned in table 5and the charges of
        premium resources are given in table 04.
      </p>
      <Row>
        <Col md={12}>
          <img src={table1} alt="table1" className="img-fluid h-100" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12}>
          <img src={table2} alt="table2" className="img-fluid h-100" />
        </Col>
      </Row>
    </>
  );
}
