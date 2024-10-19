import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const EditTask = ({ task, editTask, closeEdit }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  useEffect(() => {
    setUpdatedTask(task);
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(updatedTask);
    closeEdit(); 
  };

  return (
    <Paper sx={{ padding: 3, marginTop: 3, boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom align="center">
        Edit Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Task Name"
            name="name"
            value={updatedTask.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Task Description"
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <TextField
            label="Date"
            name="date"
            type="datetime-local"
            value={updatedTask.date || ""}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            select
            label="Priority"
            name="priority"
            value={updatedTask.priority}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            required
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </TextField>
          <TextField
            label="Tags (comma separated)"
            name="tags"
            value={updatedTask.tags}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: '48%' }}
          >
            Save Changes
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            sx={{ width: '48%' }}
            onClick={closeEdit}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default EditTask;
