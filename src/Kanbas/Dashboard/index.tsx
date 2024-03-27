import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as client from "../Courses/client"; // separate interaction with server into client.ts

function Dashboard() {
  const [courses, setCourses] = useState<any[]>([]); // <> specifies the type of the state
  const [course, setCourse] = useState<any>({});

  // fetch all courses from the server
  const fetchAllCourses = async () => {
    const courses = await client.fetchAllCourses(); // returns res.data -> array of courses
    setCourses(courses);
  };
  // post a new course to the server
  const createCourse = async () => {
    const newCourse = await client.createCourse(course); // POST to server, create new course
    setCourses([newCourse, ...courses]); // render the new course on the screen
  };

  // delete a course from the server
  const deleteCourse = async (id: string) => {
    await client.deleteCourse(id); // DELETE from server, returns 204 (no content)
    setCourses(courses.filter((course) => course._id !== id)); // render the updated list of courses
  };

  // update a course on the server
  const updateCourse = async () => {
    await client.updateCourse(course); // PUT to server, update course
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  // useEffect runs after the first render and after every update
  useEffect(() => {
    fetchAllCourses();
  }, []);

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
        {/* <button onClick={createCourse}>Add</button> */}
        <button
          className="btn btn-success mb-2"
          onClick={() => {
            createCourse();
            // console.log(JSON.stringify(courses, null, 2));
          }}
        >
          Add
        </button>
        <button
          className="btn btn-primary mb-2"
          onClick={() => {
            updateCourse();
            // console.log(JSON.stringify(courses, null, 2));
          }}
        >
          Update
        </button>
      </div>
      <h2>Published Courses ({courses.length})</h2> <hr />
      {/* Course Cards  */}
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((c: any) => (
            <div key={c._id} className="col" style={{ width: 300 }}>
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
                    to={`/Kanbas/Courses/${c._id}`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {c.name}
                    <br />
                    <br />
                    <button
                      className="btn btn-primary"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(c);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(event) => {
                        // prevent the Link's default behavior to navigate to Course Screen:
                        event.preventDefault();
                        deleteCourse(c._id);
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
