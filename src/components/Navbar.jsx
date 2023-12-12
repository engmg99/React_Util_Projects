import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.appMode === "light" ? "light" : "dark"}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/React_Util_Projects">
          {props.headingTitle}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/React_Util_Projects"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/React_Util_Projects/about"
                state={{ data: props.appMode }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/React_Util_Projects/toDo">
                Todo List
              </Link>
            </li>
          </ul>
          {props.appMode === "light" ? (
            <FaSun onClick={props.toggleMode} />
          ) : (
            <FaMoon className="text-light" onClick={props.toggleMode} />
          )}
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  appMode: PropTypes.string,
  headingTitle: PropTypes.string,
  toggleMode: PropTypes.func,
};
export default Navbar;
