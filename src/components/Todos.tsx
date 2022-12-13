// type AppProps = {
//   children?: React.ReactNode; //Expplicitly after React 18
//   items: string[];
// };
import { useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

// const Todos: React.FC<AppProps> = (props) => {
// const Todos: React.FC<{
//   children?: React.ReactNode;
//   items: Todo[];
//   onRemoveTodo: (id: string) => void;
// }> = (props) => {
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
