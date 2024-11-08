import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CheckCounter.css";

export default function CheckCounter() {
  const [projectCount, setProjectCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [bookCount, setBookCount] = useState(0);
  const [HoursCount, setHoursCount] = useState(0);

  useEffect(() => {
    const incrementCount = (startValue, endValue, setCount) => {
      const step = Math.ceil((endValue - startValue) / 10);
      let currentValue = 0;

      const intervalId = setInterval(() => {
        currentValue += step;
        if (currentValue >= endValue) {
          setCount(endValue);
          clearInterval(intervalId);
        } else {
          setCount(currentValue);
        }
      }, 100);
    };

    incrementCount(0, 40, setProjectCount);
    incrementCount(0, 23, setStaffCount);
    incrementCount(0, 300, setBookCount);
    incrementCount(0, 600, setHoursCount);
  }, []);

  return (
    <Container fluid className="counts">
      <Container>
        <Row>
          <CheckCounterItem
            Endvalue={projectCount}
            emoji={faFaceSmile}
            text="happy clients"
          />
          <CheckCounterItem
            Endvalue={HoursCount}
            emoji={faClock}
            text="Hours of Support"
          />
          <CheckCounterItem
            Endvalue={bookCount}
            emoji={faBookOpen}
            text="books"
          />
          <CheckCounterItem
            Endvalue={staffCount}
            emoji={faPersonDigging}
            text="staff"
          />
        </Row>
      </Container>
    </Container>
  );
}

function CheckCounterItem({ Endvalue, text, emoji }) {
  return (
    <Col md={3} lg={3} sm={12} className="mt-5">
      <div className="count-box">
        <span className="icon">
          <FontAwesomeIcon icon={emoji} />
        </span>
        <span className="text">{Endvalue}</span>
        <p>{text}</p>
      </div>
    </Col>
  );
}
