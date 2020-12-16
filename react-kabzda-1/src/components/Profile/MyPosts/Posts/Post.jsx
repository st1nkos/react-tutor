import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    

  return (
    <div>
      <div className={s.posts}>
        <div className={s.item}>
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
          {props.message}
          <div>
            {props.like}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
