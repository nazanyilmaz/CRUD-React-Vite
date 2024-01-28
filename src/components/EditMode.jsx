import React from "react";

const EditMode = ({ todo, setIsEditMode, handleEdit }) => {
  //console.log(todo);
  return (
    <form
      onSubmit={handleEdit}
      className="d-flex justify-content-between align-items-center w-100 gap-3"
    >
      <select defaultValue={todo.status} className="form-select shadow w-25">
        <option value="select">Select</option>
        <option value="important">Important</option>
        <option value="daily">Daily</option>
        <option value="job">Job</option>
      </select>

      <input
        defaultValue={todo.title}
        className="form-control w-50 shadow"
        type="text"
      />

      <div className="btn-group">
        <button type="submit" className="btn btn-success btn-sm">
          Save
        </button>
        <button
          type="button"
          onClick={() => setIsEditMode(false)}
          className="btn btn-secondary btn-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditMode;
