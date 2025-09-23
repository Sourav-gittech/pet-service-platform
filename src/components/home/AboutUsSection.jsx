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

const AboutUsSection = () => {
    return (
        <Box className="bg-gradient-to-b from-[#F4F9FB] to-[#FDF6F8] h-screen">
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} className='pt-12'>
                        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
                            <Box className='relative'>
                                <img src="/about-section/Paw-design-element.png" alt="" className='absolute left-90 top-8' />
                                <img src="/about-section/Curly-haired-girl-home.jpg" alt="#banner" className='h-[350px] absolute top-6 rounded-se-4xl rounded-ee-4xl rounded-es-4xl' />
                                <img src="/about-section/Lady-doctor-home.jpg" alt="#banner" className='h-[400px] absolute top-50 right-2 rounded-se-4xl rounded-ss-4xl  rounded-es-4xl' />
                                <Box className='px-3 py-3 text-white bg-[#8ce1c9] w-[250px] rounded-se-4xl rounded-ss-4xl rounded-ee-4xl rounded-es-4xl relative top-[500px] left-50 z-10 flex items-center'>
                                    <img src="/about-section/Expereince-icon-img.png" alt="" className='absolute rounded-xl' />
                                    <Box className='ml-20 relative'>
                                        <h6 className='font-extrabold text-3xl'>25+</h6>
                                        <p>Years of Experience</p>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6, lg: 7 }}>
                            <Box className='relative'>
                                <img src="/about-section/Sparkle-design-element.png" alt="" className='absolute right-40 top-8 opacity-50' />
                                <img src="/about-section/about_right_shape.png" alt="" className='absolute right-0 top-64' />
                                <div className='absolute text-[#FBAB2A] text-[16px] mt-16'>ABOUT US</div>
                                <h2 className='absolute text-[#180A32] text-[42px] font-extrabold mt-22 z-10'>We are The Best For Your Pet Care</h2>
                                <Box className='absolute text-[#544E5F] text-[20px] mt-40 mx-0'>
                                    <Box className='mb-10'>
                                        At Paws, we believe pets deserve the same love, care, and respect as any family member. With years of experience in pet grooming, veterinary care, training, and boarding, we are dedicated to keeping tails wagging and paws happy.
                                    </Box>
                                    <Box className='ml-5'>
                                        <Box className='mb-0'>25+ Years of Experience in Pet Care.</Box> <br />
                                        <Box className='mb-0'>Compassionate & Certified Professionals.</Box> <br />
                                        <Box className='mb-0'>Safe, Clean, and Friendly Environment.</Box> <br />
                                        <Box className='mb-8'>Full Range of Services – Grooming, Training, Veterinary, Boarding & More.</Box>
                                        <Link className='left-20 bg-amber-400 px-7 py-3 text-white rounded-se-4xl rounded-ss-4xl rounded-ee-4xl rounded-es-4xl z-10' to='/about-us'>Read More</Link>
                                    </Box>
                                </Box>
                                
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default AboutUsSection