import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import empty from '../assets/images/empty.svg'
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import OpenPosition from "./OpenPosition";
import MyOffer from "./MyOffer";


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
        padding: '3rem 1.5rem 5rem 1.5rem',
        height: '80vh'
    },
    hding: {
        fontSize: '1.5rem !important'
    },

    portfolio: {
        backgroundColor: '#151515',
        padding: '1rem',
        margin: '1rem 0rem',
        borderRadius: '1rem'
    },
    portMainBox: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    latestStake: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '1rem'
    },
    helpBox: {
        color: '#ffa500',
        cursor: 'pointer'
    },
    dollar: {
        marginTop: '0.5rem'
    },
    para: {
        marginTop: '0.5rem'
    },
    buybtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.6rem !important',
        borderRadius: '2rem !important',
        color: '#fff !important',
        marginTop: '1rem !important'
    },
    rewardbtn: {
        background: 'linear-gradient(45deg, #ff007a8c 10%, #53a0ffcc 90%)',
        padding: '0.6rem !important',
        borderRadius: '2rem !important',
        color: '#fff !important',
        marginTop: '1rem !important'
    },
    imptyBox: {
        padding: '3rem 8rem'
    },
    noStake: {
        textAlign: 'center'
    },
    stakebtn: {
        fontFamily: 'poppins',
        display: 'inline-block',
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.5rem 1rem',
        textTransform: 'none',
        textDecoration: 'none',
        borderRadius: '5rem',
        color: '#000',
        marginTop: '2rem',
        fontWeight: '500',
        fontSize: '1rem',
    },
    stakebtnBox: {
        textAlign: 'center',
        paddingBottom: '2rem'
    }
})


const CenterBar4 = () => {

    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.mainDiv}>
                    <Portfolio />
                    <MyOffer OfferHeading={'My Offers Received'} OfferPara={'You have no offers yet'} />
                    <MyOffer OfferHeading={'My Offers Made'} OfferPara={'You have not made any offers yet'} />
                    <MyOffer OfferHeading={'Your Active Pools'} OfferPara={'You have no active pools.'} />
                    <Box height={30}/>
                </Box>
            </Box>
        </>
    )
}

export default CenterBar4;