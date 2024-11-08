import { Link } from "react-router-dom";
import "./styles.css";

function Sidebar() {
  return (
    <div className="sidebar-bg sidebar p-2">
      <div className="m-2">
        <i className="bi bi-person-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">Admin Tahir</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <Link className="list-group-item py-2" to="/">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span>Dashboard</span>
        </Link>
        <Link className="list-group-item py-2 " to="/admin">
          <i className="bi bi-house fs-5 me-3"></i> <span>Home</span>
        </Link>
        <Link className="list-group-item py-2" to="/admin/Student">
          <i className="bi bi-table fs-5 me-3"></i> <span>Student Cards</span>
        </Link>
        <Link className="list-group-item py-2" to="/admin/VpnRequest">
          <i className="bi bi-people fs-5 me-3"></i> <span>VPN Request</span>
        </Link>
        <Link className="list-group-item py-2" to="/admin/WifiRequest">
          <i className="bi bi-people fs-5 me-3"></i> <span>Wifi Request</span>
        </Link>
        <Link className="list-group-item py-2" to="/admin/Events">
          <i className="bi bi-people fs-5 me-3"></i> <span>Events</span>
        </Link>
        <Link className="list-group-item py-2" to="/admin/AddEvent">
          <i className="bi bi-people fs-5 me-3"></i> <span>Add Events</span>
        </Link>
        <Link className="list-group-item py-2" to="/admin/Imageupload">
          <i className="bi bi-people fs-5 me-3"></i> <span>Add Images</span>
        </Link>
        <Link className="list-group-item py-2" to="/admin/Message">
          <i className="bi bi-people fs-5 me-3"></i> <span>Messages</span>
        </Link>
        <a className="list-group-item py-2" href="/admin/Login">
          <i className="bi bi-power fs-5 me-3"></i> <span>LogOut</span>
        </a>
        <a className="list-group-item py-2" href="/admin/Registration">
          <i className="bi bi-power fs-5 me-3"></i> <span>Registration</span>
        </a>
      </div>
    </div>
  );
}
export default Sidebar;
