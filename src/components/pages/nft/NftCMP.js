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
        '@media(max-width  : 1200px)':{
            overflowY : 'inherit'
                    },
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
        height: '80vh',
        '@media(max-width : 1200px)': {
            height: 'auto'
        }
    },
    boxMain: {
        padding: '5rem 1.5rem 2rem 1.5rem',
        '@media(max-width : 1200px)': {
            padding: '2rem 1.5rem 2rem 1.5rem',
        }
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
        border: '1px solid #ffba0263',
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
        width: '45.5%',
        '@media(max-width : 900px)': {
            width: '96%',
            '@media(max-width : 600px)': {
                width: '90%'
            }
        }
    },
    nftBox2: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media(max-width : 900px)': {
            display: 'inherit'
        }
    },
    claimBtn: {
        color: '#999 !important',
        borderRadius: '2rem !important',
        padding: '0.5rem 1rem !important',
        marginLeft: '1.5rem !important',
        '@media(max-width : 900px)': {
            padding: '0.5rem 0.5rem !important',
            marginLeft: '0.5rem !important',
            '@media(max-width : 600px)': {
                marginLeft: '0rem !important',
                marginTop: '1rem !important',
                width: '100%'
            }
        }
    },
    stakedNft: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media(max-width : 900px)': {
            display: 'inherit'
        }
    },
    searchWrap: {
        display: 'flex',
        alignItems: 'center',
        '@media(max-width : 900px)': {
            display: 'inherit',
            marginTop: '1rem',
        }
    },
    searchBar: {
        display: 'flex',
        border: '1px solid #999',
        alignItems: 'center',
        borderRadius: '2rem'
    }

})



const NftCMP = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root} sx={{"&::-webkit-scrollbar-track": {
            backgroundColor: 'Sliderroot.default',
        },}}>
                <Box className={classes.mainDiv} sx={{backgroundColor : 'bg.default'}}>
                    <Header HeaderTitle="NFT" />
                    <Box className={classes.boxMain}>
                        <Info />

                        <Box className={classes.lockupStats} >
                            <Typography fontWeight={700} color={'text.default'}>My Staked Lockup Stats (In YDF Value)</Typography>
                        </Box>

                        <Box className={classes.nftBox} sx={{backgroundColor : 'disBtn.default'}}>
                            <Typography color={'text.default'} variant="h5" fontWeight={700}>0 YDF</Typography>
                            <Box height={5} />
                            <Typography color={'#999'}>Total Earning Per Annum</Typography>
                        </Box>

                        <Box className={classes.nftBox2} >
                            <Box className={classes.nftBoxsmall} sx={{backgroundColor : 'disBtn.default'}}>
                                <Typography color={'text.default'} variant="h5" fontWeight={700}>0 YDF</Typography>
                                <Box height={5} />
                                <Typography color={'#999'}>Unlocked</Typography>
                            </Box>
                            <Box className={classes.nftBoxsmall} sx={{backgroundColor : 'disBtn.default'}}>
                                <Typography color={'text.default'} variant="h5" fontWeight={700}>0 YDF</Typography>
                                <Box height={5} />
                                <Typography color={'#999'}>Locked btw. 0 & 30 days</Typography>
                            </Box>
                        </Box>

                        <Box className={classes.nftBox2}>
                            <Box className={classes.nftBoxsmall} sx={{backgroundColor : 'disBtn.default'}}>
                                <Typography color={'text.default'} variant="h5" fontWeight={700}>0 YDF</Typography>
                                <Box height={5} />
                                <Typography color={'#999'}>Locked btw. 30 & 120 days</Typography>
                            </Box>
                            <Box className={classes.nftBoxsmall} sx={{backgroundColor : 'disBtn.default'}}>
                                <Typography color={'text.default'} variant="h5" fontWeight={700}>0 YDF</Typography>
                                <Box height={5} />
                                <Typography color={'#999'}>Locked > 120 days</Typography>
                            </Box>
                        </Box>

                        <Box className={classes.bridgeHistoryWrap}>
                            <Box className={classes.stakedNft}>
                                <Box><Typography fontWeight={700} color={'text.default'}>Staked NFTs</Typography></Box>
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
                                                borderLeft: '1px solid #999',
                                                color: '#717171',
                                                boxShadow : 'inherit',
                                                '&:hover': {
                                                    backgroundColor: '#ffa500',
                                                    color: '#000'
                                                },
                                                '@media(max-width : 600px)': {
                                                    padding: '6px'
                                                }
                                            }}
                                            variant="contained"
                                        >Search
                                        </Button>

                                        <Button
                                            sx={{
                                                boxShadow : 'inherit',
                                                borderRadius: '0rem 2rem 02rem 0rem',
                                                backgroundColor: 'transparent',
                                                textTransform: 'none',
                                                color: '#717171',
                                                borderLeft: '1px solid #999',
                                                '&:hover': {
                                                    backgroundColor: '#ffa500',
                                                    color: '#000'
                                                },
                                                '@media(max-width : 600px)': {
                                                    padding: '6px'
                                                }
                                            }}
                                            variant="contained">
                                            Clear
                                        </Button>
                                    </Box>

                                    <Box>
                                        <Button className={classes.claimBtn} sx={{backgroundColor : 'disBtn.default','&:hover':{backgroundColor : 'disBtn.default'}}} variant="contained">Claim All Rewards</Button>
                                    </Box>

                                </Box>
                            </Box>

                            <Box className={classes.bridgeHistoryBox}>
                                <Box className={classes.emptyBox}>
                                    <Typography component={'img'} src={empty} width={'100%'} />
                                </Box>
                                <Box height={20} />
                                <Typography variant="h6" color={'text.default'}>No NFTs Found</Typography>

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