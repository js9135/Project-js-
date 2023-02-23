import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Info from "../../info/Info";
import StakeTab from './StakeTab'
import PageTitle from "../../header/PageTitle";
import Navbar from "../../header/Navbar";
import Header from "../../header/Header";

const useStyles = makeStyles({
    root: {
        overflowY: 'scroll',
        minHeight: '100vh',
        "&::-webkit-scrollbar": {
            width: '4px',
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: '#250C05',
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: '10px',
            background: '-webkit-linear-gradient(45deg, #f97d25, #f9e025 80%)',
        },
    },
    mainDiv: {
        backgroundColor: '#000',
        paddingBottom: '1rem',
        height: '80vh'
    },
    boxMain: {
        padding: '5rem 1.5rem 2rem 1.5rem'
    },

    bridgeHistoryWrap: {
        marginTop: '1.5rem'
    },


})



const StakeCMP = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.mainDiv}>

                    <Header HeaderTitle="Stake" />
                    <Box className={classes.boxMain}>
                        <Info />

                        <Box className={classes.bridgeHistoryWrap}>
                            <Typography fontWeight={700} color={'#fff'}>Stake YDF</Typography>
                            <StakeTab />
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default StakeCMP;