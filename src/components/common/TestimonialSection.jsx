import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TestimonialCarousal from './TestimonialCarousal';

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

const TestimonialSection = () => {

    const reviews = [
        { id: 1, name: 'Pauline', title: 'A New Freedom 😍', rating: 5, desc: "I have used TrustedHousesitters twice. Once for a three week sit of my dog and once for a weekend. I was really happy with both sits The quality of care and attention given to my dog and home was exceptional. I met the sitters beforehand which made me feel comfortable. I would not hesitate to use this site again It's easy to navigate I just entered my dates and people started to apply. It was really great for the sitters to have previous reviews that were helpful." },
        { id: 2, name: 'Marta Schneider', title: 'After 5 successful sits', rating: 5, desc: "After 5 successful sits, from 01 Aug 2025 till 10 Sept 2015, in 5 completely different places, with 5 completely different parents, I cannot possibly believe in coincidences. I believe it's the foundation of TrustedHousesitters that made it all go so well, so smoothly, so perfect. The way it's planned, the questions and answers, all the information required is there. I expected things to go well, but all exceeded my expectations. I'm truly satisfied and relaxed to continue." },
        { id: 3, name: 'Elizabeth Bowen', title: 'Early days having only had one sit so…', rating: 5, desc: "Early days having only had one sit so far but the service is outstanding. Lots of help on hand to guide you through the process." },
        { id: 4, name: 'Dawn', title: 'It’s as good as people say', rating: 4, desc: "I’ve heard good things about TrustedHousesitters from a few of my friends. This was our first time using the service. We couldn’t ask for a better house sitter. We were gone for two weeks came back to a happy dog, a clean house, and healthy plants. Best of all our housesitter was the nicest and most interesting person. Highly recommended." },
        { id: 5, name: 'Mervyn Webster', title: 'I was skeptical BUT..', rating: 5, desc: "I was skeptical BUT... I'm now a convert!!! This has been a fast efficient service and can say the whole experience was 1st class! Our sitters were way better than our expectations and hope everyone enjoys the same!!!" },
        { id: 6, name: 'Jon Green', title: 'A good experience', rating: 5, desc: "Having used TrustedHousesitters three years ago, it's been mainly a positive experience. More recently the improvements to the website and app have also been positive as a user, so in all, keep up the good work." }
    ]

    return (
        <Box className="bg-gradient-to-b from-[#d8e7f7] to-[#ffffff] h-screen">
            <Container maxWidth="xl" className='text-center'>
                <div className='text-[#FBAB2A] text-[16px] pt-16'>TESTIMONIALS</div>
                <h2 className='text-[#180A32] text-[48px] font-extrabold'>What Our Client's Have to Say!</h2>
                <Box className='relative'>
                    <img src="/testimonial-section/testimonials_right_shape.png" alt="" className='absolute right-0 top-10' />
                    <img src="/testimonial-section/testimonials_quote.png" alt="" className='absolute left-96 top-26 opacity-40' />
                    <img src="/testimonial-section/testimonials_left_shape.png" alt="" className='absolute left-0 top-40' />
                    <Box sx={{ flexGrow: 1 }} className='absolute flex items-center justify-between pt-10 w-full'>
                        <Grid container spacing={2}>
                            <Grid size={8}>
                                <TestimonialCarousal reviews={reviews} />
                            </Grid>
                            <Grid size={4}>
                                <img src="/testimonial-section/Testimonial-blonde-girl.jpg" alt="" className='absolute right-30 top-60 h-50 rounded-se-4xl rounded-ss-4xl rounded-ee-4xl ' />
                                <img src="/testimonial-section/Testimonial-black-boy.jpg" alt="" className='absolute right-150 top-30 rounded-ss-4xl rounded-ee-4xl' />
                                <img src="/testimonial-section/Testimonial-blonde-lady.jpg" alt="" className='absolute right-30 top-20 rounded-ss-4xl rounded-ee-4xl' />
                                <img src="/testimonial-section/Testimonial-white-man.jpg" alt="" className='absolute right-80 top-10 rounded-se-4xl rounded-es-4xl' />
                                <img src="/testimonial-section/Testimonial-red-haired-girl.jpg" alt="" className='absolute right-100 top-70 rounded-se-4xl rounded-ss-4xl rounded-ee-4xl rounded-es-4xl' />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default TestimonialSection