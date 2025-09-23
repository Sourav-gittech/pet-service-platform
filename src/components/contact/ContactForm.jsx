import React, { useState } from "react";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

const ContactForm = () => {

    return (
        <Box sx={{ backgroundColor: "#c7aefc", py: 10, minHeight: "100vh" }} className='rounded-4xl'>
            <Container maxWidth="sm">
                <Box component="form" sx={{ p: 3, borderRadius: 3, backgroundColor: "transparent" }}>

                    <div className='text-[#fff] text-[16px]'>CONTACT US</div>
                    <h2 className='text-[#fff] text-[42px] font-extrabold z-10'>Send us a Message</h2>
                    <p className='text-[#fff] text-12 z-10 mb-7'>With years of experience in pet grooming, veterinary care, training, and boarding, we are dedicated to keeping tails wagging and paws happy.</p>

                    <TextField fullWidth label="Name" name="name" className="!mb-5 bg-white rounded-xl" />
                    <TextField fullWidth label="Phone" name="phone" type="tel" className="!mb-5 bg-white rounded-xl" />
                    <TextField fullWidth label="Email" name="email" type="email" className="!mb-5 bg-white rounded-xl" />
                    <TextField fullWidth label="Message" name="message" multiline rows={4} className="!mb-5 bg-white rounded-xl" />

                    <Button type="submit" variant="contained" fullWidth className="!rounded-4xl !text-[16px] !font-bold !bg-blue-500 hover:!bg-blue-800">
                        Submit
                    </Button>

                </Box>
            </Container>
        </Box>
    );
};


export default ContactForm