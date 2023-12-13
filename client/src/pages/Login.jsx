import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [signupFormState, setSignupFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [addUser, { signupError, signupData }] = useMutation(ADD_USER);


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupFormState({
      ...signupFormState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };
  const signupHandleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(signupFormState);

    try {
      const { signupData } = await addUser({
        variables: { ...signupFormState },
      });
console.log(JSON.stringify(signupData));
      Auth.login(signupData.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="login-body">
        {(data || signupData) ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <>
            <form className='login-form' onSubmit={handleFormSubmit}>
              <h2>Sign In</h2>
              <input
                className="form"
                placeholder="Your username"
                name="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="form"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
            <form className='signup-form' onSubmit={signupHandleFormSubmit}>
              <h2>Sign Up</h2>
              <input
                className="form"
                placeholder="Your username"
                name="username"
                type="text"
                value={signupFormState.name}
                onChange={handleSignupChange}
              />
              <input
                className="form"
                placeholder="******"
                name="password"
                type="password"
                value={signupFormState.password}
                onChange={handleSignupChange}
              />
              <button
                className="form"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
          </>
        )}

        {error && (
          <div>
            {error.message}
          </div>
        )}
        {signupError && (
          <div>
            {signupError.message}
          </div>
        )}
      </div>
    </>

  );
};

export default Login;
