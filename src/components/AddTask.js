function AddTask() {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task"></input>
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input type="text" placeholder="Add Day and Time"></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" placeholder="Add Reminder"></input>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
}

export default AddTask;
