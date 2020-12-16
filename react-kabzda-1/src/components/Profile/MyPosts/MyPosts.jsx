import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts  = ()=>{
  return(
    <div>
    <div>
      My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?'  like="29 likes"/>
        <Post message='It`s my first post!' like="15 likes" />
      </div>
    </div>
  </div>
  );
}

export default MyPosts