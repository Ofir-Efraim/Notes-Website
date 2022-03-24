import React from "react";
import useStyles from "./PostsStyles";
import {Delete} from '@material-ui/icons'

const Posts = ({ posts, removePost }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <div className={classes.blogEntry} key={post._id}>
          <h2 className={classes.header}>{post.name}</h2>
          <h2 className={classes.header}>{post.title}</h2>
          <p className={classes.content}>{post.content}</p>
          <button className={classes.button} onClick={() => {
            removePost(post._id)
          }}><Delete/></button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
