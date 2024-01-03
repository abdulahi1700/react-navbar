import "./Navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../asset/logo.png";
import user from "../asset/user.jpeg";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav">
        <ul>
          <li>Dashboard</li>
          <li>Operational Activity</li>
          <li>Frieght forwards</li>
          <li>Carriers</li>
          <li>Vehicles</li>
          <li>Report</li>
        </ul>
      </div>
      <div className="rightSide">
        <div className="span1">
          <span>
            EN
            <KeyboardArrowDownIcon className="icons" />
          </span>

          <span>
            <NotificationsNoneIcon className="icons" />
          </span>
        </div>
      </div>
      <div className="user">
        <p>
          <h6>Abdullahi moha</h6>
          <img src={user} alt="" />
        </p>
      </div>
    </div>
  );
}

export default Navbar;
