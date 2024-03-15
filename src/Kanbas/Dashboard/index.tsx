import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: any) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <div className="container-fluid mb-4">
        <h5>Course</h5>
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control mb-2"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control mb-2"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        {/* <button onClick={addNewCourse}>Add</button> */}
        <button
          className="btn btn-success mb-2"
          onClick={() => {
            addNewCourse();
            // console.log(JSON.stringify(courses, null, 2));
          }}
        >
          Add
        </button>
      </div>
      <h2>Published Courses ({courses.length})</h2> <hr />
      {/* Course Cards  */}
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  //   src={`/images/${course.image}`}
                  src="/images/husky.jpg"
                  className="card-img-top"
                  style={{ height: 150 }}
                  alt="..."
                />
                <div className="card-body">
                  {/* Title + Text  */}
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                    <br />
                    <br />
                    <button
                      className="btn btn-primary"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(event) => {
                        // prevent the Link's default behavior to navigate to Course Screen:
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  </Link>
                  {/* Go button */}
                  {/* <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go{" "}
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
