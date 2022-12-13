import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {
  // USing Context instead
  // const [todos, setTodos] = useState<Todo[]>([]);
  // // const todos = [
  // //   new Todo('Learn JavaScript'),
  // //   new Todo('Learn TypeScript'),
  // //   new Todo('Learn React'),
  // // ];

  // const addingTodoHandler = (text: string) => {
  //   setTodos((prevTodos) => prevTodos.concat(new Todo(text)));
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  // };
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
