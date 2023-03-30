import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lavalove</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <LightModeIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <AppsIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <EmailIcon />
        <PersonOutlineIcon />
        <NotificationsActiveIcon />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7245314/pexels-photo-7245314.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <span>Priyanshu Garg</span>
        </div>
      </div>
    </div>
  );
};

export default navbar;
