/*
Clicking the Delete button calls the deleteElement function which passes the index of the element we want to remove.
The deleteElement function computes a new array filtering out the element by its position
and updating the array state variable to contain a new array without the element we filtered out.
Clicking the Add Element button invokes the addElement function which
computes a new array with a copy of the previous array spread at the beginning of the new array,
and adding a new random element at the end of the array.
*/

import React, { useState } from "react";
function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      <button className="btn btn-primary" onClick={addElement}>
        Add Element
      </button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className="btn btn-light"
              onClick={() => deleteElement(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;
