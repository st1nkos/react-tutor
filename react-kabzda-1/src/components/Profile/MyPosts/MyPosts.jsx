import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It`s my first post!", likesCount: 11 },
    { id: 3, message: "blala", likesCount: 11 },
    { id: 4, message: "dadad", likesCount: 11 },
  ];

  let postElements = posts.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={s.posts}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
