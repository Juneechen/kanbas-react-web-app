import { Link, useLocation } from "react-router-dom";

function Status() {
  const { pathname } = useLocation();
  return (
    <>
      <h5>Course Status</h5>
      <hr />
      {/* <!-- buttons on top  --> */}
      <div className="d-flex mb-4">
        <button className="flex-fill btn btn-light">
          <i className="fas fa-ban me-2"></i>Unpublish
        </button>

        <button className="flex-fill btn btn-success">Published</button>
      </div>
      {/* links  */}
      <div className="d-flex flex-column">
        <button className="btn btn-light flex-fill text-start" type="button">
          Import Existing Content
        </button>
        <button
          className="btn btn-light flex-fill mt-2 text-start"
          type="button"
        >
          Import From Commons
        </button>
        <button
          className="btn btn-light flex-fill mt-2 text-start"
          type="button"
        >
          Choose Home Page
        </button>
        <button
          className="btn btn-light flex-fill mt-2 text-start"
          type="button"
        >
          New Announcement
        </button>
        <button
          className="btn btn-light flex-fill mt-2 text-start"
          type="button"
        >
          New Analytics
        </button>
      </div>

      <h5 className="mt-4">To Do</h5>
      <hr />
      <ul>
        <li className="list-group-item">
          <Link to={pathname}>Task 1</Link>
        </li>
        <li className="list-group-item">
          <Link to={pathname}>Task 2</Link>
        </li>
      </ul>

      <h5>Coming Up</h5>
      <hr />

      <ul>
        <li className="list-group-item">
          <Link to={pathname}>Lecture CS4550 at Sep 7 11:45am</Link>
        </li>
        <li className="list-group-item">
          <Link to={pathname}>Lecture CS5610 at Sep 11 6pm</Link>
        </li>
      </ul>
    </>
  );
}
export default Status;
