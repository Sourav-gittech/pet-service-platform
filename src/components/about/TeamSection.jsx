import { Box, Container } from '@mui/material'
import React from 'react'
import TeamCard from './TeamCard'

const TeamSection = () => {
    const teamArr = [
        { id: 1, name: 'Benjamin Shah', img: 'Benjamin-Shah-Team.jpg', speciality: 'Pet Specialist' },
        { id: 2, name: 'Helene Paquet', img: 'Helene-Paquet-team.jpg', speciality: 'Parasitology Specialist' },
        { id: 3, name: 'Itsuki Takahashi', img: 'Itsuki-Takahashi-team.jpg', speciality: 'Veterinary Surgeon' }
    ]
    return (
        <Box className="bg-gradient-to-b from-[#fdf6f8] to-[#FDF7F9] h-screen">
            <Container maxWidth="xl" className='text-center'>
                <div className='text-[#FBAB2A] text-[16px] pt-16'>OUR TEAM</div>
                <h2 className='text-[#180A32] text-[48px] font-extrabold'>Meet The Expert Team</h2>
                <Box className='w-3xl mx-auto mt-3'>
                    <Box className='flex items-center justify-around'>
                    {
                        teamArr.map(team => (
                            <TeamCard key={team.id} memberName={team.name} memberImg={team.img} memberSpeciality={team.speciality}/>
                        ))
                    }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default TeamSection