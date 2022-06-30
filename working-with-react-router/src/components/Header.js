import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="welcome">Welcome</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
