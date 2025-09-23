import React from 'react'
import { Box, Container } from '@mui/material'
import { Link } from 'react-router-dom'

const AboutBanner = () => {
    return (
        <Box className="bg-gradient-to-b from-[#EFFFFF] to-[#d6b4f9] h-[842px]">
            <Container maxWidth="xl" className='flex flex-col h-screen items-center justify-center'>
                <img src="/banner/testimonials_left_shape.png" alt="" className='absolute left-0 top-72 opacity-50' />
                <img src="/banner/Footer-paw-design-element.png" alt="" className='absolute right-130 top-42' />
                <img src="/banner/Sparkle-design-img-book-consultancy.png" alt="" className='absolute left-96 top-52 opacity-50' />
                <img src="/banner/testimonials_right_shape.png" alt="" className='absolute right-0 top-52' />
                <h1 className='text-[#180A32] text-[60px] mb-[8px] font-bold z-10'>About Us</h1>
                <p className='z-10 w-2xl text-center text-[#544E5F] text-[16px] mb-[20px]'>At Paws, we believe pets deserve the same love, care, and respect as any family member. With years of experience in pet grooming, veterinary care, training, and boarding, we are dedicated to keeping tails wagging and paws happy.</p>
                <ul className='text-[#180A32] flex justify-between w-[130px] p-3 border-2 bg-white border-white rounded-2xl cursor-pointer mt-5'>
                    <li><Link to='/'>Home</Link></li>
                    <li>/</li>
                    <li><Link to='/about-us' className='font-bold'>About</Link></li>
                </ul>
            </Container>
        </Box>
    )
}

export default AboutBanner