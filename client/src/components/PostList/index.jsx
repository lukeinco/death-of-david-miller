import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {post.postAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this post on {post.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
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
