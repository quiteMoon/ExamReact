import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Task List
      </Typography>

      {tasks.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No tasks available. Please add some tasks.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {tasks.map((task) => (
            <Task 
              key={task.id} 
              task={task} 
              deleteTask={deleteTask} 
              editTask={editTask} 
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TaskList;
