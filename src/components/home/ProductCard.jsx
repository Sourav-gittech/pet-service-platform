import React from "react";
import './../../css/product_card.css'
import { Box } from "@mui/material";

const ProductCard = (props) => {
    
    const { data } = props;

    return (
        <Box className="card mx-4">
            <Box className="card__shine"></Box>
            <Box className="card__glow"></Box>
            <Box className="card__content">

                <Box className="card__badge">NEW</Box>

                <Box style={{ "--bg-color": "#a78bfa" }} className="card__image">
                    <img src={`/product-section/${data.img}`} alt="" />
                </Box>

                <Box className="card__text">
                    <p className="card__title">{data.name}</p>
                    <p className="card__description">{data.category === '' ? 'Uncategorized' : data.category}</p>
                </Box>

                <Box className="card__footer">
                    <Box className="card__price">${data.price}</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductCard