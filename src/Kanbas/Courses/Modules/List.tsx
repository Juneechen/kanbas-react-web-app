import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid">
        <span>
          <button
            className="btn btn-success me-2"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </span>
        <input
          className="form-control mt-2"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="form-control mt-2"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </div>
      <hr />
      {/* modules group  */}
      <ul className="list-group wd-modules">
        {/* <!-- CRUD buttons here --> */}

        {/* each module  */}
        {modules
          .filter((m: any) => m.course === courseId)
          .map((module: any, index: any) => (
            <li
              key={index}
              className="list-group-item"
              // onClick={() => dispatch(setModule(module))}
            >
              {/* module name  */}
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success ms-2" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                </span>
              </div>
              <p>{module.description}</p>
              {/* module items  */}
              {/* only display items of currently selected module
              {selectedModule._id === module._id && (
                <ul className="list-group ">
                  {module.lessons?.map((lesson) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success ms-2" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
