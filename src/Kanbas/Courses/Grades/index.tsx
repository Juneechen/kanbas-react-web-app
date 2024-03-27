// import { assignments, enrollments, grades, users } from "../../Database";
import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

function Grades() {
  const { assignments, enrollments, grades, users } = db;
  const { courseId } = useParams();
  const as = assignments.filter(
    (assignment: any) => assignment.course === courseId
  );
  const es = enrollments.filter(
    (enrollment: any) => enrollment.course === courseId
  );
  return (
    <div className="container-fluid">
      {/* buttons  */}
      <div className="d-flex">
        <div className="flex-fill"></div>
        <span className="float-end">
          <button className="btn btn-light me-2">
            <FaFileImport className="me-2" />
            Import
          </button>
          <button className="btn btn-light me-2">
            <div className="d-flex align-items-center">
              <FaFileExport className="me-2" />
              <select className="form-select">
                <option>Export</option>
              </select>
            </div>
          </button>
          <button className="btn btn-light me-2">
            <FaGear />
          </button>
        </span>
      </div>

      {/* Search Bar  */}
      <div className="row mt-2">
        <div className="col font-weight-bold">
          <label>Student Names</label>
          <br />
          <input className="form-control mt-2" placeholder="Search Students" />
        </div>
        <div className="col font-weight-bold">
          <label>Assignment Names</label>
          <br />
          <input
            className="form-control mt-2"
            placeholder="Search Assignments"
          />
          <br />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button className="btn btn-light text-muted mb-2">
            <i className="fa fa-filter me-2"></i>Apply Filters
          </button>
        </div>
      </div>

      {/* Grades Table  */}
      <div className="table-responsive mt-2">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {as.map((assignment: any) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {/* for each student enrolled in this course:  */}
            {es.map((enrollment: any) => {
              const user = users.find(
                (user: any) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {/* for each assignemnt in the course, find the grade for each enrolled student */}
                  {as.map((assignment: any) => {
                    const grade = grades.find(
                      (grade: any) =>
                        grade.student === user?._id &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
