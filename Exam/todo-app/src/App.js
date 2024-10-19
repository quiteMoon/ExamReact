import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Search from './components/Search';
import Filter from './components/Filter';
import EditTask from './components/EditTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [tagTerm, setTagTerm] = useState('');
  const [filter, setFilter] = useState({ date: '', priority: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);
        console.log("Loaded tasks from localStorage:", parsedTasks); 
        setTasks(parsedTasks);
      } catch (e) {
        console.error("Error parsing tasks from localStorage:", e);
      }
    }
  }, []);

  useEffect(() => {
    console.log("Saving tasks to localStorage:", tasks);  
    if (tasks.length > 0) {
      try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (e) {
        console.error("Error saving tasks to localStorage:", e);
      }
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId);
    setTasks(newTask);
    localStorage.setItem('tasks', JSON.stringify(newTask));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setIsEditing(false);
    setCurrentTask(null);
  };

  const startEditing = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentTask(null);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase()) || task.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDate = filter.date ? task.date.slice(0, 10) === filter.date : true;
    
    const matchesTags = tagTerm ? task.tags.split(',').map(tag => tag.trim().toLowerCase()).some(tag => tag.includes(tagTerm.toLowerCase())) : true;

    const matchesPriority = filter.priority ? task.priority === filter.priority : true;
  
    return matchesSearch && matchesDate && matchesPriority && matchesTags;
  });

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundColor: '#f5f5f5', 
          borderRadius: 2,  
          paddingY: 3,      
          paddingX: 5,      
          boxShadow: 3,     
        }}
      >
        <Typography variant="h4" gutterBottom align="center">Task List</Typography>
        <Search setSearchTerm={setSearchTerm} setTagTerm={setTagTerm} />
        <Filter setFilter={setFilter} />
        <AddTask addTask={addTask} />

        {isEditing && currentTask && (
          <EditTask 
            task={currentTask} 
            editTask={editTask} 
            closeEdit={cancelEdit} 
          />
        )}

        {!isEditing && (
          <Grid container spacing={3} mt={3}>
            <TaskList tasks={filteredTasks} deleteTask={deleteTask} editTask={startEditing} />
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default App;
