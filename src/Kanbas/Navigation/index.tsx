import { Link, useLocation } from "react-router-dom";
import { FaBars, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
} from "react-icons/fa";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

const links = [
  { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
  { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
  { label: "Courses", icon: <FaBook className="fs-2" /> },
  { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
];

function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {link.icon} {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function KanbasNavModal() {
  const { pathname } = useLocation();
  return (
    <>
      {/* Kanbas Nav Modal toggle  */}
      <button
        className="btn btn-primary navbar-toggler"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#navModal"
      >
        <FaBars className="me-2" />
      </button>
      {/* Kanbas Nav Modal */}
      <div
        className="modal fade"
        id="navModal"
        tabIndex={-1}
        aria-labelledby="navModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- Content for the fullscreen window --> */}
              <ul className="wd-kanbas-nav-collapse">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className={pathname.includes(link.label) ? "wd-active" : ""}
                  >
                    <Link to={`/Kanbas/${link.label}`}>
                      {" "}
                      {link.icon} {link.label}{" "}
                    </Link>
                  </li>
                ))}{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { KanbasNavigation, KanbasNavModal };
