import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    date: '',
    priority: '',
    tags: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now() });
    setTask({ name: '', description: '', date: '', priority: '', tags: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={4}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Task Name"
            name="name"
            value={task.name}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Task Description"
            name="description"
            value={task.description}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Date and Time"
            name="date"
            type="datetime-local"
            value={task.date}
            onChange={handleChange}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Priority"
            name="priority"
            select
            value={task.priority}
            onChange={handleChange}
            variant="outlined"
            SelectProps={{
              native: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Tags (comma separated)"
            name="tags"
            value={task.tags}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Add Task
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddTask;
