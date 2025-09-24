import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);


const OrderTypeChart = () => {
    return (
        <div className="dataCard revenueCard">
            {/* <Line
                data={{
                    labels: revenueData.map((data) => data.label),
                    datasets: [
                        {
                            label: "Revenue",
                            data: revenueData.map((data) => data.revenue),
                            backgroundColor: "#064FF0",
                            borderColor: "#064FF0",
                        },
                        {
                            label: "Cost",
                            data: revenueData.map((data) => data.cost),
                            backgroundColor: "#FF3030",
                            borderColor: "#FF3030",
                        },
                    ],
                }}
                options={{
                    elements: {
                        line: {
                            tension: 0.5,
                        },
                    },
                    plugins: {
                        title: {
                            text: "Monthly Revenue & Cost",
                        },
                    },
                }}
            /> */}
        </div>
    )
}

export default OrderTypeChart