// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../features/tasks/tasksSlice';
import { TextField, Button } from '@mui/material';

const TaskForm = ({ currentTask, setCurrentTask }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setDueDate(currentTask.dueDate);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      dispatch(editTask({ id: currentTask.id, updatedTask: { title, description, dueDate } }));
    } else {
      dispatch(addTask({ id: Date.now(), title, description, dueDate, completed: false }));
    }
    setTitle('');
    setDescription('');
    setDueDate('');
    setCurrentTask(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextField type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <Button type="submit">{currentTask ? 'Edit Task' : 'Add Task'}</Button>
    </form>
  );
};

export default TaskForm;