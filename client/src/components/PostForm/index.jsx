import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS } from '../../utils/queries';

const PostForm = () => {
  const [formState, setFormState] = useState({
    postText: '',
    postAuthor: '',
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
        postAuthor: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'postText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>

      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="postText"
            placeholder="Enter text ..."
            value={formState.postText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="postAuthor"
            placeholder="Name"
            value={formState.postAuthor}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Post
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default PostForm;
