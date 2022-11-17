import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';
import { toggleTodoCompleted, deleteTodo } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

export function Todo({ todo }) {
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleTodoCompleted(id));
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodoHandler(todo.id)} />
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodoHandler(todo.id)} />
    </div>
  );
}
