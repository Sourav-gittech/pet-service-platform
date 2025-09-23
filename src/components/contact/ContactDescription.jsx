import { Box } from '@mui/material'
import React from 'react'

const ContactDescription = () => {
    return (
        <div>
            <Box className='relative'>
                <div className='absolute text-[#FBAB2A] text-[16px] mt-16'>OUR INFO</div>
                <h2 className='absolute text-[#180A32] text-[42px] font-extrabold mt-22 z-10'>Get in Touch</h2>
                <p className='absolute text-[#7E7986] text-12 mt-40 z-10'>At Paws, we believe pets deserve the same love, care, and respect as any family member.</p>
                <Box className='absolute mt-55 mx-0'>
                    <ul>
                        <li className='flex justify-center items-center bg-amber-200 p-4 rounded-4xl'>
                            <img src="/contact-section/Location-icon-contact-page.png" alt="" className='bg-white mr-5 rounded-full' />
                            <Box>
                                <h5 className='text-[#544E5F] text-2xl font-bold'>Location:</h5>
                                <p className='text-[15px] w-[180px] text-[#763aef]'>121 King Street Kolkata, 700001, India</p>
                            </Box>
                        </li>
                        <li className='flex justify-center items-center bg-emerald-200 p-4 rounded-4xl mt-5'>
                            <img src="/contact-section/Phone-icon-contact-page.png" alt="" className='bg-white mr-5 rounded-full' />
                            <Box>
                                <h5 className='text-[#544E5F] text-2xl font-bold'>Phone:</h5>
                                <p className='text-[15px] w-[180px] text-[#763aef]'>+012 (345) 678 99 +12345678 478 58</p>
                            </Box>
                        </li>
                        <li className='flex justify-center items-center bg-blue-200 p-4 rounded-4xl mt-5'>
                            <img src="/contact-section/Email-icon-contact-page.png" alt="" className='bg-white mr-5 rounded-full' />
                            <Box>
                                <h5 className='text-[#544E5F] text-2xl font-bold'>Email Us:</h5>
                                <p className='text-[15px] w-[180px] text-[#763aef]'>Info@paws.com pawspetcare@gmail.com</p>
                            </Box>
                        </li>
                    </ul>
                </Box>
            </Box>
        </div>
    )
}

export default ContactDescription