import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth'
import { ADD_COMMENT } from '../../utils/mutations';
const user = Auth.getProfile();
const CommentForm = ({ postId }) => {
  const [formState, setFormState] = useState({
    commentText: '',
    commentAuthor: user.authenticatedPerson.username,
  });
  const [characterCount, setCharacterCount] = useState(0);

  // The useMutation hook returns an array, which includes our addComment function
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      console.log('postId:', postId); // Add this line to log the postId
      // We call the addComment function when the comment form submits, and give the variables argument needed to complete the query
      const { data } = await addComment({
        variables: { 
          postId: postId, commentText: formState.commentText, commentAuthor: formState.commentAuthor 
        }
      });
  
      setFormState({
        commentText: '',
        commentAuthor: user.authenticatedPerson.username,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText') {
      setFormState({
        commentText: value,
        commentAuthor: user.authenticatedPerson.username,
      });
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h5>Comment:</h5>
      <form
        onSubmit={handleFormSubmit}
        >
        <div>
          <textarea
            name="commentText"
            placeholder="Add your comment..."
            value={formState.commentText}
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
            ></textarea>
        </div>

        <div>
          <button type="submit">
            Add Comment
          </button>
        </div>
      </form>
            <p>
              Character Count: {characterCount}
            </p>
    </div>
  );
};

export default CommentForm;
