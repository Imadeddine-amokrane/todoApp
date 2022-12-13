import React, { useState } from 'react';
import Todo from '../models/Todo';

type ctxTodosObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<ctxTodosObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

// const TodosContextProvider: React.FC<{ children?: React.ReactNode }> = (
const TodosContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [
  //   new Todo('Learn JavaScript'),
  //   new Todo('Learn TypeScript'),
  //   new Todo('Learn React'),
  // ];

  const addingTodoHandler = (text: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(text)));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const ctxValue: ctxTodosObj = {
    items: todos,
    addTodo: addingTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={ctxValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
