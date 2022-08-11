import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

var Badge = (props) => {
  return (
    <>
      <Paper sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          backgroundColor: '#c2c2d6',
          justifyContent: 'space-between',
          paddingLeft: 3,
          paddingRight: 3,
          '&:hover': {
            backgroundColor: '#8585ad',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        <Box sx={{maxWidth: '70%'}}>
          <Typography>{props.item.name}</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          maxWidth: '30%'
        }}>
          <Typography>{props.item.value} {props.item.unit}</Typography>
        </Box>
      </Paper>
    </>
  )
}

export default Badge;