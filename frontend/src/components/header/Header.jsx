import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <header className="header-container">
      {!isHome && (
        <Link to="/" className="home-button">
          ホームに戻る
        </Link>
      )}
      <nav className="nav-bar">
        <ul className="nav-list">
          {isHome ? (
            <>
              <li className="nav-item">
                <a href="#facilities" className="nav-link">
                  施設
                </a>
              </li>
              <li className="nav-item">
                <a href="#news" className="nav-link">
                  お知らせ
                </a>
              </li>
              <li className="nav-item">
                <Link to="/calendar" className="nav-link">
                  空室確認
                </Link>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  お問い合わせ
                </a>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link to="/calendar" className="nav-link">
                空室確認
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
