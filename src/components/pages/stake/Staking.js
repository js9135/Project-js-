import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from '@mui/styles';
import freenft from '../../assets/images/freenft.png'


const useStyles = makeStyles({
    mainBox: {
        backgroundColor: '#151515',
        padding: '1rem',
        borderRadius: '0.6rem',
        marginTop: '2rem'
    },
    mainBox2: {
        backgroundColor: '#151515',
        padding: '0.5rem',
        borderRadius: '0.6rem',
        marginTop: '2rem'
    },
    tabhding: {
        background: '-webkit-linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: '700 !important'
    },
    revenueBox: {
        backgroundColor: '#fcd3492e',
        borderRadius: '0.5rem',
        padding: '1rem',
        marginTop: '1rem'
    },
    listitem: {
        display: 'inherit !important',
        padding: '0.8rem 0.5rem !important'
    },
    freenft: {
        filter: 'invert(1)'
    }
})


const Staking =(
    {LOCK_YDF,
    LOCK_AMOUNT,
    DAY,
    APR,
    EARN_YDF,
    EARN_AMOUNT,
    NFT_UPON}
    )=>{
    const classes = useStyles();
    return(
        <>
        <Box className={classes.mainBox2} sx={{ backgroundColor: 'bg.default' }}>
                    <List>
                        <ListItem className={classes.listitem}>
                            <Typography color={'text.default'}>Lock Amount:</Typography>
                            <Typography className={classes.tabhding} variant="h6">{LOCK_YDF}</Typography>
                            <Typography color={'text.default'}>(${LOCK_AMOUNT})</Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <Typography color={'text.default'}>Lockup Period:</Typography>
                            <Typography className={classes.tabhding} variant="h6">{DAY} days</Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <Typography color={'text.default'}>APR:</Typography>
                            <Typography className={classes.tabhding} variant="h6">{APR}%</Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <Typography color={'text.default'}>Earn Amount (every 365 days):</Typography>
                            <Typography className={classes.tabhding} variant="h6">{EARN_YDF} YDF</Typography>
                            <Typography color={'text.default'}>(${EARN_AMOUNT})</Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <Typography color={'text.default'} variant="h6" fontWeight={700}>You will receive a free {NFT_UPON} NFT upon staking!</Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <Typography className={classes.freenft} component={'img'} src={freenft} width={'100%'} />
                        </ListItem>
                    </List>
                </Box>
        </>
    )
}

export default Staking;