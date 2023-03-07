import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";
import LockupTabPanel from "./LockupTabPanel";



const useStyles = makeStyles({
    revenueBox: {
        backgroundColor: '#fcd3492e',
        borderRadius: '0.5rem',
        padding: '1rem',
        marginTop: '1rem'
    },
})

const LockupBox = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.revenueBox} sx={{backgroundColor : 'revenue.default'}}>
                <Typography color={'revenuetext.default'}>The selected stake option includes a lockup period.
                    You are able to unstake before the lockup period ends, but you will be subject to
                    a penalty of your principal staked proportional to the amount of time you've staked
                    and however long your lockup period is.</Typography>
            </Box>
            <LockupTabPanel />
        </>
    )
}

export default LockupBox;