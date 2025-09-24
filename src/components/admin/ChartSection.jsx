import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Veterinarian from './chart/Veterinarian';
import Seller from './chart/Seller';
import UserType from './chart/UserType';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const ChartSection = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className='flex justify-between relative'>
        <Grid size={5}>
          <Veterinarian />
          <h3 className='text-center'>Doughnut Chart</h3>
        </Grid>
        <Grid size={5}>
          <Seller />
          <h3 className='text-center'>Doughnut Chart</h3>
        </Grid>
        <Grid size={6} className='absolute mt-56 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <UserType />
          <h3 className='text-center'>Pie Chart</h3>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ChartSection