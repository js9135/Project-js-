import { Box, Button, List, Typography } from "@mui/material";
import React from "react";
import logo from '../assets/images/logo.png'
import { makeStyles } from "@mui/styles";
import ethstroke from '../assets/images/ethstroke.svg'
import ethfilled from '../assets/images/ethfilled.svg'
import walletIcon from '../assets/images/walletIcon.svg'
import {
    useConnectModal,
    useAccountModal,
    useChainModal,
} from '@rainbow-me/rainbowkit';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link } from "react-router-dom";
import { useAccount, useBalance } from "wagmi";

const useStyles = makeStyles({
    btn: {
        border: '1px solid #ffffff3b !important',
        color: '#fff !important',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important'
    },
    btn2: {
        border: '1px solid #ffffff3b !important',
        color: '#fff !important',
        padding: '0.5rem 1rem 0.2rem 1rem !important',
        borderRadius: '3rem !important'
    },
    hdrBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '12px 2px 12px -7px #535353',
        padding: '0.5rem 1.5rem',
        position: 'fixed',
        backgroundColor: '#000',
        top: 0,
        width: '63.3%',
        zIndex: '1000'
    },
    headerList: {
        display: 'flex'
    },
    walletbtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
    },
    listitem: {
        marginLeft: '1rem'
    },
    Diswalletbtn: {
        backgroundColor: '#252525 !important',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
    }
})



const Navbar = () => {
    const classes = useStyles();
    const accountStatus = useAccount()
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();

    const { data } = useBalance({
        address: `${accountStatus.address}`
    })



    return (
        <>

            <Box>
                <List className={classes.headerList}>
                    <Box className={classes.listitem}>
                        <Button className={classes.btn} variant="outlined" startIcon={<Typography component={'img'} src={logo} width={20} />}>
                            $0.0286
                        </Button>
                    </Box>

                    <Box className={classes.listitem}>
                        <Button className={classes.btn} variant="outlined" startIcon={<Typography component={'img'} src={ethstroke} width={24} />}>
                            {accountStatus.isConnected ? <Typography>${data?.formatted} {data?.symbol}</Typography>: <Typography color={'#fff'}>$0.00</Typography>}
                        </Button>

                    </Box>

                    {accountStatus.isConnected ?
                        <Box className={classes.listitem}>
                            <Button href={`https://bscscan.com/address/${accountStatus.address.substring(0, 5) + "...." + accountStatus.address.substring(accountStatus.address.length - 4)}`} target={'_blank'} className={classes.btn} variant="outlined" startIcon={<Typography component={'img'} src={walletIcon} width={24} />}>
                                {accountStatus.isConnected && `${accountStatus.address.substring(0, 5) + "...." + accountStatus.address.substring(accountStatus.address.length - 4)}`}

                            </Button>
                        </Box>
                        :
                        null
                    }



                    <Box className={classes.listitem}>
                        <Typography component={'div'} display="inline-block" className={classes.btn2}>
                            <Link to="#"> <Typography component={'img'} src={ethfilled} width={24} /></Link>
                        </Typography>
                    </Box>


                    <Box className={classes.listitem}>

                        {openConnectModal && (
                            <Button onClick={openConnectModal} className={classes.walletbtn} variant="contained">
                                Connect Wallet
                            </Button>

                        )}

                        {openAccountModal && (
                            <Button onClick={openAccountModal} className={classes.Diswalletbtn} variant="contained">
                                DisConnect Wallet
                            </Button>
                        )}



                    </Box>
                </List>
            </Box>

        </>
    )
}

export default Navbar;