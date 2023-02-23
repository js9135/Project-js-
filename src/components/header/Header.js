import { Box, } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import PageTitle from "./PageTitle";
import Navbar from "./Navbar";

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
        width: '67.4%',
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
    }
})



const Header = ({HeaderTitle}) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.hdrBox}>
                <PageTitle HeaderTitle={HeaderTitle} />
                <Navbar />
            </Box>
        </>
    )
}

export default Header;