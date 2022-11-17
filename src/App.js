import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/Todos/TodoList';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
      {completedTodoCount > 0 && (
        <h2>{`You have complited ${completedTodoCount} ${
          completedTodoCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
