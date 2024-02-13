import React from "react";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";

function AssignmentEditor() {
  const { courseId } = useParams();
  const { assignmentId } = useParams();
  const assignment = assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      {/* <!-- row 1: buttons --> */}
      <div className="d-flex">
        <div>{/* <!-- empty placeholder --> */}</div>
        <div className="flex-fill">
          <span className="float-end">
            <button className="btn btn-light me-2">
              <FaCheckCircle className="me-2" />
              Published
            </button>
            <button className="btn btn-light">
              <FaEllipsisV />
            </button>
          </span>
        </div>
      </div>

      <hr />

      <h5>Assignment Name</h5>
      <input value={assignment?.title} className="form-control mb-2" />
      <br />
      <textarea className="form-control">This assignment ...</textarea>
      <br />
      <div className="mt-4 container">
        <div className="row">
          <div className="col-3 wd-edit-label wd-edit-label">Points</div>
          <div className="col-9">
            <input
              className="form-control"
              type="number"
              value="100"
              min="0"
              max="100"
            />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-3 wd-edit-label">Assignment Group</div>
          <div className="col-9">
            <select className="form-select" id="assignment-group">
              <option value="Assignment">Assignment</option>
              <option value="Quiz">Quiz</option>
              <option value="Exam">Exam</option>
              <option value="Project">Project</option>
            </select>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-3 wd-edit-label">Display Grade as</div>
          <div className="col-9">
            <select className="form-select" id="grade-display-as">
              <option value="Percentage">Percentage</option>
            </select>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-3 wd-edit-label">Submission Type</div>
          <div className="col-9">
            <select className="form-select" id="assignment-submission-type">
              <option value="Online">Online</option>
              <option value="External Tool">External Tool</option>
            </select>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-3 wd-edit-label">Online Entry Options</div>
          <div className="col-9">
            <label>
              <input
                type="checkbox"
                name="wd-entry-options"
                id="wd-text-entry"
              />
              Text Entry
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="wd-entry-options"
                id="wd-website-url"
              />
              Website URL
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="wd-entry-options"
                id="wd-media-recordings"
              />
              Media Recordings
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="wd-entry-options"
                id="wd-student-annotations"
              />
              Student Annotations
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="wd-entry-options"
                id="wd-file-uploads"
              />
              File Uploads
            </label>
            <br />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-3 wd-edit-label">Assign</div>
          <div className="col-9">
            <div className="border rounded p-3">
              Due
              <br />
              <input
                className="form-control"
                name="wd-due-date"
                type="date"
                value="2021-01-01"
              />
              <br />
              Available From
              <br />
              <input
                className="form-control"
                name="wd-available-from"
                type="date"
                value="2021-01-01"
              />
              <br />
              Until
              <br />
              <input
                className="form-control"
                name="wd-available-until"
                type="date"
                value="2021-01-01"
              />
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>
      {/* buttons  */}
      <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-light float-end"
      >
        Cancel
      </Link>
    </div>
  );
}

export default AssignmentEditor;
