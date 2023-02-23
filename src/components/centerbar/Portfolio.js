import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import { useAccount, useEnsAddress } from 'wagmi'
import ReferralModal from "./ReferralModal";


const useStyles = makeStyles({


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


const Portfolio = () => {

    const classes = useStyles();

    const accountStatus = useAccount()





    return (
        <>

            <Box>

                {accountStatus.isConnected ? <Typography color={'#fff'} variant="h6">Welcome,{accountStatus.address.substring(0, 5) + "...." + accountStatus.address.substring(accountStatus.address.length - 4)}</Typography>
                    :
                    <Typography color={'#fff'} variant="h6">Welcome, ...</Typography>
                }
            </Box>

            <Box className={classes.portfolio}>
                <Box className={classes.portMainBox}>
                    <Typography color={'#fff'}>My Portfolio</Typography>
                    <Tooltip title="Includes both YDF in your wallet and the aggregate value you currently have staked." placement="bottom">
                        <Box><HelpIcon className={classes.helpBox} /></Box>
                    </Tooltip>
                </Box>

                <Box className={classes.dollar}>
                    <Typography variant="h3" fontSize={'2rem'} fontWeight={700} color={'#fff'}>$0</Typography>
                </Box>

                <Box className={classes.para}>
                    <Typography color={'#fff'}>0 YDF</Typography>
                </Box>




                {accountStatus.isConnected &&
                    <ReferralModal />
                }

                <Box>
                    <Button href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x30dcBa0405004cF124045793E1933C798Af9E66a" target={'_blank'} className={classes.buybtn} fullWidth>Buy YDF on Uniswap</Button>
                </Box>

            </Box>

        </>
    )
}

export default Portfolio;