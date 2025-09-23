import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

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

const AdSection = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} className="bg-[#bb98fd] h-screen">
                <Grid container spacing={2} className='mx-30 relative flex justify-center items-center'>
                    <img src="/ad-section/Register-now-dog-img.png" alt="" className='absolute right-[-100px] bottom-[-70px]' />
                    <img src="/ad-section/Register-now-design-element.png" alt="" className='absolute left-10 top-2 opacity-60' />
                    <Grid size={6}>
                        <img src="/ad-section/Packaging-mockup.png" alt="" className='my-25' />
                    </Grid>
                    <Grid size={6}>
                        <h2 className='text-white mb-10 font-bold text-[48px]'>Register & Get Pet Nutritious Food</h2>
                        <Link className='bg-amber-400 px-7 py-3 text-white rounded-se-4xl rounded-ss-4xl rounded-ee-4xl rounded-es-4xl z-10 cursor-pointer' to='/user-register-login'>Register Now</Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AdSection