import ModuleList from "./List";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import "./index.css";

function Modules() {
  return (
    <>
      {/* <!-- row 1: Buttons on the top of this column --> */}
      <div className="d-flex">
        {/* <!-- placeholder --> */}
        <div className="flex-fill"></div>
        {/* <!-- buttons --> */}
        <span className="float-end">
          <button className="btn btn-light">Collapse All</button>
          <button className="btn btn-light">View Progress</button>
          <button className="btn btn-light">
            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-2" />
              <select className="form-select">
                <option>Publish All</option>
              </select>
            </div>
          </button>
          <button className="btn btn-danger">+ Module</button>
          <button className="btn btn-light">
            <FaEllipsisV />
          </button>
        </span>
      </div>
      <hr />
      <ModuleList />
    </>
  );
}

export default Modules;
