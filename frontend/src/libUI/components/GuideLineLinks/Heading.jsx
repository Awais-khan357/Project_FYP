import { Link } from "react-router-dom";
export default function Heading({ heading }) {
  return (
    <div
      className="p-3 text-center d-flex"
      style={{ boxShadow: "0px 0px 60px 21px rgba(0,0,0,0.1)" }}
    >
      <Link to="/">
        <h5> HOME</h5>
      </Link>
      &nbsp; <h5>| {heading}</h5>
    </div>
  );
}
