import getStatus from "../helpers/getStatus";

const Content = ({ todo, setIsEditMode, handleDelete }) => {
  return (
    <>
      {getStatus(todo.status)}
      <span>{todo.title}</span>
      <div className="btn-group">
        <button
          onClick={() => setIsEditMode(true)}
          className="btn btn-sm btn-primary"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="btn btn-sm btn-danger">
          Delete
        </button>
      </div>
    </>
  );
};

export default Content;
