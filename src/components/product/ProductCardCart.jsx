import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ProductCardCart = (props) => {
    const { data } = props;

    return (
        <Box className="relative w-[190px] h-[240px] hover:h-[260px] bg-white rounded-2xl overflow-hidden shadow-md border border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-purple-500/30 group">

            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 animate-[shine_3s_infinite]" />

            <div className="absolute -inset-2 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.3)_0%,rgba(124,58,237,0)_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>

            <Box className="relative z-10 flex flex-col gap-3 p-5 h-full">

                <Box className="w-full h-[100px] hover:h-[150px] rounded-xl bg-gradient-to-tr from-purple-400 to-purple-600 overflow-hidden transform transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-md relative">
                <img src={`/product-section/product-1-300x300.jpg`} alt="" />
                    
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_30%),repeating-linear-gradient(45deg,rgba(139,92,246,0.1)_0px,rgba(139,92,246,0.1)_2px,transparent_2px,transparent_4px)] opacity-50" />
                </Box>

                <Box className="flex flex-col gap-1">
                    <Typography variant="subtitle1" fontWeight="bold" className="text-slate-800 transition group-hover:text-purple-600 group-hover:translate-x-1">
                        Premium Design
                    </Typography>
                    {/* <Typography variant="body2" className="text-slate-600 text-sm opacity-70 transition group-hover:opacity-100 group-hover:translate-x-1">
                        Hover to reveal stunning effects
                    </Typography> */}
                </Box>

                <Box className="flex justify-between items-center mt-auto">
                    <Typography fontWeight="bold" className="text-slate-800 transition group-hover:text-purple-600 group-hover:translate-x-1">
                        $49.99
                    </Typography>
                    <IconButton className="!w-7 !h-7 !bg-purple-600 text-white rounded-full transform scale-90 transition-all duration-300 group-hover:scale-100 group-hover:shadow-[0_0_0_4px_rgba(124,58,237,0.2)]">
                        <AddIcon fontSize="small" className="animate-pulse" />
                    </IconButton>
                </Box>
            </Box>

            <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
        </Box>
    );
}

export default ProductCardCart