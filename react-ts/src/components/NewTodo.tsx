import { useRef } from "react";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
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
