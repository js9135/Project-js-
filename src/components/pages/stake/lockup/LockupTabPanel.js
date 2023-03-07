import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";
import SliderBox from "../../bridge/SliderBox";



const useStyles = makeStyles({
    lockupHding: {
        marginTop: '2rem'
    },
    bridgeDisabledBtnWrp: {
        marginTop: '1.5rem'
    },
    bridgeDisabledBtn: {
        padding: '0.8rem 1rem !important',
        borderRadius: '0.8rem !important',
        color: '#9d9c9c !important',
    },
})

const LockupTabPanel = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.lockupHding}>
                <Typography fontWeight={700} color={'text.default'}>Staking Amount</Typography>
            </Box>
            <SliderBox />
            <Box className={classes.bridgeDisabledBtnWrp}>
                <Button className={classes.bridgeDisabledBtn}sx={{backgroundColor : 'bg.default','&:hover':{backgroundColor : 'bg.default'}}} variant="contained" fullWidth>Please enter valid inputs to stake.</Button>
            </Box>
        </>
    )
}

export default LockupTabPanel;