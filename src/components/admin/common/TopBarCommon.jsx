import { Box, Grid } from '@mui/material'
import React from 'react'

const TopBarCommon = ({heading}) => {

  return (
    <Box>
                    <h2 className='text-3xl font-bold'>{heading}</h2>
                    <p className='text-[14px] text-[#544E5F]'>We believe pets deserve the same love, care, and respect as any family member.</p>
                
        </Box>
  )
}

export default TopBarCommon