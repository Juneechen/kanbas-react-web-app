import ModuleList from "./List";
import "./index.css";

function Modules() {
  return (
    <div>
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
              <i className="fa fa-check-circle text-success me-2"></i>
              <select className="form-select">
                <option>Publish All</option>
              </select>
            </div>
          </button>
          <button className="btn btn-danger">+ Module</button>
          <button className="btn btn-light">
            <i className="fa fa-ellipsis-v"></i>
          </button>
        </span>
      </div>
      <hr />
      <ModuleList />
    </div>
  );
}

export default Modules;
