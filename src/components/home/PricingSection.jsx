import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import PricingCard from './PricingCard';

const PricingSection = () => {

    const pricing_details = [
        {
            id: 1, name: 'Friendly Package', price: '100', description: [
                'Bath (Hypo-Allergenic)', 'Conditioning Treatment', 'Ears Flushed & Cleaned', 'Watering Plants', 'Handscissor Finish', 'Setting Length of Coat'
            ]
        },
        {
            id: 2, name: 'Family Package', price: '140', description: [
                'Bath (Hypo-Allergenic)', 'Conditioning Treatment', 'Ears Flushed & Cleaned', 'Watering Plants', 'Handscissor Finish', 'Setting Length of Coat'
            ]
        },
        {
            id: 3, name: 'Exclusive Package', price: '220', description: [
                'Bath (Hypo-Allergenic)', 'Conditioning Treatment', 'Ears Flushed & Cleaned', 'Watering Plants', 'Handscissor Finish', 'Setting Length of Coat'
            ]
        }
    ]

    return (
        <Box className="bg-gradient-to-b from-[#F8FAFC] to-[#f3a2bd] h-screen">
            <Container maxWidth="xl" className='text-center'>
                <div className='text-[#FBAB2A] text-[16px] pt-16'>OUR  PACKAGES</div>
                <h2 className='text-[#180A32] text-[48px] font-extrabold'>Our Plans & Pricing</h2>
                <Box className='relative'>
                    <img src="/pricing-section/Lined-circle-design-element.png" alt="" className='absolute left-70 top-80' />
                    <img src="/pricing-section/packages_left_shape.png" alt="" className='absolute left-0 top-2' />
                    <img src="/pricing-section/packages_right_shape.png" alt="" className='absolute right-0 top-12' />
                    <Box className='relative flex items-center justify-center pt-10'>
                        {
                            pricing_details.map(price => (
                                <PricingCard key={price.id} data={price} />
                            ))
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default PricingSection