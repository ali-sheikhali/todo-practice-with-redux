import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/reducer";
function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  const DeleteHandle = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="flex flex-col space-y-3 p-5">
      {todos.map((todo) => {
        return (
          <div className="border px-5 py-2 flex justify-between " key={todo.id}>
            {todo.id}
            {todo.title}
            <button
              type="submit"
              onClick={() => DeleteHandle(todo.id)}
              className="bg-red-500 text-white px-2 rounded-md"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
