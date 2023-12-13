import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

import { QUERY_POSTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
      <div className='post-form'>
        <PostForm />
      </div>
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
};

export default Home;
