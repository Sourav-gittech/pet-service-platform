import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import GlowCard from './GlowCard';

const ServiceSection = () => {

    const service_arr = [
        { id: 1, title: 'Pet Grooming', img: 'Pet-groming-icon-img.png', desc: 'Gentle pet grooming for a clean, stylish, and comfortable furry friend.' },
        { id: 2, title: 'Pet Care', img: 'Pet-care-icon-img.png', desc: 'Compassionate pet care ensuring love, safety, and wellness every day.' },
        { id: 3, title: 'Vaterinary', img: 'Vaterinary-icon-img.png', desc: 'Trusted veterinary services providing expert healthcare for your beloved pets.' },
        { id: 4, title: 'Pet Training', img: 'Pet-training-icon-img.png', desc: 'Effective pet training that builds discipline, confidence, and lasting companionship.' }
    ]
    return (
        <Box className="bg-gradient-to-b from-[#fdf6f8] to-[#FDF7F9] h-screen">
            <Container maxWidth="xl" className='text-center'>
                <div className='text-[#FBAB2A] text-[16px] pt-16'>OUR SERVICES</div>
                <h2 className='text-[#180A32] text-[48px] font-extrabold'>We Provide Best Services For <br /> Your Pet's</h2>
                <Box className='relative'>
                    <img src="/service-section/Circle-lines-Design-element.png" alt="" className='absolute left-50 top-0' />
                    <img src="/service-section/services_cat_shape.png" alt="" className='absolute right-0 top-4' />
                    <img src="/service-section/services_dog_shape.png" alt="" className='absolute left-0 top-20' />
                    <Box className='relative flex items-center justify-center pt-10'>
                        {
                            service_arr.map(service => (
                                <GlowCard key={service.id} data={service} />
                            ))
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ServiceSection