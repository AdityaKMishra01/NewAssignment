// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../features/tasks/tasksSlice';
import { List, ListItem, ListItemText, Checkbox, Button } from '@mui/material';

const TaskList = ({ setCurrentTask }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompletion = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Checkbox
            checked={task.completed}
            onChange={() => handleToggleCompletion(task.id)}
          />
          <ListItemText primary={task.title} secondary={task.description} />
          <Button onClick={() => setCurrentTask(task)}>Edit</Button>
          <Button onClick={() => handleDelete(task.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;