const tasks = [
  { text: "Bugidibu" },
  { text: "Ha ha yu dead" },
  { text: "Cocoa Latte" },
  { text: "Yass queen" },
];
function Tasks() {
  return (
    <>
      {tasks.map((task) => {
        <h3>task.text</h3>;
      })}
    </>
  );
}

export default Tasks;
