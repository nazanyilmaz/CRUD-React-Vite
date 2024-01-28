import { useEffect, useState } from "react";
import Form from "./components/form";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Loader";
import ListItem from "./components/ListItem";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPageCount, setMaxPageCount] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/todos", {
        params: {
          _per_page: 3,
          _page: page,
        },
      })

      .then((res) => {
        setMaxPageCount(res.data.pages);
        setTodos(res.data.data);
      })
      .catch((err) => alert("error"));
  }, [page]);

  return (
    <div className="container p-3 p-md-5">
      <marquee className="text-warning text-center fs-5 fw-4">
        **CRUD-App**
      </marquee>
      <Form setTodos={setTodos} />

      <ul className="list-group">
        {!todos && <Loader />}
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>

      <div className="d-flex justify-content-between my-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary"
        >
          {"< Back"}
        </button>

        <span>{page}</span>

        <button
          disabled={page === maxPageCount}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary"
        >
          {" Next >"}
        </button>
      </div>
    </div>
  );
}

export default App;
