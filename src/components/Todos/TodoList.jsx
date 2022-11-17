import styles from './TodoList.module.css';
import { Todo } from './Todo';
import { useSelector } from 'react-redux';

export function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className={styles.todoListContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
