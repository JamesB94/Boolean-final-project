import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="nav-bar">
        <div className="Logo">
          <h1>DoneNest</h1>
        </div>
        <div className="midBar">
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/Goals" className="nav-link">
                GOALS
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" className="nav-link">
                HELP
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="logOut">
          <button>Log Out</button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
