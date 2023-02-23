import { Box, Button, IconButton, ListItemIcon, Menu, MenuItem, Switch, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Info from "../../info/Info";
import empty from '../../assets/images/empty.svg'
import Header from "../../header/Header";
import { Link } from "react-router-dom";
import gear from '../../assets/images/gear.svg'
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import TopTrader from "./TopTrader";


const useStyles = makeStyles({
    root: {
        overflowY: 'scroll',
        minHeight: '100vh',
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
        height: '80vh'
    },
    boxMain: {
        padding: '5rem 1.5rem 2rem 1.5rem'
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
        border: '1px solid #fffd0263',
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
        width: '45.5%'
    },
    nftBox2: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    claimBtn: {
        backgroundColor: '#404040 !important',
        color: '#ffffff70 !important',
        borderRadius: '2rem !important',
        padding: '0.5rem 1rem !important',
        marginLeft: '1.5rem !important'
    },
    stakedNft: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchWrap: {
        display: 'flex',
        alignItems: 'center'
    },
    searchBar: {
        display: 'flex',
        border: '1px solid #ffffff3b',
        alignItems: 'center',
        borderRadius: '2rem',
        padding: '0.2rem 1rem'
    },
    menuItem: {
        justifyContent: 'space-between !important',
    },

    switch: {
        marginLeft: '2rem'
    },
    topTrader : {
        marginTop : '1.5rem'
    }

})



const LeadBoardCMP = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.mainDiv}>
                    <Header HeaderTitle="Perps Stats" />
                    <Box className={classes.boxMain}>
                        <Info />
                        <Box className={classes.bridgeHistoryWrap}>
                            <Box className={classes.stakedNft}>
                                <Box><Typography fontWeight={700} color={'#fff'}>Top Traders</Typography></Box>
                                <Box className={classes.searchWrap}>
                                    <Box className={classes.searchBar}>
                                        <TextField
                                            id="outlined-basic"
                                            variant="standard"
                                            placeholder="Search address..."
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    color: '#fff',
                                                }
                                            }}
                                        />

                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <Typography component={'img'} src={gear} />
                                        </IconButton>

                                    </Box>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}

                                        PaperProps={{
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <Box>
                                            <Typography ml={2}>Filter By</Typography>
                                        </Box>

                                        <MenuItem className={classes.menuItem}>
                                            This Month
                                            <ListItemIcon>
                                                <Switch className={classes.switch} />
                                            </ListItemIcon>

                                        </MenuItem>
                                        <MenuItem className={classes.menuItem}>
                                            Last Month
                                            <ListItemIcon>
                                                <Switch className={classes.switch} />
                                            </ListItemIcon>

                                        </MenuItem>
                                        <MenuItem className={classes.menuItem}>
                                            All Time
                                            <ListItemIcon>
                                                <Switch className={classes.switch} />
                                            </ListItemIcon>

                                        </MenuItem>
                                    </Menu>

                                </Box>
                            </Box>


                        </Box>

                        <Box className={classes.topTrader}>
                        <TopTrader/>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default LeadBoardCMP;