import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "",
    description: "",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "NodeJS Module",
    description: "Learn NodeJS",
    course: "CS5610",
  });

  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const MODULE_URL = "http://localhost:4000/a5/module";

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />
      <Link
        className="btn btn-primary"
        to={`${MODULE_URL}/name/${module.name}`}
      >
        Update Module Name
      </Link>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        value={module.description}
      />
      <Link
        className="btn btn-primary"
        to={`${MODULE_URL}/description/${module.description}`}
      >
        Update Module Description
      </Link>

      <hr />
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <Link
        className="btn btn-primary"
        to={`${ASSIGNMENT_URL}/title/${assignment.title}`}
      >
        Update Title
      </Link>

      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
        value={assignment.score}
      />
      <Link
        className="btn btn-primary"
        to={`${ASSIGNMENT_URL}/score/${assignment.score}`}
      >
        Update score
      </Link>

      <input
        type="checkbox"
        onChange={(e) => {
          setAssignment({ ...assignment, completed: e.target.checked });
        }}
        checked={assignment.completed}
      />
      <Link
        className="btn btn-primary"
        to={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
      >
        Update Completed Status
      </Link>
      <hr />

      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment">Get Assignment</a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title">Get Title</a>
    </div>
  );
}
export default WorkingWithObjects;
