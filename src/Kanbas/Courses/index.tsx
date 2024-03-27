import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { CourseNavigation, Breadcrumb, CollapseNav } from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

import * as client from "./client";

function Courses() {
  const { cid } = useParams();
  const [course, setCourse] = useState({ name: "a course" });

  const fetchCourse = async (id?: string) => {
    const course = await client.fetchCourseById(id);
    setCourse(course);
  };

  useEffect(() => {
    fetchCourse(cid);
  }, [cid]); // [cid] means that the effect will run whenever cid changes

  return (
    // <div>
    <>
      <CollapseNav />
      <Breadcrumb courseName={course?.name} />
      <div className="d-flex">
        <CourseNavigation courseName={course?.name} />
        <div
          // className="overflow-y-scroll position-fixed bottom-0 end-0"
          // style={{ left: "220px", top: "90px" }}
          className="flex-fill overflow-y-scroll flex-grow-1"
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Courses;
