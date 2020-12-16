import React from "react";
import s from "./Post.module.css";
const Post = () => {
  return (
    <div>
      <div className={s.posts}>
        <div className={s.item}>
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
          Post 1
          <div>
            <span>Like</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
