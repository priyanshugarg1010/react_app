import React from "react";
import "./posts.scss";
import Post from "../../post/Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      userId: 1,
      name: "priyanshu harg",
      profilePic:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magnam velit magni perspiciatis debitis odio maiores ipsam expedita accusantium quaerat.",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      id: 2,
      name: "priyanshu",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magnam velit magni perspiciatis debitis odio maiores ipsam expedita accusantium quaerat.",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
