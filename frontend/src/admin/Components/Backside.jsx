import { useRef } from "react";
import html2canvas from "html2canvas";
import logo from "./logo.png";
import images from "./images.jpeg";
import "./Backside.css";

export default function Backside({ students }) {
  const cardRef = useRef(null);

  const handleDownload = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current, {
        scale: 4,
        useCORS: true,
        logging: true,
      })
        .then((canvas) => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png", 1.0);
          link.download = "student_card.png";
          link.click();
        })
        .catch((error) => {
          console.error("Error generating card:", error);
        });
    }
  };

  return (
    <div className="section">
      <div className="back mb-0" ref={cardRef}>
        <div className="head">
          <div className="col-12">
            <h3 className="head p-2">Student Details</h3>
          </div>
        </div>
        <div className="details-info">
          <p>Father Name &nbsp;: &nbsp;{students.father_name}</p>
          <p>
            Semester &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;
            {students.semester}th
          </p>
          <p>
            Session
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
            &nbsp;2024-25
          </p>
          <p>
            CNIC
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
            &nbsp;{students.cnic}
          </p>
          <p>
            Mobile No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;
            {students.phone}
          </p>
          <p className="first-text" style={{ height: "42px" }}>
            Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
            &nbsp;
            {students.address}
          </p>
        </div>
        <img src={logo} className="text-center" alt="logo" />
        <div className="cards-text">
          This card is property of university of peshawar and is not
          transferable, Report loss immediately to the Registrar/Provost
          university of Peshawar.
        </div>
        <div className="tail">
          If found, please drop in any mailbox. Return postage Guaranteed.
        </div>
        <img src={images} className="uop" alt="img" />
        <p className="footer">
          Central Library, University of Peshawar KPK
          <br />
          091 -9222207, Librarian@uop.edu.pk
        </p>
      </div>
      <button className="btn btn-primary mt-3 mx-3" onClick={handleDownload}>
        Download Back side
      </button>
    </div>
  );
}
