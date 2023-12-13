import { Link } from 'react-router-dom';

const Header = () => {
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
      <Link className="login" to="/login">
        <button id='login'>login</button>
      </Link>
    </header>
  );
};

export default Header;
