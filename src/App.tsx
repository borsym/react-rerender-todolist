import React from 'react';
import './App.css';
import { TodoList } from './TodoListWithoutMemo/TodoList';
import { Box, Button, Grid } from '@material-ui/core';
import { BetterTodoList } from './TodoListWithMemo/BetterTodoList';

function App() {
  return (
    <Box key="test">
      <Grid container spacing={2}>
        <Grid xs={4}>
          <TodoList />
        </Grid>
        <Grid xs={4}>
          <BetterTodoList />
        </Grid>
        <Grid xs={4}></Grid>
      </Grid>
    </Box>
  );
}

export default App;
