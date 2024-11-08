import "./CardFront.css";
import sign from "./sign.png";
import back from "./back.png";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import Backside from "./Backside";

export default function CardFront({ students }) {
  const [barcodeUrl, setBarcodeUrl] = useState("");
  const cardRef = useRef(null);
  const cnic = students.cnic;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching barcode for CNIC: ${cnic.replace(/-/g, "")}`);
        const barcodeResponse = await axios.get(
          `https://bwipjs-api.metafloor.com/?bcid=code128&text=${cnic.replace(
            /-/g,
            ""
          )}&scale=3&includetext`
        );
        setBarcodeUrl(barcodeResponse.request.responseURL);
        console.log(
          `Barcode fetched successfully for CNIC: ${cnic.replace(/-/g, "")}`
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cnic]);

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

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

  const currentDate = getCurrentDate();

  return (
    <section>
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-md-4">
            <div className="card profile-card-3 border-1" ref={cardRef}>
              <div className="background-block">
                <img src={back} alt="back" className="background" />
              </div>
              <div className="profile-thumb-block">
                <img
                  src={students.image}
                  alt="profile-image"
                  className="profile"
                />
              </div>
              <div className="card-content">
                <div className="name">
                  {students
                    ? `${students.first_name} ${students.last_name}`
                    : "Loading..."}
                </div>
                <div>
                  <span className="card-desc">BS {students.program}</span>
                </div>
                <p className="program">
                  Bachelor <br />
                  2828
                </p>
                <div className="row">
                  <div className="col-md-12 barcode">
                    {barcodeUrl ? (
                      <img src={barcodeUrl} alt="Barcode" />
                    ) : (
                      "Loading barcode..."
                    )}
                  </div>
                  <div className="col-md-6 mt-2">
                    <div className="text">
                      Date of issue: {currentDate}
                      <br />
                      Valid Upto:{" "}
                      {(() => {
                        try {
                          return new Date(students.expirey_date)
                            .toISOString()
                            .split("T")[0];
                        } catch (error) {
                          return students.expirey_date;
                        }
                      })()}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img src={sign} alt="sign" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary mt-4 px-2"
              onClick={handleDownload}
            >
              Download Frontside
            </button>
          </div>
          <div className="col-md-4">
            <Backside students={students} />
          </div>
        </div>
      </div>
    </section>
  );
}
