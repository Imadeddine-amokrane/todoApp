import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';
// const NewTodo: React.FC<
//   React.PropsWithChildren<{ onAddTodo: (text: string) => void }>
// > = (props) => {
const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // This question mark addition here signals
    // to TypeScript that it tries to access value
    // and if that succeeds,
    // the entered value will be stored in enteredText
    // but if that fails,
    // null will be stored in enteredText.
    // const enteredText = todoInputRef.current?.value;
    // ####################################################
    // This special annotation tells TypeScript
    // that you know that this possibly nullish value
    // will never be null in this spot.
    // You should only use this annotation
    // if you are 100% sure that this can't be null.

    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" name="todoText" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
