import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const StatsCard = (props) => {
    const { statsImg, statsCount, statsMsg, statsBgColor, statsMTop, statsHMTop, statsHMBottom } = props;

    return (
        <Box className={`mx-2 ${statsMTop} transform transition-all duration-1000 hover:${statsHMTop} hover:${statsHMBottom} cursor-pointer`}>
            <Card sx={{ maxWidth: 345, textAlign: 'center' }} className={`px-12 py-5 ${statsBgColor} !rounded-3xl`}>
                <Box className='bg-white rounded-full p-10 mx-auto'>
                    <CardMedia sx={{ height: 60, width: 60, m: 'auto' }} image={`/stats-section/${statsImg}`} title="#img"/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='text-[#180A32] text-[24px] !font-bold'>
                        {statsCount}
                    </Typography>
                    <Typography variant="body2" className='text-[#7E7986] text-[16px] mt-[5px]'>
                        {statsMsg}
                    </Typography>
                </CardContent>
            </Card>
        </Box>

    )
}

export default StatsCard