import { Box } from '@mui/material'
import React from 'react'

const Newsletter = () => {
  return (
    <Box className="relative w-[90%] max-w-6xl bg-[#bb98fd] rounded-3xl flex items-center justify-between px-12 py-16 top-[-250px]">

                    <Box className="flex-1">
                        <img src="/footer-section/newsletter-section/Girl-holding-puppy-footer-img.png"
                            alt="Newsletter" className="w-full max-w-md absolute bottom-0" />
                    </Box>

                    <Box className="flex-1 flex flex-col justify-center gap-6">
                        <p className="text-white uppercase tracking-widest text-sm">News Letter</p>
                        <h2 className="text-4xl font-bold text-white leading-snug w-[350px]">
                            Subscribe To Our Newsletter
                        </h2>

                        <Box className="flex bg-white rounded-full overflow-hidden shadow-md w-[380px]">
                            <input type="email" placeholder="Enter Your Email"
                                className="flex-1 px-5 py-3 outline-none text-gray-700" />
                            <button className="bg-[#fbb12f] hover:bg-[#f59e0b] text-white px-4 font-semibold rounded-r-full">Subscribe Now</button>
                        </Box>
                    </Box>
                </Box>
  )
}

export default Newsletter