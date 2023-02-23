import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import query from '../assets/images/query.svg'
import { useAccount } from "wagmi";



const useStyles = makeStyles({
    infomation: {
        backgroundColor: '#FECDD3',
        padding: '0.8rem 1rem',
        display: 'flex',
        alignItems: 'center',
        margin: '2rem 0rem 1rem 0rem',

        borderRadius: '1rem'
    },
})



const Info = () => {
    const classes = useStyles();
    const accountStatus = useAccount()
    return (
        <>
        {accountStatus.isConnected ?
            null
            :
            <Box className={classes.infomation}>
                <Typography component={'img'} src={query} width={40} />
                <Box width={15} />
                <Typography color={'#8A1939'} fontWeight={700}>Please connect your wallet on a valid network to continue: Arbitrum, Ethereum Mainnet</Typography>
            </Box>
            }
        </>
    )
}

export default Info;