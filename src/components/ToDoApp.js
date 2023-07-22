import './ToDoApp.css';
import TodosLogic from './TodoLogic';

function Home() {
  return (
    <div className="todos">
      <header>
        <h1>todos</h1>
        <p>This is a to do list app where you can store your tasks</p>
      </header>
      <TodosLogic />
    </div>
  );
}
export default Home;
