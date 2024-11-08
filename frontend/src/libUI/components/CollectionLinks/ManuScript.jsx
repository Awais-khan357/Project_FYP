import { Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export default function ManuScript() {
  return (
    <Col md={8} sm={12} className="collection">
      <p>
        The library of Peshawar University is known for its excellent regional
        collections, accessibility, and, most importantly, the professionalism
        of its workers. A card catalogue is used to search the Oriental
        Collection's printed volumes (including rare books). Manuscripts are
        catalogued in both the Oriental Collection librarian's handwritten
        register and the card catalogue system. The library is putting out a
        digital catalogue for manuscripts that will be available in-house. Work
        on the digitization of manuscripts is in progress and 10% of the
        manuscript collection has been digitized.
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Manuscript Section in the Central
        Library, University of Peshawar was established on1965. Total collection
        of this section is estimated to contain more than 696 titles. The
        languages of manuscripts are Arabic, Persian, Urdu, Pashto, Sanskritand
        other local languages. This is the largest collection of manuscripts in
        Khyber Pakhtunkhwa, Pakistan.
      </p>
      <p>
        <strong>
          <span>Manuscripts available in Central Library</span>
        </strong>
      </p>
      <Table striped responsive className="border">
        <thead>
          <tr>
            <th>S. No</th>
            <th>Subjects of the Manuscript </th>
            <th>Language</th>
            <th>Quantity</th>
            <th>Script</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>02</td>
            <td>Literature, Tafsir, Poetry</td>
            <td>Persian</td>
            <td>280</td>
            <td>Nastaleeq</td>
          </tr>
          <tr>
            <td>03</td>
            <td>Literature</td>
            <td>Sanskrit </td>
            <td>02</td>
            <td>Sanskrit</td>
          </tr>
          <tr>
            <td>04</td>
            <td>Poetry, Literature, Tafsir</td>
            <td>Urdu</td>
            <td>82</td>
            <td>Nastaleeq</td>
          </tr>
          <tr>
            <td>05</td>
            <td>Fiqa, Poetry, Literature</td>
            <td>Phusto</td>
            <td>32</td>
            <td>Nastaleeq</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
}
