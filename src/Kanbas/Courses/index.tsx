import { Navigate, Route, Routes, useParams } from "react-router-dom";

import { CourseNavigation, Breadcrumb, CollapseNav } from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const course = courses.find((course: any) => course._id === courseId);
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
