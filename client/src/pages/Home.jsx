import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import Auth from "../utils/auth"
import { QUERY_POSTS } from '../utils/queries';
const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(data);

  if (!Auth.loggedIn()) {
    return (
      <>
        <p id='plz'>Please<Link to="/"> Login</Link> </p>
      </>
    );
  } else{


  const userProfile = Auth.getProfile();
  const user = (userProfile && userProfile?.authenticatedPerson?.username === 'Orinthal Cooper');
  return (
    <main>
      {user ? (
        <div className='post-form'>
          Post:
          <PostForm />
        </div>
      ) : null}
      <div className='posts'>
        {loading ? (
          <div>Loading Posts . . . </div>
        ) : (
          <PostList
            posts={posts}
            title='Notes'
          />
        )}
      </div>
    </main>
  );
}};

export default Home;
