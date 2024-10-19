import React from 'react';
import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';

const Task = ({ task, deleteTask, editTask }) => {
  return (
    <Grid item xs={12} sx={{ marginBottom: 2 }}>
      <Card sx={{
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column', 
        width: '100%',
      }}>
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {task.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {task.description}
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Date:</strong> {task.date}
          </Typography>
          <Typography variant="body2" color="primary" paragraph>
            <strong>Priority:</strong> {task.priority}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Tags:</strong> {task.tags}
          </Typography>

          <Box mt={2} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteTask(task.id)}
              sx={{ marginRight: 1 }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => editTask(task)}  
              sx={{ marginLeft: 1 }}
            >
              Edit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Task;
