import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const stories = [
  {
    id: 1,
    name: "Garage",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Garage",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Garage",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Garage",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="Stories">
      <div className="story">
        <img src={currentUser.profilePic} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
