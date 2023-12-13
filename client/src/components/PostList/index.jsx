const PostList = ({ posts, title }) => {

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id}>
            <h4>
              {post.postAuthor} <br />
              <span>
                had this post on {post.createdAt}
              </span>
            </h4>
            <div>
              <p>{post.postText}</p>
            </div>
            <CommentList comments={post.comments} />
            <CommentForm PostId={post._id} />
          </div>
        ))}
    </div>
  );
};

export default PostList;
