import Modules from "../Modules";
import Status from "./Status";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-grow-1 me-2">
        <Modules />{" "}
      </div>

      <div className="d-none d-xl-block ms-4 me-4">
        <Status />
      </div>
    </div>
  );
}
export default Home;
