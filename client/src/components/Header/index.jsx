import { Link } from 'react-router-dom';
import AuthService from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };
  return (
    <header 
    >
      <div className='left'>
        <Link className="title-text" to="/">
          <h1 className="title">Orinthal's Desk </h1>
        </Link>
        <Link className="title-text" to="/play">
          <h3 className='html'>HTML Playground</h3>
        </Link>
      </div>
      {AuthService.loggedIn() ? (
                      <button id='login' className='login' onClick={logout}>
                      Logout
                    </button>
      ) : (
      <Link className="login" to="/login">
        <button id='login'>Login / Sign Up</button>
      </Link>
      )
      }
    </header>
  );
};

export default Header;
