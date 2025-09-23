import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
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

const HomeBanner = () => {
    return (
        <Box className="bg-gradient-to-b from-[#EFFFFF] to-[#d6b4f9] h-[842px]">
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} className='pt-12 flex items-center'>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box className='relative'>
                                <h2 className='absolute top-36 text-[85px] text-[#180A32] font-semibold z-10'>We’re Here to Care of Your Pet's</h2>
                                <p className='absolute top-96 text-[20px] text-[#544E5F] z-10'>From daily walks to special treatments, we make sure your furry friends are happy, healthy, and loved every step of the way.</p>
                                <Link className='absolute top-[480px] left-20 bg-amber-400 px-7 py-3 text-white rounded-se-4xl rounded-ss-4xl rounded-ee-4xl rounded-es-4xl z-10' to='/about-us'>Read More</Link>
                                <img src="/banner/testimonials_left_shape.png" alt="" className='absolute left-0 top-72 opacity-50' />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box className='relative'>
                                <img src="/banner/Left-Paw-design-element-banner.png" alt="" className='absolute left-0 top-48' />
                                <img src="/banner/Right-Paw-design-element-banner.png" alt="" className='absolute right-50 top-96' />
                                <Box className='px-3 py-3 text-black bg-white w-[200px] rounded-se-4xl rounded-ss-4xl rounded-ee-4xl rounded-es-4xl relative top-96 left-16 z-10 flex items-center'>
                                    <img src="/banner/Satisified-clients.jpg" alt="" className='absolute rounded-4xl' />
                                    <Box className='ml-15'>
                                        <h6 className='font-bold'>156+</h6>
                                        <p>Satisfied Clients</p>
                                    </Box>
                                </Box>
                                <Box className='px-3 py-3 text-black bg-white w-[200px] rounded-se-4xl rounded-ss-4xl rounded-ee-4xl rounded-es-4xl relative top-[450px] left-96 z-10 flex items-center'>
                                    <img src="/banner/Pets-training-icon-img-ql3jgiv8p74acg7pjul7cncud4gqa0tmx0r3lejh9a.png" alt="" className='absolute rounded-4xl' />
                                    <Box className='ml-15'>
                                        <h6 className='font-bold'>Pet's Training</h6>
                                        <p>Cats & Dogs</p>
                                    </Box>
                                </Box>
                                <Box className='px-3 py-3 text-black bg-white w-[200px] rounded-se-4xl rounded-ss-4xl rounded-ee-4xl rounded-es-4xl relative top-[550px] right-0 z-10 flex items-center'>
                                    <img src="/banner/Vaccination-icon-img-ql3jggzkbj1pp8afutry7ntx6cpzumm68rg4mum9lq.png" alt="" className='absolute rounded-4xl' />
                                    <Box className='ml-15'>
                                        <h6 className='font-bold'>Vaccination</h6>
                                        <p>Cats & Dogs</p>
                                    </Box>
                                </Box>
                                <img src="/banner/testimonials_right_shape.png" alt="" className='absolute right-0 top-52' />
                                <img src="/banner/Smiling-lady-home-banner.png" alt="#banner" className='h-[650px] absolute top-36' />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default HomeBanner