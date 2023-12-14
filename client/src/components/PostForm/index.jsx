import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth'

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS } from '../../utils/queries';
const user = Auth.getProfile();

const PostForm = () => {
  const [formState, setFormState] = useState({
    postText: '',
    postAuthor: user.authenticatedPerson.username,
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    refetchQueries: [
      QUERY_POSTS,
      'getPosts'
    ]
  });


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formState));
    try {
      await addPost({
        variables: { ...formState },
      });

      setFormState({
        postText: '',
        postAuthor: user.authenticatedPerson.username,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText') {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'postText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>

      <form
        onSubmit={handleFormSubmit}
      >
        <div>
          <textarea
            name="postText"
            placeholder="Enter text ..."
            value={formState.postText}
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* <div>
          <input
            name="postAuthor"
            placeholder="Name"
            value={formState.postAuthor}
            onChange={handleChange}
          />
        </div> */}

        <div>
          <button type="submit">
            Post
          </button>
        </div>
        {error && (
          <div>
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default PostForm;
