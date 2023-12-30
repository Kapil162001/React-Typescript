import Todo from "../models/Todo";
import React, { useState } from "react";
type TodoContextObj = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};
export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    const todo = new Todo(text);
    setTodos((prevTodo) => {
      return prevTodo.concat(todo);
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };
  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
