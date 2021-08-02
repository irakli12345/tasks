function AddTask() {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task"></input>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Task"></input>
      </div>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task"></input>
      </div>
    </form>
  );
}

export default AddTask;
