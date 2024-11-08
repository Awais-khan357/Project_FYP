import Heading from "./Heading";
import { Col } from "react-bootstrap";
import fulltext from "./fulltext.pdf";
import DownloadFile from "./DownloadFile";
const HandBookGuide = () => {
  const pdfUrl = fulltext;

  return (
    <Col md={8} className="mb-3">
      <div className="content">
        <Heading heading="HandBook Guidelines" />
        <h4 className="mt-4">HandBook Guidelines</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <DownloadFile url={pdfUrl} fileName="HandBook Guidelines" />
      </div>
    </Col>
  );
};

export default HandBookGuide;
