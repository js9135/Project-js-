import { Box, } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Info from "../../info/Info";
import Header from "../../header/Header";
import OtcTab from "./OtcTab";



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

    statsBox: {
        background: 'linear-gradient(290deg, #0f0f0f, #282828)',
        padding: '1rem 1rem',
        borderRadius: '0.5rem',
        marginTop: '1rem'
    }

})





const OtcCMP = () => {
    const classes = useStyles();


    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.mainDiv}>
                    <Header HeaderTitle="OTC" />
                    <Box className={classes.boxMain}>
                        <Info />
                        <OtcTab />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default OtcCMP;