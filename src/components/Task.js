import React from 'react';
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description:', task.description);
    if (newDescription) {
      dispatch({ type: 'EDIT_TASK', payload: { id: task.id, description: newDescription } });
    }
  };

  return (
    <div>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Done'}</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;

