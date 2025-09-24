import { Box, Grid } from '@mui/material'
import React from 'react'

const TopbarDashboard = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={8}>
                    <h2 className='text-3xl font-bold'>Hi, welcome back!</h2>
                    <p className='text-[14px] text-[#544E5F]'>We believe pets deserve the same love, care, and respect as any family member.</p>
                </Grid>
                <Grid size={4} className='text-center flex justify-between'>
                    <ul>
                        <li className='text-[14px] font-bold text-[#5f10f1]'>Total Admin</li>
                        <li className='text-[22px] text-red-700'>00</li>
                    </ul>
                    <ul>
                        <li className='text-[14px] font-bold text-[#5f10f1]'>Total Veterinarian</li>
                        <li className='text-[22px] text-green-700'>00</li>
                    </ul>
                    <ul>
                        <li className='text-[14px] font-bold text-[#5f10f1]'>Total Seller</li>
                        <li className='text-[22px] text-blue-700'>00</li>
                    </ul>
                    <ul>
                        <li className='text-[14px] font-bold text-[#5f10f1]'>Total User</li>
                        <li className='text-[22px] text-amber-800'>00</li>
                    </ul>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TopbarDashboard