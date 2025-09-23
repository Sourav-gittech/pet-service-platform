import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

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

const MissionSection = () => {
    return (
        <Box className="bg-gradient-to-b from-[#F4F9FB] to-[#FDF6F8] pb-10">
            <Container maxWidth="xl" className='text-center'>
                <div className='text-[#FBAB2A] text-[16px] pt-16'>OUR MISSION</div>
                <h2 className='text-[#180A32] text-[48px] font-extrabold'>We Love Pets and Care For Them</h2>
                <Box sx={{ flexGrow: 1 }} className='relative'>
                    <img src="/mission-section/about_left_shape.png" alt="" className='absolute left-0 top-8' />
                    <img src="/mission-section/about_right_shape.png" alt="" className='absolute right-0 top-80 opacity-50' />

                    <Grid container spacing={2} className='pt-12 flex justify-center'>
                        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                            <Box className=''>
                                <ul>
                                    <li className='flex flex-col justify-center items-center'>
                                        <img src="/mission-section/Maintain-a-Daily-routine-icon-ql3jekddj7rudjfso5a0ilbtxa819gvlmi9fm32d1q.png" alt="" className='bg-white rounded-full hover:transform hover:scale-110' />
                                        <Box className=''>
                                            <h3 className='w-[220px] mx-auto text-[#180A32] text-[22px] font-bold mt-2'>Maintain a Daily Routine</h3>
                                            <p className='w-[280px] text-[#544E5F] text-[18px] px-[10px]'>Gentle pet grooming for a clean, stylish, and comfortable furry friend.</p>
                                        </Box>
                                    </li>
                                    <li className='flex flex-col justify-center items-center mt-2'>
                                        <img src="/mission-section/Give-pet-one-to-one-icon-ql3jekddj7rudjfso5a0ilbtxa819gvlmi9fm32d1q.png" alt="" className='bg-white rounded-full hover:transform hover:scale-110' />
                                        <Box className=''>
                                            <h3 className='w-[220px] mx-auto z-10 text-[#180A32] text-[22px] font-bold mt-2'>Gives Pets 1-to-1 Attention</h3>
                                            <p className='w-[280px] text-[#544E5F] text-[18px] px-[10px]'>Compassionate pet care ensuring love, safety, and wellness every day.</p>
                                        </Box>
                                    </li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                            <Box className=''>
                                <img src="/mission-section/Our-mission-video-image.jpg" alt="" className='w-full h-150 object-cover rounded-full' />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                            <Box className=''>
                                <ul>
                                    <li className='flex flex-col justify-center items-center'>
                                        <img src="/mission-section/Pets-safe-home-icon-ql3jegm0rvmp33l9a3ni8m9zjqqkeogo9znhoz7xqm.png" alt="" className='bg-white rounded-full hover:transform hover:scale-110' />
                                        <Box className=''>
                                            <h3 className='w-[220px] mx-auto text-[#180A32] text-[22px] font-bold mt-2'>Keep Your Pets & Home Safe</h3>
                                            <p className='w-[280px] text-[#544E5F] text-[18px] px-[10px]'>Trusted veterinary services providing expert healthcare for your beloved pets.</p>
                                        </Box>
                                    </li>
                                    <li className='flex flex-col justify-center items-center mt-2'>
                                        <img src="/mission-section/Mental-formation-icon-ql3jekddj7rudjfso5a0ilbtxa819gvlmi9fm32d1q.png" alt="" className='bg-white rounded-full hover:transform hover:scale-110' />
                                        <Box className=''>
                                            <h3 className='w-[220px] mx-auto z-10 text-[#180A32] text-[22px] font-bold mt-2'>Succeed The Mental Formation</h3>
                                            <p className='w-[280px] text-[#544E5F] text-[18px] px-[10px]'>Effective pet training that builds discipline, confidence, and lasting companionship.</p>
                                        </Box>
                                    </li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default MissionSection