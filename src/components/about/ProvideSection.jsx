import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { FaCheckCircle } from "react-icons/fa";
import ProviderCard from './ProviderCard';

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

const ProvideSection = () => {

    const providerArr = [
        { id: 1, img: 'Pet-nutritions-icon-ql3jfaou2y4x3a1bbjpj4h7rpckdw6r6jw8kkqzae0.png', title: 'Pet Nutritions', msg: 'Gentle pet grooming for a clean, stylish, and comfortable furry friend.', color: '#f0fffb', borderColor: 'hover:border-emerald-800' },
        { id: 2, img: 'Natural-prebiotic-icon-ql3jfckiit5bbed9qikcd9olxzip964fiqrsudfd1m.png', title: 'Natural Prebiotic', msg: 'Compassionate pet care ensuring love, safety, and wellness every day.', color: '#fff7f6', borderColor: 'hover:border-red-800' },
        { id: 3, img: 'Friendly-support-icon-ql3jfckin70xgdbfglpu5iry110nk1ufz8yfcv5c3g.png', title: 'Friendly Support', msg: 'Trusted veterinary services providing expert healthcare for your beloved pets.', color: '#f8f4ff', borderColor: 'hover:border-fuchsia-800' },
        { id: 4, img: 'Happy-Pet-icon-ql3jfckiit5bbed9qikcd9olxzip964fiqrsudfd1m.png', title: 'Happy Pets', msg: 'Effective pet training that builds discipline, confidence, and lasting companionship.', color: '#faf7f0', borderColor: 'hover:border-orange-700' }
    ]

    return (
        <Box className="bg-gradient-to-b from-[#F4F9FB] to-[#FDF6F8] h-screen">
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} className="pt-12 relative">
                        <img src="/about-section/about_left_shape.png" alt="" className='absolute left-0 top-48 opacity-60' />
                        <img src="/about-section/about_right_shape.png" alt="" className='absolute right-0 top-64 opacity-60' />
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box className='ml-28'>
                                <div className='text-[#FBAB2A] text-[16px] mt-16'>WHAT WE PROVIDE</div>
                                <h2 className='text-[#180A32] text-[52px] font-extrabold mt-2 z-10 w-xl'>Why Do People Choose Us?</h2>
                                <Box className='text-[#544E5F] text-[17px] mt-4 mx-0'>
                                    <Box className='mb-2 z-10'>
                                        In this day and age, life is understandably hectic for many pet parents. With commitments at work, time out with friends and family, full time attention to our pets are usually not a possibility. So whether you are having late nights at work, out on a holiday or simply need a break and need pet sitting, in home boarding, daycare, dog walking or even pet grooming, PetBacker is here to connect you with other pet lovers who are ready to help you take care of your pets like it were part of their family, belly rubs and hugs included.
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={2}>
                                {providerArr.map((provider) => (
                                    <Grid item xs={12} sm={6} key={provider.id}>
                                        <ProviderCard providerImg={provider.img} providerTitle={provider.title} providerMsg={provider.msg} providerColor={provider.color} providerBorderColor={provider.borderColor} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default ProvideSection