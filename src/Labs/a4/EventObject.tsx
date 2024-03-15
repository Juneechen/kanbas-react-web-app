import React, { useState } from "react";
function EventObject() {
  const [event, setEvent] = useState(null);
  const handleClick = (e: any) => {
    // replace target with HTML to avoid circular reference
    e.target = e.target.outerHTML;
    delete e.view;
    // set event object so it can be displayed
    setEvent(e);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button
        id="event-button"
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </div>
  );
}
export default EventObject;
