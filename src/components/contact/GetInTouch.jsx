import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import ContactDescription from './ContactDescription';
import ContactForm from './ContactForm';

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

const GetInTouch = () => {
    return (
        <Box className="bg-gradient-to-b from-[#fdf6f8] to-[#FDF7F9] pb-20">
            <Container maxWidth="xl">
                <Box className='relative mx-50 pt-30'>
                    <img src="/service-section/Circle-lines-Design-element.png" alt="" className='absolute left-50 top-30' />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid size={5}>
                                <ContactDescription />
                            </Grid>
                            <Grid size={7}>
                                <ContactForm />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default GetInTouch