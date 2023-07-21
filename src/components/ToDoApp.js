import Header from './Header';
import TodosLogic from './TodosLogic';

const Home = () => (
  <div className="todos">
    <Header>
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </Header>
    <TodosLogic />
  </div>
);

export default Home;
