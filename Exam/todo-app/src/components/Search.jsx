import React from 'react';
import { TextField, Box, Grid } from '@mui/material';

const Search = ({ setSearchTerm, setTagTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTagSearchChange = (e) => {
    setTagTerm(e.target.value);
  };

  return (
    <Box mb={4}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search by Name or Description"
            variant="outlined"
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search by Tags"
            variant="outlined"
            onChange={handleTagSearchChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
