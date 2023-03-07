import React, { useContext, } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, List, Tooltip, Typography } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import { useAccount, useBalance, useEnsAddress } from 'wagmi'
import ReferralModal from "./ReferralModal";
import ethstroke from '../assets/images/ethstroke.svg'
import ethstrokeb from '../assets/images/ethstrokeb.svg'
import logo from '../assets/images/logo.png'
import walletIcon from '../assets/images/walletIcon.svg'
import walletIconb from '../assets/images/walletIconb.svg'
import { ColorModeContext } from "../../store/Index";

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
    },
    headerList: {
        display: 'none',
        '@media(max-width : 900px)': {
            display: 'block'
        }
    },

    btn: {
        border: '1px solid #8e8e8eb3 !important',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important'
    },
})


const Portfolio = () => {

    const classes = useStyles();

    const accountStatus = useAccount()


    const { data } = useBalance({
        address: `${accountStatus.address}`
    })

    const { mode, toggleMode } = useContext(ColorModeContext)
    return (
        <>

            <Box>

                {accountStatus.isConnected ? <Typography color={'text.default'} variant="h6">Welcome,{accountStatus.address.substring(0, 5) + "...." + accountStatus.address.substring(accountStatus.address.length - 4)}</Typography>
                    :
                    <Typography color={'text.default'} variant="h6">Welcome, ...</Typography>
                }
            </Box>

            <List className={classes.headerList}>
                <Box className={classes.listitem}>
                    <Button className={classes.btn} fullWidth sx={{ color: 'text.default', }} variant="outlined" startIcon={<Typography component={'img'} src={logo} width={20} />}>
                        $0.0286
                    </Button>
                </Box>

                <Box height={20} />

                <Box className={classes.listitem}>
                    <Button className={classes.btn} fullWidth sx={{ color: 'text.default', }} variant="outlined" startIcon={<Typography component={'img'} src={`${mode === 'dark' ? ethstroke : ethstrokeb}`} width={24} />}>
                        {accountStatus.isConnected ? <Typography>${data?.formatted} {data?.symbol}</Typography> : <Typography color={'text.default'}>$0.00</Typography>}
                    </Button>

                </Box>

                <Box height={20} />

                {accountStatus.isConnected ?
                    <Box className={classes.listitem}>
                        <Button fullWidth sx={{ color: 'text.default', }} href={`https://bscscan.com/address/${accountStatus.address.substring(0, 5) + "...." + accountStatus.address.substring(accountStatus.address.length - 4)}`} target={'_blank'} className={classes.btn} variant="outlined" startIcon={<Typography component={'img'} src={`${mode === 'dark' ? walletIcon : walletIconb}`} width={24} />}>
                            {accountStatus.isConnected && `${accountStatus.address.substring(0, 5) + "...." + accountStatus.address.substring(accountStatus.address.length - 4)}`}

                        </Button>
                    </Box>
                    :
                    null
                }



            </List>

            <Box className={classes.portfolio} sx={{ backgroundColor: 'disBtn.default' }}>
                <Box className={classes.portMainBox}>
                    <Typography color={'text.default'}>My Portfolio</Typography>
                    <Tooltip title="Includes both YDF in your wallet and the aggregate value you currently have staked." placement="bottom">
                        <Box><HelpIcon className={classes.helpBox} /></Box>
                    </Tooltip>
                </Box>

                <Box className={classes.dollar}>
                    <Typography variant="h3" fontSize={'2rem'} fontWeight={700} color={'text.default'}>$0</Typography>
                </Box>

                <Box className={classes.para}>
                    <Typography color={'text.default'}>0 YDF</Typography>
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