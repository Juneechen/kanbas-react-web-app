import React, { useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

function Temp() {
  const [q, g] = useState(0); // q == 0
  const [x, j] = useState(1); // x == 1
  const [k, h] = useState(1); // k == 1
  const p = () => {
    h(k + x); // k == 1, x == 1, h(2) -> k == 2
    g(x); // x == 1, g(1) -> q == 1
    j(k); // k == 1, uses the old value of k because fn p is atomic and the new value of k is not yet updated
  };
  return (
    <div>
      q = {q} u = {x} k = {k}
      <button onClick={p}>M</button> {/* atomic */}
    </div>
  );
}

// function Temp() {
//   const [q, p] = useState({ w: "C", o: 25 });
//   // function e:
//   const e = () => {
//     p({ ...q, w: "K" });
//   };
//   // function u:
//   const u = (r: number) => {
//     p({ ...q, o: r });
//   };
//   return (
//     <div>
//       <h3>G: {q.w}</h3>
//       <h3>Y: {q.o}</h3>
//       <button onClick={e}>M</button>
//       <button onClick={() => u(30)}>H</button>
//     </div>
//   );
// }

export default Temp;

// G: C
// Y: 25
