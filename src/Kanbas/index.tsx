import { KanbasNavigation, KanbasNavModal } from "./Navigation";
import { CollapseNavToggle } from "./Courses//Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";

// import axios from "axios";
// import db from "./Database";

function Kanbas() {
  // const [course, setCourse] = useState({
  //   _id: "",
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  //   image: "../images/husky.jpg",
  // });

  // const COURSES_API = "http://localhost:4000/api/courses";

  // // courses state on the client side, re-rendered whenever the state changes
  // const [courses, setCourses] = useState<any[]>([]);
  // const findAllCourses = async () => {
  //   const response = await axios.get(COURSES_API);
  //   setCourses(response.data);
  // };

  // // fetch and render all courses from the server when the component mounts
  // useEffect(() => {
  //   findAllCourses();
  // }, []);

  // const addNewCourse = () => {
  //   setCourses([
  //     ...courses,
  //     { ...course, _id: new Date().getTime().toString() },
  //   ]);
  // };
  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1, marginLeft: "20px" }}>
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <KanbasNavModal /> <CollapseNavToggle />
          </nav>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account/*" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard />} />
            {/* temp. content for course:  */}
            {/* <Route path="Courses" element={<Courses courses={courses} />} /> */}
            <Route path="Courses/:cid/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
