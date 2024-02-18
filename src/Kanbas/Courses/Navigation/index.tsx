import { Link, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];

function CourseNavigation({ courseName = "" }) {
  const { pathname } = useLocation();
  return (
    <ul className="d-none d-md-block wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}

function Breadcrumb({ courseName = "" }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const current_page = links.filter((link) => pathname.includes(link));
  const page = current_page[0];

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <HiMiniBars3 style={{ color: "#c70000" }} />
          <Link to="./">
            {courseId} {courseName}
          </Link>
        </li>
        <li className="breadcrumb-item active">{page}</li>
      </ol>
      <hr />
    </nav>
  );
}

function CollapseNavToggle() {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#courseNav"
        aria-controls="courseNav"
        aria-expanded="false"
        aria-label="Toggle Course Navigation"
      >
        <FaChevronDown />
      </button>
    </>
  );
}

function CollapseNav() {
  const { pathname } = useLocation();
  const { courseId } = useParams();
  return (
    <div className="collapse" id="courseNav">
      <ul className="wd-kanbas-nav-collapse card">
        {links.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link) ? "wd-active" : ""}
          >
            <Link to={`/Kanbas/Courses/${courseId}/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { CourseNavigation, Breadcrumb, CollapseNavToggle, CollapseNav };
