import React from 'react';
import { Box, TextField, Grid, MenuItem } from '@mui/material';

const Filter = ({ setFilter }) => {
  return (
    <Box mb={4}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4}>
          <TextField
            fullWidth
            label="Filter by Date"
            variant="outlined"
            type="date"
            onChange={(e) => setFilter(prev => ({ ...prev, date: e.target.value }))}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            fullWidth
            label="Filter by Priority"
            variant="outlined"
            select
            onChange={(e) => setFilter(prev => ({ ...prev, priority: e.target.value }))}
          >
            <MenuItem value="">Select Priority</MenuItem>
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="low">Low</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filter;
