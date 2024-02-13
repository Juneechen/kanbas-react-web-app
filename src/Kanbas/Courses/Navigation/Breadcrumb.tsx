import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";

function Breadcrumb({
  currentPage = "Home",
  courseName = "",
}: {
  currentPage: string;
  courseName: string;
}) {
  const { courseId } = useParams();

  return (
    <nav aria-label="breadcrumb">
      <h6>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <HiMiniBars3 style={{ color: "#c70000" }} />
            <Link to="./">
              {courseId} {courseName}
            </Link>
          </li>
          <li className="breadcrumb-item active">{currentPage}</li>
        </ol>
      </h6>
    </nav>
  );
}

export default Breadcrumb;
