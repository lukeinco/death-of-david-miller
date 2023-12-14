// import { useQuery } from '@apollo/client';
// import figlet from 'figlet';

// import PostList from '../components/PostList';
// import PostForm from '../components/PostForm';
// import Auth from "../utils/auth"
// import { QUERY_POSTS } from '../utils/queries';



// const Desk = () => {
//   const { loading, data } = useQuery(QUERY_POSTS);
//   const posts = data?.posts || [];
//   console.log(data);
//   const orin = figlet.text(
//     "Boo!",
//     {
//       font: "Ghost",
//       horizontalLayout: "default",
//       verticalLayout: "default",
//       width: 80,
//       whitespaceBreak: true,
//     },
//     function (err, data) {
//       if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//       }
//       console.log(data);
//     }
//   );
//   console.log('@@@@@@@@@@@@@@@@@@@@@@@@');
//   console.log(orin);
//   console.log('@@@@@@@111111111111111111!!!!!!!!!!!!!!');
//   if (!Auth.loggedIn()) {
//     return (
//       <>
// {orin}
//       </>
//     );
//   } else{


//   const userProfile = Auth.getProfile();
//   const user = (userProfile && userProfile?.authenticatedPerson?.username === 'Orinthal Cooper');
//   return (
//     <main>
//       {user ? (
//         <div className='post-form'>
//           Post:
//           <PostForm />
//         </div>
//       ) : null}
//       <div className='posts'>
//         {loading ? (
//           <div>Loading Posts . . . </div>
//         ) : (
//           <>
//           <PostList
//             posts={posts}
//             title='Notes'
//           />
          
//           </>
//         )}
//       </div>
//     </main>
//   );
// }};

// export default Desk;
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import figlet from 'figlet';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import Auth from '../utils/auth';
import { QUERY_POSTS } from '../utils/queries';

const Desk = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  const [asciiArt, setAsciiArt] = useState('');

  useEffect(() => {
    const generateAsciiArt = async () => {
      figlet.text(
        'Boo!',
        {
          font: 'Ghost',
          horizontalLayout: 'default',
          verticalLayout: 'default',
          width: 80,
          whitespaceBreak: true,
        },
        (err, data) => {
          if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
          }
          setAsciiArt(data);
          console.log(data);
        }
      );
    };

    generateAsciiArt();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render
console.log(asciiArt);
  if (!Auth.loggedIn()) {
    return <>
    <p>hi, please log in</p>{asciiArt}</>;
  } else {
    const userProfile = Auth.getProfile();
    const user =
      userProfile &&
      userProfile?.authenticatedPerson?.username === 'Orinthal Cooper';
    return (
      <main>
        {user ? (
          <div className="post-form">
            Post:
            <PostForm />
          </div>
        ) : null}
        <div className="posts">
          {loading ? (
            <div>Loading Posts . . . </div>
          ) : (
            <>
              <PostList posts={posts} title="Notes" />
            </>
          )}
        </div>
      </main>
    );
  }
};

export default Desk;