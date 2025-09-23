import * as React from 'react';
import { Container } from '@mui/material';
import ProductCard from './ProductCard';
import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

const ProductSection = () => {

    const all_prod = [
        { id: 1, name: 'Purina of the lata hills', img: 'product-4-150x150.jpg', category: 'Adulto', price: '120.00' },
        { id: 2, name: 'Purina pro plan urinary', img: 'product-3-300x300.jpg', category: 'Adulto', price: '90.00' },
        { id: 3, name: 'Purina beneful perros', img: 'product-2-300x300.jpg', category: '', price: '80.00' },
        { id: 4, name: 'Purina Cat Chow Plus', img: 'product-1-300x300.jpg', category: '', price: '60.00' }
    ]

    const dog_treats = [
        { id: 1, name: 'Purina of the lata hills', img: 'product-4-150x150.jpg', category: 'Adulto', price: '120.00' },
        { id: 2, name: 'Purina pro plan urinary', img: 'product-3-300x300.jpg', category: 'Adulto', price: '90.00' },
        { id: 3, name: 'Purina of the lata hills', img: 'product-4-150x150.jpg', category: 'Adulto', price: '120.00' },
        { id: 4, name: 'Purina pro plan urinary', img: 'product-3-300x300.jpg', category: 'Adulto', price: '90.00' }
    ]

    const dog_food = [
        { id: 1, name: 'Purina beneful perros', img: 'product-2-300x300.jpg', category: '', price: '80.00' },
        { id: 2, name: 'Purina Cat Chow Plus', img: 'product-1-300x300.jpg', category: '', price: '60.00' },
        { id: 3, name: 'Purina beneful perros', img: 'product-2-300x300.jpg', category: '', price: '80.00' },
        { id: 4, name: 'Purina Cat Chow Plus', img: 'product-1-300x300.jpg', category: '', price: '60.00' }
    ]

    const special_deal = [
        { id: 1, name: 'Purina of the lata hills', img: 'product-4-150x150.jpg', category: 'Adulto', price: '120.00' },
        { id: 2, name: 'Purina pro plan urinary', img: 'product-3-300x300.jpg', category: 'Adulto', price: '90.00' },
        { id: 3, name: 'Purina of the lata hills', img: 'product-4-150x150.jpg', category: 'Adulto', price: '120.00' },
        { id: 4, name: 'Purina pro plan urinary', img: 'product-3-300x300.jpg', category: 'Adulto', price: '90.00' }
    ]

    const puppy_food = [
        { id: 1, name: 'Purina beneful perros', img: 'product-2-300x300.jpg', category: '', price: '80.00' },
        { id: 2, name: 'Purina Cat Chow Plus', img: 'product-1-300x300.jpg', category: '', price: '60.00' },
        { id: 3, name: 'Purina beneful perros', img: 'product-2-300x300.jpg', category: '', price: '80.00' },
        { id: 4, name: 'Purina Cat Chow Plus', img: 'product-1-300x300.jpg', category: '', price: '60.00' }
    ]

    const [value, setValue] = useState("all_prod");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="bg-gradient-to-b from-[#F8FAFC] to-[#FDF7F9] h-screen">
            <Container maxWidth="xl" className='text-center'>
                <div className='text-[#FBAB2A] text-[16px] pt-16'>OUR STORE</div>
                <h2 className='text-[#180A32] text-[48px] font-extrabold'>Our Best Selling Products</h2>
                <Box className='relative'>
                    <img src="/product-section/Product-section-design-element.png" alt="" className='absolute left-30 top-10 opacity-50' />
                    <img src="/product-section/Lined-circle-design-element.png" alt="" className='absolute right-20 top-20 opacity-50' />
                    <Box className='relative flex flex-col items-center justify-center pt-10'>

                        <Tabs value={value} onChange={handleChange} centered sx={{
                            marginBottom: 3,
                            "& .MuiTab-root": {
                                color: "gray",
                            },
                            "& .Mui-selected": {
                                color: '#FBAB2A',
                            },
                            "& .MuiTabs-indicator": {
                                backgroundColor: '#FBAB2A',
                            }
                        }}>
                            <Tab label="All Products" value="all_prod" />
                            <Tab label="Dog Treats" value="dog_treats" />
                            <Tab label="Dog Food" value="dog_food" />
                            <Tab label="Special Deal" value="special_deal" />
                            <Tab label="Puppy Food" value="puppy_food" />
                        </Tabs>

                        <Box className='flex'>
                            {value === "all_prod" &&
                                all_prod.map(prod => (
                                    <ProductCard key={prod.id} data={prod} />
                                ))}
                            {value === "dog_treats" &&
                                dog_treats.map(prod => (
                                    <ProductCard key={prod.id} data={prod} />
                                ))}
                            {value === "dog_food" &&
                                dog_food.map(prod => (
                                    <ProductCard key={prod.id} data={prod} />
                                ))}
                            {value === "special_deal" &&
                                special_deal.map(prod => (
                                    <ProductCard key={prod.id} data={prod} />
                                ))}
                            {value === "puppy_food" &&
                                puppy_food.map(prod => (
                                    <ProductCard key={prod.id} data={prod} />
                                ))}
                        </Box>
                    </Box>
                    <Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ProductSection