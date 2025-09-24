import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TopbarDashboard from './TopbarDashboard';
import OrderTypeChart from './OrderTypeChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  })
}))

const Dashboard = () => {
  return (
    <>
      <TopbarDashboard />
      <hr className='mt-2' />
      <OrderTypeChart />
    </>
  )
}

export default Dashboard