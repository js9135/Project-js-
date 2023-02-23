import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Info from "../../info/Info";
import logo from '../../assets/images/logo.png'
import arb from '../../assets/images/arb.svg'
import eth from '../../assets/images/eth.svg'
import swap from '../../assets/images/swap.svg'
import empty from '../../assets/images/empty.svg'
import SliderBox from "./SliderBox";
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
    switchbtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.4rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
        textTransform: 'none !important'
    },
    bridgeYDF: {
        background: "-webkit-linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },
    BridgeTopBox: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#151515',
        padding: '1rem',
        borderRadius: '0.6rem'
    },
    bridgeMainBox: {
        padding: '1rem 8rem'
    },
    BridgeTranfer: {
        padding: '1rem',
        borderRadius: '0.6rem',
        backgroundColor: '#151515',
        marginTop: '1rem',
    },
    logoBx: {
        width: '36px',
        alignSelf: 'end'
    },
    transferToAbtm: {
        display: 'flex',
        alignItems: 'center'
    },
    YDFBox: {
        marginLeft: '1rem'
    },
    YDFBox2: {
        textAlign: "right"
    },
    BridgeAvai: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    BridgeAvai2: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },




    bridgeDisabledBtnWrp: {
        marginTop: '1.5rem'
    },
    bridgeDisabledBtn: {
        padding: '0.8rem 1rem !important',
        borderRadius: '0.8rem !important',
        backgroundColor: '#000 !important',
        color: '#9d9c9c !important'
    },
    bridgeHistoryWrap: {
        marginTop: '1.5rem'
    },
    bridgeHistoryBox: {
        border: '1px solid #fffd0263',
        padding: '2rem',
        borderRadius: '0.6rem',
        marginTop: '1rem',
        textAlign: 'center'
    },
    emptyBox: {
        width: '10rem',
        display: 'inline-block'
    },
    
})



const BridgeCMP = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.mainDiv}>
                    <Header HeaderTitle="Bridge" />
                    <Box className={classes.boxMain}>
                        <Info />

                        <Box className={classes.bridgeMainBox}>
                            <Box className={classes.BridgeTopBox}>
                                <Box><Typography variant="h6" fontWeight={700} className={classes.bridgeYDF}>Bridge YDF to Arbitrum</Typography></Box>
                                <Box>
                                    <Button variant="contained" className={classes.switchbtn}>Switch to Arbitrum</Button>
                                </Box>
                            </Box>

                            <Box className={classes.BridgeTranfer}>
                                <Box className={classes.BridgeAvai}>
                                    <Box className={classes.transferToAbtm}>
                                        <Box className={classes.logoBx}>
                                            <Typography component={'img'} src={logo} width={'100%'} />
                                        </Box>
                                        <Box className={classes.YDFBox}>
                                            <Typography color={'#ffffff87'}>Transfer to Arbitrum</Typography>
                                            <Typography color={'#fff'} fontWeight={700}>YDF</Typography>
                                        </Box>
                                    </Box>
                                    <Box className={classes.YDFBox2}>
                                        <Typography color={'#ffffff87'}>Available Balance</Typography>
                                        <Typography color={'#fff'} fontWeight={700}>0 ($0)</Typography>
                                    </Box>
                                </Box>

                                <SliderBox />

                                <Box className={classes.BridgeAvai2}>
                                    <Box className={classes.transferToAbtm}>
                                        <Box className={classes.logoBx}>
                                            <Typography component={'img'} src={eth} width={'100%'} />
                                        </Box>
                                        <Box className={classes.YDFBox}>
                                            <Typography color={'#ffffff87'}>Transfer From</Typography>
                                            <Typography color={'#fff'} fontWeight={700}>Ethereum</Typography>
                                        </Box>
                                    </Box>

                                    <Box alignSelf={'center'}>
                                        <Typography component={'img'} src={swap} />
                                    </Box>

                                    <Box className={classes.transferToAbtm}>
                                        <Box className={classes.logoBx}>
                                            <Typography component={'img'} src={arb} width={'100%'} />
                                        </Box>
                                        <Box className={classes.YDFBox}>
                                            <Typography color={'#ffffff87'}>Transfer To</Typography>
                                            <Typography color={'#fff'} fontWeight={700}>Arbitrum</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.bridgeDisabledBtnWrp}>
                                    <Button className={classes.bridgeDisabledBtn} variant="contained" fullWidth>Bridge Disabled</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.bridgeHistoryWrap}>
                            <Typography fontWeight={700} color={'#fff'}>Bridge History</Typography>
                            <Box className={classes.bridgeHistoryBox}>
                                <Box className={classes.emptyBox}>
                                    <Typography component={'img'} src={empty} width={'100%'} />
                                </Box>
                                <Box height={20} />
                                <Typography variant="h6" color={'#fff'}>No bridge history logged yet!</Typography>

                                <Box height={15} />
                                <Typography color={'#999'}>No bridge history logged yet!</Typography>

                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default BridgeCMP;