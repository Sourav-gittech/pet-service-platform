import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const ProviderCard = ({ providerImg, providerTitle, providerMsg, providerColor, providerBorderColor }) => {

    return (
        <Card sx={{ maxWidth: 280, textAlign: "center" }} className={`px-6 py-5 !rounded-3xl cursor-pointer border-2 z-10 border-transparent ${providerBorderColor}`}>

            <div style={{ backgroundColor: providerColor }} className="rounded-full p-5 w-[100px] mx-auto flex items-center justify-center">
                <CardMedia sx={{ height: 50, width: 50, m: "auto" }} image={`/about-section/${providerImg}`} title={providerTitle} />
            </div>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="text-[#180A32] text-[22px] font-bold">
                    {providerTitle}
                </Typography>
                <Typography variant="body2" className="text-[#7E7986] text-[15px] mt-2 px-[5px]">
                    {providerMsg}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProviderCard;
