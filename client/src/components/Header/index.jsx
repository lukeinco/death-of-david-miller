import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <Link className="title-text" to="/">
          <h1 className="title">The strange death of David Miller</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
