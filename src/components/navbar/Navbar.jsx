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
import { AuthContext } from "../../context/authContext";
import zIndex from "@mui/material/styles/zIndex";

const Navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

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
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
