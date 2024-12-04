import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';

import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';

const App = () => {
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <Router>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Task Management Dashboard</Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route
            path="/tasks"
            element={
              <>
                <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} />
                <TaskList setCurrentTask={setCurrentTask} />
              </>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Typography variant="h4">Welcome to the Task Management Dashboard</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => (window.location.href = '/tasks')}
                >
                  Go to Tasks
                </Button>
              </div>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
