const DownloadButton = ({ url, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  return <button onClick={handleDownload}>Download {fileName}</button>;
};

export default DownloadButton;
