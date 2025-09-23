import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const TeamCard = (props) => {
    const { memberName, memberImg, memberSpeciality } = props;
    return (
        <Card sx={{ maxWidth: 345, textAlign: "center" }} className="mx-2 px-0 py-2 !rounded-3xl cursor-pointer border border-transparent hover:border-[#b353f7] transition-colors duration-300">

            <div className='bg-white rounded-full px-5 py-3 mx-auto'>
                <CardMedia sx={{ height: 120, width: 120 }} image={`/about-section/${memberImg}`} title="#img" className='mx-auto' />
            </div>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='text-[#180A32] text-[24px] !font-bold'>
                    {memberName}
                </Typography>
                <Typography variant="body2" color='font' component="div" className='text-[#7E7986] text-[16px] mt-[5px]'>
                    {memberSpeciality}
                    <Box className='mt-2'>
                        <FaFacebook className='inline mx-2 text-xl text-[#ac7ef6] hover:text-[#7E7986]' />
                        <FaInstagram className='inline mx-2 text-xl text-[#ac7ef6] hover:text-[#7E7986]' />
                        <FaXTwitter className='inline mx-2 text-xl text-[#ac7ef6] hover:text-[#7E7986]' />
                    </Box>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TeamCard