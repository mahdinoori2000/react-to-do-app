import InputTodo from './InputTodo';
import TodosList from './TodoList';
import { TodosProvider } from './TodoContext';

const TodosLogic = () => (
  <TodosProvider>
    <InputTodo />
    <TodosList />
  </TodosProvider>
);
export default TodosLogic;
