import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer";

function Form() {
  
  const dispatch = useDispatch();

  const [title, setTitle] = useState("")

  const handleChange = (e)=>{
      setTitle(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(title));
    setTitle("")
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-3 w-8/12 mx-auto flex justify-around"
      >
        <label className="mt-2">To do: </label>
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          className="border border-black focus:outline-none rounded-md p-2 w-8/12"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-2 rounded-md"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
