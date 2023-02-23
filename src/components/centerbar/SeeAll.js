import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import empty from '../assets/images/empty.svg'
import { Link } from "react-router-dom";



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
        padding: '2rem 1.5rem 5rem 1.5rem',
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
        padding: '3rem 6rem'
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
    },
    seeAll: {
        color: '#fff',
        textDecoration: 'none'
    }
})


const SeeAll = () => {

    const classes = useStyles();
    return (
        <>
             

                    <Box className={classes.latestStake}>
                        <Typography variant="h6" fontWeight={700} color={'#fff'}>My Latest Stake</Typography>
                        <Link className={classes.seeAll} to={'/nft'} color={'#fff'}>See All NFTs</Link>
                    </Box>

                    <Box className={classes.imptyBox}>
                        <Typography component={'img'} src={empty} width={'100%'} />
                    </Box>

                    <Box className={classes.noStake}>
                        <Typography color={'#999'}>You have no stakes yet.</Typography>
                    </Box>

                    <Box className={classes.stakebtnBox}>
                        <Link className={classes.stakebtn} to="#">Stake Today!</Link>
                    </Box>
                 
        </>
    )
}

export default SeeAll;