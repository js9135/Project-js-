import React, { useContext, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import BTC from '../assets/images/BTC.png'
import BTCw from '../assets/images/BTCw.png'
import { Link } from "react-router-dom";
import CenterBarTab from "./CenterBarTab";
import { ColorModeContext } from "../../store/Index";


const useStyles = makeStyles({
    BTCBox: {
        display: 'inline-block',
        width: '100%',
        textAlign: 'center',
        padding: '2rem 0rem 2rem 0rem',
        border: '2px solid #4e4e4e',
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

    const { mode, toggleMode } = useContext(ColorModeContext)
    return (
        <>

            <Box>
                <Typography color={'text.default'} variant="h6">Open Position</Typography>
            </Box>

            <Link className={classes.BTCBox} sx={{backgroundColor : 'bg.default'}}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                {mode === 'dark' ?<Typography className={classes.coinImg} display={'inline-block'} component={'img'} src={BTC} /> :<Typography className={classes.coinImg} display={'inline-block'} component={'img'} src={BTCw} />}
                {isShown && (
                    <Box className={classes.assetIndex}>
                        <Typography color={'#000'}>Change Position Asset/Index</Typography>
                    </Box>
                )}
            </Link>

            <Box>
                <Box mt={2}>
                    <Typography color={'text.default'} variant="h6">Type</Typography>
                </Box>
                <CenterBarTab />
            </Box>


        </>
    )
}

export default OpenPosition;