import React from 'react';
import styles from './TodoForm.module.css';
import { v4 } from 'uuid';
import { Button } from '../UI/Button';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

export function TodoForm() {
  const dispatch = useDispatch();
  const [todos, setTodos] = React.useState('');

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todos,
      isComplited: false,
    };
    dispatch(addTodo(todo));
    setTodos('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={todos}
          placeholder="Enter new todo"
          onChange={(e) => setTodos(e.target.value)}
        />
        <Button type="submite" title="Submite" onClick={() => addTodoHandler()}>
          Submite
        </Button>
      </form>
    </div>
  );
}
