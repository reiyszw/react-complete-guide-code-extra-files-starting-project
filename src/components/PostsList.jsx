import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList(props) {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        {props.posts.map((post) => (
          <Post author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
