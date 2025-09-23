import Container from '@mui/material/Container';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';
import { IoIosArrowForward } from 'react-icons/io';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

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

const FooterNewsletterSection = () => {
    return (
        <Box className="flex items-center justify-center py-16">
            <Box className="absolute bg-[#350390] flex flex-col items-center justify-center py-16 w-full mt-[1350px]">
                <Newsletter />

                <Box className='w-full relative top-[-100px]'>
                    <Grid container spacing={5} className='mx-18'>
                        <Grid size={5} className='flex flex-col items-center pr-5'>
                            <img src="/logo/paws-logo-removebg.png" alt="" className='w-50' />
                            <Box className='text-[#B0A7C0] mx-[20px] text-[14px] w-lg text-center'>
                                At Paws, we believe pets deserve the same love, care, and respect as any family member. With years of experience in pet grooming, veterinary care, training, and boarding, we are dedicated to keeping tails wagging and paws happy.
                            </Box>
                            <Box className='mt-5 flex justify-between items-center w-3xs'>
                                <img src="/footer-section/Footer-headphone-icon.png" alt="#headphone" />
                                <Box>
                                    <Box className='text-[16px] text-[#fff]'>+5689 2589 6325</Box>
                                    <p className='text-[#B0A7C0] text-[12px]'>Got Questions? Call us 24/7</p>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={3} className='mt-12'>
                            <h2 className='text-[#ffffff] text-[20px] font-extrabold mb-2'>Navigation</h2>
                            <ul className='text-[16px] text-[#B0A7C0] pl-[5px]'>
                                <li className='mb-2'>
                                    <Link to='/' className='transform transition-all duration-500 hover:ml-2'><IoIosArrowForward className='inline' /> Home</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/about-us' className='transform transition-all duration-500 hover:ml-2'><IoIosArrowForward className='inline' /> About</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/service' className='transform transition-all duration-500 hover:ml-2'><IoIosArrowForward className='inline' /> Service</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/product' className='transform transition-all duration-500 hover:ml-2'><IoIosArrowForward className='inline' /> Product</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/contact' className='transform transition-all duration-500 hover:ml-2'><IoIosArrowForward className='inline' /> Contact</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link to='/terms' className='transform transition-all duration-500 hover:ml-2'><IoIosArrowForward className='inline' /> Terms of Services</Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid size={4} className='mt-12'>
                            <h2 className='text-[#ffffff] text-[20px] font-extrabold mb-2'>Contact Us</h2>
                            <Box className='text-[#B0A7C0] mb-2'>
                                <h3 className='text-[18px] font-bold'>Address:</h3>
                                <p className='text-[14px]'>121 King Street Kolkata, <br />India</p>
                            </Box>
                            <Box className='text-[#B0A7C0]'>
                                <h3 className='text-[18px] font-bold'>Email:</h3>
                                <p className='text-[14px]'>info@paws.com</p>
                            </Box>
                            <Box className='mt-2'>
                                <Link to=''><FaFacebook className='inline mx-2 text-2xl text-white' /></Link>
                                <Link to=''><FaInstagram className='inline mx-2 text-2xl text-white' /></Link>
                                <Link to=''><FaXTwitter className='inline mx-2 text-2xl text-white' /></Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default FooterNewsletterSection