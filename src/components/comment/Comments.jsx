import React, { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      userId: 1,
      name: "priyanshu harg",
      profilePic:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magnam velit magni perspiciatis debitis odio maiores ipsam expedita accusantium quaerat.",
    },

    {
      id: 2,
      name: "priyanshu",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magnam velit magni perspiciatis debitis odio maiores ipsam expedita accusantium quaerat.",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} />
        <input type="text" placeholder="write a comment" />
        <button>send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
