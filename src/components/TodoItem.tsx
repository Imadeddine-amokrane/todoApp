import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<
  React.PropsWithChildren<{
    text: string;
    onRemoveTodo: () => void;
  }>
> = ({ text, onRemoveTodo }) => {
  // const removeHandler = (e: React.MouseEvent) => {};

  return (
    <li onClick={() => onRemoveTodo()} className={classes.item}>
      {text}
    </li>
  );
};

export default TodoItem;
