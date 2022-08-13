import React, { FC } from 'react';
import { Checkbox, Grid, Box, Typography } from '@material-ui/core';
import useRenderCounter from '../hooks/userRenderCounter';
type Props = {
  todoName: string;
  mkey: string;
  handleChange: Function;
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const BetterTodo: FC<Props> = ({ todoName, mkey, handleChange }) => {
  const renderCounter = useRenderCounter();
  return (
    <Box sx={{ flexGrow: 1 }} key={mkey}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Checkbox
            {...label}
            onChange={(e) =>
              handleChange({ todoName, checked: e.target.checked })
            }
          />
        </Grid>
        <Grid xs={8}>
          <Typography variant="h6" color="primary">
            {todoName} {renderCounter}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(BetterTodo);
