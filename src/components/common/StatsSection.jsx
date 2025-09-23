import { Box, Container } from '@mui/material';
import React, { useState } from 'react'
import StatsCard from './StatsCard';

const StatsSection = () => {
    const [hover, setHover] = useState(false);

    const statsArr = [
        { id: 1, img: 'Award-win-icon-ql3jfl128bgw7w0zd47zhpjragd06g20jwn65v2thm.png', count: '85+', msg: 'Awards Win', bgColor: '!bg-fuchsia-200', mtop: 'mt-0', hmtop: 'mt-[10px]', hmBottom: 'mt-[0px]' },
        { id: 2, img: 'happy-clients-icon-ql3jfk381hflwa2ciltcx7sap2hmyqya7rzool47nu.png', count: '96k', msg: 'Happy Clients', bgColor: '!bg-amber-200', mtop: 'mt-12', hmtop: 'mt-[0px]', hmBottom: 'mt-[10px]' },
        { id: 3, img: 'Professional-vets-icon-ql3jfj5dunebko3po3eqcq0u3om9r1ujvnc77b5lu2.png', count: '60+', msg: 'Professional Vets', bgColor: '!bg-emerald-100', mtop: 'mt-0', hmtop: 'mt-[10px]', hmBottom: 'mt-[0px]' },
        { id: 4, img: 'protection-icon-ql3jfh9pgzbqxg6fz2lh7qhwwwvjbnn37e188r8e6i.png', count: '99.99%', msg: 'Protection', bgColor: '!bg-blue-200', mtop: 'mt-12', hmtop: 'mt-[0px]', hmBottom: 'mt-[10px]' }
    ]

    return (
        <Box className="bg-gradient-to-b from-[#bcbcfc] to-[#FDF7F9] h-screen flex items-center justify-center">
            <Container maxWidth="xl" className='h-screen flex items-center justify-center'>
                {
                    statsArr.map(stats => (
                        <StatsCard key={stats.id} statsImg={stats.img} statsCount={stats.count} statsMsg={stats.msg} statsBgColor={stats.bgColor} statsMTop={stats.mtop} statsHMTop={stats.hmtop} statsHMBottom={stats.hmBottom} />
                    ))
                }
            </Container>
        </Box>
    );
}

export default StatsSection