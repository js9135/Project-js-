import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Slider from '@mui/material/Slider';

const useStyles = makeStyles({
    sliderRange: {
        marginTop: '2rem',
        marginBottom: '0px !important',
        '& .MuiSlider-track': {
            color: '#ffa500',
        },

        '& .MuiSlider-rail': {
            color: '#ffba02',
        },

        '& .MuiSlider-thumb': {
            color: '#fffd02',
        },
        '& .MuiSlider-markLabel': {
            marginTop: '-3rem',
            transform: 'translateX(-125%)',
            marginLeft: '6px'
        },
    },

    sliderRangeWrap: {
        backgroundColor: '#000',
        padding: '0.5rem 1rem',
        marginTop: '1rem',
        borderRadius: '0.6rem'
    },
    enterAmountBox: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    buyYDFbtn: {
        background: "-webkit-linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: '700'
    },

})


const marks = [
    {
        value: 0,
        label: '0',
    },

    {
        value: 100,
        label: 'Max',
    },
];

function valuetext(value) {
    return `${value}°C`;
}
const SliderBox = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.sliderRangeWrap} sx={{backgroundColor : 'bg.default'}}>
                <Box className={classes.enterAmountBox}>
                    <Typography color={'text.default'}>Enter YDF Amount</Typography>
                    <Link className={classes.buyYDFbtn} to="#">Buy YDF</Link>
                </Box>
                <Box>
                    <Slider
                        aria-label="Always visible"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        step={10}
                        marks={marks}
                        valueLabelDisplay="on"
                        className={classes.sliderRange}
                        sx={{'& .MuiSlider-markLabel': {
                           color : 'text.default'
                        },}}
                    />
                </Box>
            </Box>
        </>
    )
}

export default SliderBox;