import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer"



const MyPosts = (props) => {

  // let posts = [
  //   { id: 1, message: "Hi, how are you?", likesCount: 12 },
  //   { id: 2, message: "It`s my first post!", likesCount: 11 },
  //   { id: 3, message: "blala", likesCount: 11 },
  //   { id: 4, message: "dadad", likesCount: 11 },
  // ];

  let postElements = props.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch(updateNewPostActionCreator(text));


  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
        <div className={s.posts}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
