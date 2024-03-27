import React, { useState, useEffect } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { KanbasState } from "../../store";
import * as client from "./client";

function ModuleList() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  // read from store, render whenever module changes
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const modules = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );

  const fetchModules = async (cid?: string) => {
    const modules = await client.findModulesForCourse(cid);
    dispatch(setModules(modules));
  };

  const handleAddModule = () => {
    client.createModule(cid, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    // delete from server, then delete from store with dispatch
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    fetchModules(cid);
  }, [cid]);

  return (
    <>
      <div className="container-fluid">
        <span>
          <button
            className="btn btn-success me-2"
            onClick={() => handleAddModule()}
          >
            Add
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => handleUpdateModule()}
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
          .filter((m: any) => m.course === cid)
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
                    onClick={() => handleDeleteModule(module._id)}
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
