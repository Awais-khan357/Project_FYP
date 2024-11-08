const DownloadFile = ({ url, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  return (
    <>
      <button className="btn btn-danger" onClick={handleDownload}>
        Download {fileName}
      </button>
    </>
  );
};

export default DownloadFile;
