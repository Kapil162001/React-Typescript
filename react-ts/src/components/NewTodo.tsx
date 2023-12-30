import { useRef, useContext } from "react";
import { TodoContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const todoInputRef = useRef<HTMLInputElement>(null);
  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(enteredText);
    todoInputRef.current!.value = "";
  };
  return (
    <form className={classes.form} onSubmit={addTodo}>
      <label htmlFor="text">Todo Text</label>
      <input id="text" type="text" ref={todoInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default NewTodo;
