import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/facilities" className="nav-link">
              施設
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
