import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from "chart.js";
import { Box } from "@mui/material";
ChartJS.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
);
const ChartP = () => {
    const [data, setData] = useState({
        labels: [11, 13, 16, 18, 21, 45],
        datasets: [
            {
                label: "First Dataset",
                data: [0.425, 0.043, 0.412, 0.406, 0.41, 0.25],
                backgroundColor: "#ffa500",
                borderColor: "black",
                tension: 0.4,
    
                
            },
        ],
    });
    return (
        <>
            <Box>
                <Line data={data}>hello</Line>
            </Box>
        </>
    );
};

export default ChartP;
