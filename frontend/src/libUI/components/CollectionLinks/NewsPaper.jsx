import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export default function NewsPaper() {
  return (
    <Col md={8} sm={12} className="collection">
      <p>
        Punjab University Library has a huge archive of local newspapers. Local
        newspapers in Urdu, Punjabi and English are subscribed. Khaleej Times,
        an international newspaper is also acquired. When a volume of a journal
        or file of a newspaper is completed, it is got bound. The Library has
        maintained files from 1954 onward of Nawa-I-Waqt and Pakistan Times.
        Bound volumes of the journals are arranged on racks in classified order
        and fresh issues are displayed alphabetically by title. Journals and
        newspapers are not issued, but photocopy of the required articles is
        allowed under the rules
      </p>
      <p>
        <strong>
          <span>Subscribed Newspapers</span>
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
                <td>21</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Col>
  );
}
