import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export default function Serial() {
  return (
    <Col md={8} sm={12} className="collection">
      <p>
        There are 65200 bound volumes of journals on various disciplines both in
        foreign and local languages. Research oriented journals both local and
        foreign are subscribed with the approval of the Heads of University
        Teaching Departments.
      </p>
      <p>
        <strong>
          <span>Subscribed Journals</span>
        </strong>
      </p>
      <Row className="justify-content-md-center mt-5">
        <Col md={7}>
          <Table striped responsive className="border">
            <tbody>
              <tr>
                <td>Foreign Research Journals</td>
                <td>103</td>
              </tr>
              <tr>
                <td>Local (English)</td>
                <td>13</td>
              </tr>
              <tr>
                <td>Local (Urdu)</td>
                <td>14</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>30</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <p>
        <strong>
          <span>Donated Journals</span>
        </strong>
      </p>
      <Row className="justify-content-md-center mt-5">
        <Col md={7}>
          <Table striped responsive className="border">
            <tbody>
              <tr>
                <td>English</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Urdu</td>
                <td>160</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>360</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Col>
  );
}
