import CommentList from '../CommentList'
import CommentForm from '../CommentForm'

const PostList = ({ posts, title }) => {

  return (
    <div>
      <h2>{title}</h2>
      {posts &&
        posts.toReversed().map((post) => (
          <div key={post._id}>
            <h4>
              {post.postAuthor} <br />
              {post.createdAt}
            </h4>
            <div className='post-text'>
              <p>{post.postText}</p>
            </div>
            <CommentList comments={post.comments} />
            <CommentForm postId={post._id} />
          </div>
        ))}
    </div>
  );
};

export default PostList;
