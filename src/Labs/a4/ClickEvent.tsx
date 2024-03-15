// declare a function to handle the event
function ClickEvent() {
  const hello = () => {
    alert("Hello World!");
  };
  const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
  };
  return (
    <div>
      <h2>Click Event</h2>
      <button onClick={hello}>Click Hello</button>
      {/* wrap in function if you need to pass parameters: */}
      <button onClick={() => lifeIs("Good!")}>Click Good</button>
      {/* wrap in {} if you need more than one line of code calling hello() calling lifeIs() */}
      <button
        onClick={() => {
          hello();
          lifeIs("Great!");
        }}
      >
        Click Hello 3
      </button>
    </div>
  );
}
export default ClickEvent;
