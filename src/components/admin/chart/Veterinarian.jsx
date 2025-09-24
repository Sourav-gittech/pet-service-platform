import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Veterinarian = () => {
    const [chart, setChart] = useState([]);

    const baseUrl = 'https://api.coinranking.com/v2/coins?limit=10';
    const api = 'coinranking60ff2237de0382a8dc76daae5f3ed391e3da0906331ae0c1';

    const color = [
        'rgba(255, 99, 132, 1)',   // red
        'rgba(54, 162, 235, 1)',   // blue
        'rgba(255, 206, 86, 1)',   // yellow
        'rgba(75, 192, 192, 1)',   // teal
        'rgba(153, 102, 255, 1)',  // purple
        'rgba(255, 159, 64, 1)',   // orange
        'rgba(199, 199, 199, 1)',  // grey
        'rgba(255, 105, 180, 1)',  // pink
        'rgba(0, 128, 128, 1)',    // dark teal
        'rgba(0, 0, 128, 1)',      // navy
    ];

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const response = await fetch(baseUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': api
                    }
                });
                const json = await response.json();
                console.log(json);
                setChart(json.data.coins);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCoin();
    }, []);

    return (
        <div className='mx-auto'>
            <div className='mb-2'>
                {chart.length === 0 && <h5 className='text-center'>Loading...</h5>}
                {chart.length > 0 && (
                    <Doughnut className='mx-auto'
                        data={{
                            labels: chart.map((coin) => coin.name),
                            datasets: [
                                {
                                    label: 'Price',
                                    data: chart.map((coin) => coin.price),
                                    backgroundColor: color,
                                    borderColor: 'white',
                                    borderWidth: 1
                                },
                            ],
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Veterinarian;
