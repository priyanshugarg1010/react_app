import "./profile.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/295771/pexels-photo-295771.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://linkedIn.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://pinterest.com">
              <PinterestIcon fontSize="large" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Priyanshu</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>English</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
