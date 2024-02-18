import { KanbasNavigation, KanbasNavModal } from "./Navigation";
import { CollapseNavToggle } from "./Courses//Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
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
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          {/* temp. content for course:  */}
          <Route path="Courses" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
