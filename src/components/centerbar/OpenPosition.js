import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import BTC from '../assets/images/BTC.png'
import { Link } from "react-router-dom";
import CenterBarTab from "./CenterBarTab";
 


const useStyles = makeStyles({
    BTCBox: {
        display: 'inline-block',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#000',
        padding: '2rem 0rem 2rem 0rem',
        border: '2px solid #ffffff17',
        borderRadius: '1rem',
        marginTop: '1rem',
        textDecoration: 'none',
        transition: '0.3s',
        '&:hover': {
            border: '2px solid #ffa500',
            padding: '1rem 0rem 1rem 0rem',
        }
    },

    assetIndex: {
        backgroundColor: '#ffa500',
        padding: '0.3rem 1rem',
        textAlign: 'center',
        borderRadius: '2rem',
        margin: '0rem 1rem',
        cursor: 'pointer'
    },

    coinImg: {
        width: '150px'
    }




})


const OpenPosition = () => {
    const [isShown, setIsShown] = useState(false);
    const classes = useStyles();
    return (
        <>

            <Box>
                <Typography color={'#fff'} variant="h6">Open Position</Typography>
            </Box>

            <Link className={classes.BTCBox}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <Typography className={classes.coinImg} display={'inline-block'} component={'img'} src={BTC} />
                {isShown && (
                    <Box className={classes.assetIndex}>
                        <Typography color={'#000'}>Change Position Asset/Index</Typography>
                    </Box>
                )}
            </Link>

            <Box>
                <Box mt={2}>
                    <Typography color={'#fff'} variant="h6">Type</Typography>
                </Box>
                <CenterBarTab />
            </Box>


        </>
    )
}

export default OpenPosition;