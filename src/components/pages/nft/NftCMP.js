import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Info from "../../info/Info";
import empty from '../../assets/images/empty.svg'

import Header from "../../header/Header";
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

    stakebtn: {
        fontFamily: 'poppins',
        display: 'inline-block',
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.5rem 1rem',
        textDecoration: 'none',
        borderRadius: '5rem',
        color: '#000',
        marginTop: '2rem',
        fontWeight: '500',
        fontSize: '1rem',
        textTransform: 'none'
    },
    stakebtnBox: {
        textAlign: 'center',
        paddingBottom: '2rem'
    },
    lockupStats: {
        marginTop: '2rem'
    },
    nftBox: {
        backgroundColor: '#151515',
        padding: '1rem',
        marginTop: '1.5rem',
        borderRadius: '0.6rem',
    },
    nftBoxsmall: {
        backgroundColor: '#151515',
        padding: '1rem',
        marginTop: '1.5rem',
        borderRadius: '0.6rem',
        width: '45.5%'
    },
    nftBox2: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    claimBtn: {
        backgroundColor: '#404040 !important',
        color: '#ffffff70 !important',
        borderRadius: '2rem !important',
        padding: '0.5rem 1rem !important',
        marginLeft: '1.5rem !important'
    },
    stakedNft: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchWrap: {
        display: 'flex',
        alignItems: 'center'
    },
    searchBar: {
        display: 'flex',
        border: '1px solid #ffffff3b',
        alignItems: 'center',
        borderRadius: '2rem'
    }

})



const NftCMP = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.mainDiv}>
                    <Header HeaderTitle="NFT" />
                    <Box className={classes.boxMain}>
                        <Info />

                        <Box className={classes.lockupStats}>
                            <Typography fontWeight={700} color={'#fff'}>My Staked Lockup Stats (In YDF Value)</Typography>
                        </Box>

                        <Box className={classes.nftBox}>
                            <Typography color={'#fff'} variant="h5" fontWeight={700}>0 YDF</Typography>
                            <Box height={5} />
                            <Typography color={'#999'}>Total Earning Per Annum</Typography>
                        </Box>

                        <Box className={classes.nftBox2}>
                            <Box className={classes.nftBoxsmall}>
                                <Typography color={'#fff'} variant="h5" fontWeight={700}>0 YDF</Typography>
                                <Box height={5} />
                                <Typography color={'#999'}>Unlocked</Typography>
                            </Box>
                            <Box className={classes.nftBoxsmall}>
                                <Typography color={'#fff'} variant="h5" fontWeight={700}>0 YDF</Typography>
                                <Box height={5} />
                                <Typography color={'#999'}>Locked btw. 0 & 30 days</Typography>
                            </Box>
                        </Box>

                        <Box className={classes.nftBox2}>
                            <Box className={classes.nftBoxsmall}>
                                <Typography color={'#fff'} variant="h5" fontWeight={700}>0 YDF</Typography>
                                <Box height={5} />
                                <Typography color={'#999'}>Locked btw. 30 & 120 days</Typography>
                            </Box>
                            <Box className={classes.nftBoxsmall}>
                                <Typography color={'#fff'} variant="h5" fontWeight={700}>0 YDF</Typography>
                                <Box height={5} />
                                <Typography color={'#999'}>Locked >120 days</Typography>
                            </Box>
                        </Box>

                        <Box className={classes.bridgeHistoryWrap}>
                            <Box className={classes.stakedNft}>
                                <Box><Typography fontWeight={700} color={'#fff'}>Staked NFTs</Typography></Box>
                                <Box className={classes.searchWrap}>
                                    <Box className={classes.searchBar}>
                                        <Typography sx={{ cursor: 'context-menu', paddingLeft: '1rem' }} color={'#979494'}>Search ID #</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            variant="standard"
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    color: '#fff',
                                                }
                                            }}
                                        />
                                        <Button
                                            sx={{
                                                borderRadius: '0rem',
                                                backgroundColor: 'transparent',
                                                textTransform: 'none',
                                                borderLeft: '1px solid #ffffff3b',
                                                color: '#717171',
                                                '&:hover': {
                                                    backgroundColor: '#ffa500',
                                                    color: '#000'
                                                }
                                            }}
                                            variant="contained"
                                        >Search
                                        </Button>

                                        <Button
                                            sx={{
                                                borderRadius: '0rem 2rem 02rem 0rem',
                                                backgroundColor: 'transparent',
                                                textTransform: 'none',
                                                color: '#717171',
                                                borderLeft: '1px solid #ffffff3b',
                                                '&:hover': {
                                                    backgroundColor: '#ffa500',
                                                    color: '#000'
                                                }
                                            }}
                                            variant="contained">
                                            Clear
                                        </Button>
                                    </Box>

                                    <Box>
                                        <Button className={classes.claimBtn} variant="contained">Claim All Rewards</Button>
                                    </Box>

                                </Box>
                            </Box>

                            <Box className={classes.bridgeHistoryBox}>
                                <Box className={classes.emptyBox}>
                                    <Typography component={'img'} src={empty} width={'100%'} />
                                </Box>
                                <Box height={20} />
                                <Typography variant="h6" color={'#fff'}>No NFTs Found</Typography>

                                <Box height={15} />
                                <Typography color={'#999'}>We didn't find any stake NFTs in your wallet.</Typography>

                                <Box className={classes.stakebtnBox}>
                                    <Link className={classes.stakebtn} to="/stake">Stake Today!</Link>
                                </Box>

                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default NftCMP;