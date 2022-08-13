import React, { useEffect, useState, useCallback } from 'react';
import BetterTodo from './BetterTodo';
import { Box, Button, Grid, Input } from '@material-ui/core';

interface TodoElement {
  todoName: string;
  checked: boolean;
}

export const BetterTodoList = () => {
  const initalTodos: TodoElement[] = [
    { todoName: 'cica', checked: false },
    { todoName: 'asd', checked: false },
  ];
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<TodoElement[]>(initalTodos);

  const getUpdated = (todos: TodoElement[], todo: TodoElement): any => {
    let newTodos: TodoElement[] = [...todos];
    newTodos.map((element) => {
      if (element.todoName === todo.todoName) {
        element.checked = !todo.checked;
      }
    });
    return newTodos;
  };

  const handleChange = useCallback((todo: TodoElement) => {
    setTodos((todos: TodoElement[]) => getUpdated(todos, todo));
  }, []);

  return (
    <>
      <Box key="test2">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <h1>Handles rerender with memo</h1>
        </Box>
        <ul>
          {todos.map((todo: TodoElement) => (
            <BetterTodo
              todoName={todo.todoName}
              mkey={`cica ${todo}`}
              handleChange={handleChange}
            />
          ))}
        </ul>
        <Box>
          <Input
            type="text"
            placeholder="Add todo"
            color="primary"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              const newEl: TodoElement = {
                todoName: inputValue,
                checked: false,
              };
              if (inputValue === '') return;
              setTodos((current: TodoElement[]) => [...current, newEl]);
              setInputValue('');
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </>
  );
};
