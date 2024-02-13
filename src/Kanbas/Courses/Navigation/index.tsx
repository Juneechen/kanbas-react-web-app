import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

import "./index.css";

function CourseNavigation({ courseName = "" }) {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const { pathname } = useLocation();

  return (
    <div className="container-fluid" style={{ margin: "20px" }}>
      {links.map(
        (link) =>
          pathname.includes(link) && (
            <Breadcrumb courseName={courseName} currentPage={link} />
          )
      )}

      <hr />
      <ul className="wd-navigation">
        {links.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link) ? "wd-active" : ""}
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseNavigation;
