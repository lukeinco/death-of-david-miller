const CommentList = ({ comments = [] }) => {
  console.log(comments);
  if (!comments.length) {
    return <h5>No Comments Yet</h5>;
  }

  return (
    <>
      <h3>
        Comments
      </h3>
      <div>
        {comments &&
          comments.map((comment) => (
            <div key={comment._id}>
              <div>
                
                <p><span id="italic">{comment.commentAuthor}: </span> {comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
