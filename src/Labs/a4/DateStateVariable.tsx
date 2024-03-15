import React, { useState } from "react";
import { start } from "repl";
function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());
  // const dateObjectToHtmlDateString = (date: Date) => {
  //   return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
  //     date.getMonth() + 1
  //   }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  // };
  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() < 10 ? 0 : ""}${date.getDate()}`;
  };

  return (
    <div>
      <h2>Date State Variables</h2>
      <h3>{JSON.stringify(startDate)}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <input
        className="form-control"
        type="date"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => {
          console.log(e.target.value);
          console.log(new Date(e.target.value));
          console.log(
            new Date(
              e.target.value + "T00:00:00." + new Date().getTimezoneOffset()
            )
          );
          // setStartDate(new Date(e.target.value));
          setStartDate(
            new Date(
              e.target.value + "T00:00:00." + new Date().getTimezoneOffset()
            )
          );
        }}
      />
    </div>
  );
}
export default DateStateVariable;
