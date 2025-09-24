import React from 'react'
import TableFixed from './common/TableFixed';
import { Box, Button } from '@mui/material';
import TopBarCommon from './common/TopBarCommon';

const ManageAdmin = () => {

  return (
    <>
      <TopBarCommon heading='Manage Admin' />
      <Box className='text-center mt-5'>
        <Button variant='contained' className='!bg-[#b87bf6] !text-black hover:!bg-[#8e32ea] hover:!text-white'>Add Admin</Button>
        <TableFixed showRowPerPage='5' tableHeight='322' />
      </Box>
    </>
  )
}

export default ManageAdmin