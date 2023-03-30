import "./leftBar.scss";
import GroupIcon from "@mui/icons-material/Group";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MissedVideoCallOutlinedIcon from "@mui/icons-material/MissedVideoCallOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";

const leftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/7245314/pexels-photo-7245314.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <span>garg</span>
          </div>
          <div className="item">
            <Person2OutlinedIcon />
            <span>person</span>
          </div>
          <div className="item">
            <GroupIcon />
            <span>friends</span>
          </div>
          <div className="item">
            <StorefrontOutlinedIcon />
            <span>market</span>
          </div>
          <div className="item">
            <PlayCircleFilledWhiteOutlinedIcon />
            <span>watch</span>
          </div>
          <div className="item">
            <TimelineIcon />
            <span>memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <SportsEsportsIcon />
            <span>gaming</span>
          </div>
          <div className="item">
            <CalendarMonthOutlinedIcon />
            <span>events</span>
          </div>
          <div className="item">
            <CollectionsOutlinedIcon />
            <span>gallery</span>
          </div>
          <div className="item">
            <EmailOutlinedIcon />
            <span>messages</span>
          </div>
          <div className="item">
            <MissedVideoCallOutlinedIcon />
            <span>videos</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>extra</span>
          <div className="item">
            <PaidOutlinedIcon />
            <span>donations</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default leftBar;
