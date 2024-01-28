import { v4 } from "uuid";
import axios from "axios";
import { toast } from "react-toastify";

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const status = e.target[1].value;

    if (!title) {
      return alert("please add to title");
    }

    const newTodo = {
      title: title,
      status: status,
      id: v4(),
      date: new Date().toLocaleDateString(),
    };
    axios
      .post("http://localhost:3000/todos", newTodo)

      .then(() => setTodos((todos) => [newTodo, ...todos]))
      .catch(() => alert("error"));
    (e.target[0].value = ""), (e.target[1].value = "select");
    //toast.success(`"${title}" added successfully!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        placeholder="type your job..."
        type="text"
        className="form-control shadow"
      />

      <select className="form-select w-50 shadow">
        <option value="select">Select</option>
        <option value="important">Important</option>
        <option value="daily">Daily</option>
        <option value="job">Job</option>
      </select>

      <button type="submit" className="btn btn-warning shadow">
        Send
      </button>
    </form>
  );
};
export default Form;
