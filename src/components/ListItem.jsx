import { useState } from "react";
import formatDate from "../helpers/formatDate";
import axios from "axios";

import Content from "./Content";
import EditMode from "./EditMode";
import { ToastContainer, toast } from "react-toastify";

const ListItem = ({ todo, setTodos, todos }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    const newStatus = e.target[0].value;
    const newTitle = e.target[1].value;
    //const newDate = e.target.date;
    //console.log(newStatus, newTitle, newDate);

    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, {
        title: newTitle,
        status: newStatus,
        //date: new Date().toLocaleString(),
      })
      .then(() => {
        const updated = {
          ...todo,
          status: newStatus,
          title: newTitle,
          //date: newDate,
        };

        const newTodos = todos.map((todo) =>
          todo.id === updated.id ? updated : todo
        );
        setTodos([...newTodos]);
      });

    //setTodos(newTodos);
    //console.log(newTodos);

    //console.log("eski", todo);
    //console.log("yeni", updated);

    setIsEditMode(false);
    toast.warning(`"${todo.title}" Updated`);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)

      .then(() =>
        setTodos((todos) => todos.filter((item) => item.id !== todo.id))
      );
    toast.error("Deleted");
  };

  //console.log(isEditMode);
  return (
    <div>
      <ToastContainer />
      <li className="relative p-3 list-group-item d-flex justify-content-between align-item-center gap-3">
        {!isEditMode ? (
          <Content
            todo={todo}
            setIsEditMode={setIsEditMode}
            handleDelete={handleDelete}
          />
        ) : (
          <EditMode
            todo={todo}
            setIsEditMode={setIsEditMode}
            handleEdit={handleEdit}
          />
        )}

        <span className="date">{formatDate(todo.date)}</span>
      </li>
    </div>
  );
};
export default ListItem;
