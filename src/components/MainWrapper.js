import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

function MainWrapper() {
  return (
    <div className="w-5/12 mx-auto shadow-md mt-20">
      <Form />
      <TodoList />
    </div>
  );
}

export default MainWrapper;
