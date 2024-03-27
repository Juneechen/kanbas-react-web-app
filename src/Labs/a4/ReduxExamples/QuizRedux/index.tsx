import { useSelector, useDispatch } from "react-redux";
import { incrementG, decreG } from "./quizReducer";
import { LabState } from "../../../store";

const QuizRedux = () => {
  const { g, j, m } = useSelector((state: LabState) => state.quizReducer);
  const o = useDispatch();
  return (
    <div>
      <h1>{g}</h1>
      <button onClick={() => o(incrementG())}>Q</button>
      <button onClick={() => o(decreG(g - m))}>P</button>
      <button onClick={() => o(incrementG())}>F</button>
      <button onClick={() => o(decreG(j))}>K</button>
    </div>
  );
};
export default QuizRedux;
