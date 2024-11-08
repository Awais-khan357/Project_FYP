import DownloadButton from "./DownloadButton";

const GuideLinesPage = () => {
  const pdfUrl = "http://localhost:5173/fulltext.pdf";

  return (
    <div>
      <h1>BS Thesis Guidelines</h1>
      <DownloadButton url={pdfUrl} fileName="BS_Thesis_Guidelines.pdf" />
    </div>
  );
};

export default GuideLinesPage;
