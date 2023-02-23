import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, } from "@mui/material";


const useStyles = makeStyles({
    offerBox: {
        border: '1px solid #ffffff2e',
        borderRadius: '0.5rem',
        padding: '1.5rem 1rem',
        textAlign: 'center',
        marginTop: '1rem'
    },
    hding: {
        marginTop: '2rem'
    }



})


const MyOffer = ({ OfferHeading, OfferPara }) => {

    const classes = useStyles();
    return (
        <>

            <Box>
                <Box className={classes.hding}>
                    <Typography variant="h6" color={'#fff'}>{OfferHeading}</Typography>
                </Box>
                <Box className={classes.offerBox}>
                    <Typography color={'#999'}>{OfferPara}</Typography>
                </Box>
            </Box>

        </>
    )
}

export default MyOffer;