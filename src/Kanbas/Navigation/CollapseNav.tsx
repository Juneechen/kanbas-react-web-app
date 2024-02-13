import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function CollapseNav({
  links,
}: {
  links: { label: string; icon: JSX.Element }[];
}) {
  return (
    <>
      {/* <!-- collapse toggle menu  --> */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        {/* <!-- Toggle buttons for Kanbas and Course Navigation -->
            <!-- Kanbas Nav Modal toggle --> */}
        <button
          className="btn btn-primary navbar-toggler"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#navModal"
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* <!-- Course Nav Collapse toggle--> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#courseNav"
          aria-controls="courseNav"
          aria-expanded="false"
          aria-label="Toggle Course Navigation"
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </nav>
      {/* <!-- Kanbas Nav Modal--> */}
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
                <li>
                  <a href="/Kanbas/Account/Profile/screen.html">
                    <i className="fa fa-user" id="wd-account-icon"></i>Account
                  </a>
                </li>
                <li>
                  <a href="/Kanbas/Dashboard/screen.html">
                    <i className="fas fa-tachometer-alt"></i>Dashboard
                  </a>
                </li>
                <li className="wd-kanbas-nav-collapse-active">
                  <a href="/Kanbas/Courses/Home/screen.html">
                    <i className="fa fa-book"></i>Courses
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-calendar-alt"></i>Calendar
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-inbox"></i>Inbox
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-clock"></i>History
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-laptop"></i>Studio
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-sign-out-alt"></i>Commons
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-question-circle"></i>Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Course Nav Collapse --> */}
      <div className="collapse" id="courseNav">
        <ul className="wd-kanbas-nav-collapse card">
          <li className="wd-kanbas-nav-collapse-active">
            <a href="/Kanbas/Courses/Home/screen.html">Home</a>
          </li>
          <li>
            <a href="/Kanbas/Courses/Modules/screen.html">Modules</a>
          </li>
          <li>
            <a href="http://piazza.com">Piazza</a>
          </li>
          <li>
            <a href="#">Zoom</a>
          </li>
          <li>
            <a href="/Kanbas/Courses/Assignments/screen.html">Assignments</a>
          </li>
          <li>
            <a href="#">Quizzes</a>
          </li>
          <li>
            <a href="/Kanbas/Courses/Grades/screen.html">Grades</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
        </ul>
      </div>

      {/* <!-- end of collapse toggle menu  --> */}
    </>
  );
}
