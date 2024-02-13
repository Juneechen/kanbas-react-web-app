import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation(); // destructs the pathname from useLocation()
  return (
    <nav className="nav nav-tabs mt-2">
      {/* checks to see if the URL contains either a3, hello, or Kanbas to then add the active class to highlight the correct tab */}
      <Link
        to="/Labs/a3"
        className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
      >
        A3
      </Link>
      <Link
        to="/Kanbas"
        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
      >
        Kanbas
      </Link>
      <Link
        to="/hello"
        className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}
      >
        Hello
      </Link>
    </nav>
  );
}

export default Nav;
