import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, IconButton, List, ListItem, MenuItem, Select, Slider, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import eth from '../../assets/images/ethIcon.svg'
import daiIcon from '../../assets/images/daiIcon.svg'
import usdcIcon from '../../assets/images/usdcIcon.svg'
import usdtIcon from '../../assets/images/usdtIcon.svg'
import logo from '../../assets/images/logo.png'
import ethsilver from '../../assets/images/ethsilver.png'



const useStyles = makeStyles({
    collectionHeading: {
        marginTop: '1.5rem',
        marginBottom: '1rem',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between'
    },
    filterBtn: {
        border: '1px solid #fff !important',
        color: '#fff !important'
    },
    marketplaceBox: {
        backgroundColor: '#151515',
        borderRadius: '1rem',
        padding: '1rem'
    },
    nftImage: {
        width: '100px'
    },
    topBoxM: {
        display: 'flex',
        alignItems: 'center'
    },
    stakedMark: {
        marginLeft: '1rem'
    },
    sYDF: {
        padding: '0.3rem 0.6rem',
        borderRadius: '0.4rem',
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        fontSize: '13px !important'
    },
    addessCont: {
        display: 'flex'
    },
    addressWrap: {
        justifyContent: 'space-between !important',
        padding: '0.1rem 1rem !important'
    },
    addessFontSize: {
        fontSize: '14px !important'
    },
    addressList: {
        backgroundColor: '#000',
        borderRadius: '0.5rem',
        marginTop: '1rem !important',
        width: '28rem'
    },
    sliderRange: {
        marginBottom: '0px !important',

        '& .MuiSlider-track': {
            color: '#ffa500',
            padding: '2px',
        },

        '& .MuiSlider-rail': {
            color: '#fffd02',
            padding: '3px'
        },

        '& .MuiSlider-thumb': {
            color: '#fffd02',
            display: 'none'
        },
        '& .MuiSlider-mark': {
            color: '#fffd02',
        },
        '& .MuiSlider-markLabel': {
            color: '#fff',
            transform: 'translateX(-125%)',
            marginLeft: '6px'
        },
    },
    sliderRange2: {

        marginBottom: '0px !important',

        '& .MuiSlider-track': {
            color: '#ffa500',
            padding: '2px',
        },

        '& .MuiSlider-rail': {
            color: '#fffd02',
            padding: '3px'
        },

        '& .MuiSlider-thumb': {
            color: '#fffd02',
        },
        '& .MuiSlider-mark': {
            color: '#fffd02',
        },
        '& .MuiSlider-markLabel': {
            color: '#fff',
            transform: 'translateX(-125%)',
            marginLeft: '6px'
        },
    },
    makeOfferBtn: {
        background: 'linear-gradient(45deg, #00ff44 10%, #aeff53 90%)',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#000 !important',
        marginTop: '1rem !important'
    },
    stakedPlaceBox: {
        padding: '1rem 8rem',
        border: '1px solid #ffa50033',
        borderRadius: '0.5rem'
    },
    modalHding: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    textfield3: {
        border: '1px solid transparent  !important',
        borderRadius: '12px',
        backgroundColor: '#000',
        color: '#fff !important'
    },
    enterBox: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    enterBoxWrap: {
        backgroundColor: '#151515',
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '0.5rem'
    },
    laverageSlider: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem'
    },
    formCont: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '0.5rem',
        backgroundColor: '#000',
        marginTop: '1rem'
    },
    menuItemSelect: {
        backgroundColor: "#000 !important",
        '&:hover': { backgroundColor: '#292929 !important', }
    },
    duration: {
        padding: '0.6rem 1rem',
        marginTop: '0.5rem',
        borderRadius: '0.5rem',
        backgroundColor: '#fcd34912',
    },
    earningRewardBox: {
        backgroundColor: '#151515',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginTop: '0.6rem'
    },
    makeOfferModalBtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        color: '#fff !important',
        marginTop: '1rem !important',
        borderRadius: '2rem !important',
        padding: '0.6rem 1rem !important'
    },
    asset: {
        backgroundColor: '#ffa500d9',
        padding: '0.3rem 0.5rem',
        borderRadius: '0.3rem'
    },
    listPriceG: {
        background: 'linear-gradient(220deg, #000000 45%, #d98c004f 100%)',
        borderRadius: '0.5rem',
        marginTop: '1rem !important',

    },
})












function valuetext(value) {
    return `${value}°C`;
}

const BuyModal = () => {
    const classes = useStyles();







    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [val, setVal] = useState([0]);
    const updateRange = (e, data) => {
        setVal(data);
    };





    const [tokenValue, setTokenValue] = React.useState(0);

    const handleChange3 = (event) => {
        setTokenValue(event.target.value);
    };



    return (
        <>

            <Button onClick={handleClickOpen('body')} className={classes.makeOfferBtn} fullWidth variant="contained">
                Buy
            </Button>

            <Box>
                <Dialog
                    sx={{
                        backgroundColor: '#0000003b',
                        '& .MuiPaper-root': {
                            backgroundColor: '#000',
                            border: '1px solid #ffa500',
                            color: '#fff'
                        }
                    }}
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >

                    <DialogTitle id="scroll-dialog-title">
                        <Box className={classes.modalHding}>
                            <Typography variant="h6" fontWeight={700}>Purchase OTC Package #2</Typography>
                            <IconButton onClick={handleClose}><ClearIcon sx={{ color: '#fff' }} /></IconButton>
                        </Box>
                    </DialogTitle>

                    <DialogContent dividers={scroll === 'paper'}>
                        <Box>

                            <List className={classes.addressList}>

                                <ListItem className={classes.addressWrap}>
                                    <Box className={classes.addessCont}>

                                        <Typography className={classes.asset} mb={1} fontSize={14} color={'#000'} >Assets in Package</Typography>
                                    </Box>
                                </ListItem>
                                <Box height={5} />
                                <ListItem className={classes.addressWrap}>
                                    <Box className={classes.addessCont}>
                                        <Typography component={'img'} src={logo} width={25} />
                                        <Typography fontWeight={700} color={'#fff'} ml={1}>25.5 YDF
                                            <Typography component={'span'} color={'#ffa500'}> ($0.48)</Typography>
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <Box height={5} />
                                <ListItem className={classes.addressWrap}>
                                    <Box className={classes.addessCont}>
                                        <Typography component={'img'} src={ethsilver} width={25} />
                                        <Typography fontWeight={700} color={'#fff'} ml={1}>0.00500 ETH
                                            <Typography component={'span'} color={'#ffa500'}> ($8.18)</Typography>
                                        </Typography>
                                    </Box>
                                </ListItem>

                            </List>

                            <List className={classes.listPriceG}>


                                <ListItem className={classes.addressWrap}>
                                    <Box>
                                        <Typography className={classes.addessFontSize} color={'#fff'}>List Price</Typography>
                                    </Box>
                                </ListItem>

                                <ListItem className={classes.addressWrap}>
                                    <Box className={classes.addessCont}>
                                        <Typography fontWeight={700} color={'#fff'} >1 ETH
                                            <Typography component={'span'} color={'#ffa500'}> ($1,642.63)</Typography>
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem className={classes.addressWrap}>
                                    <Box className={classes.addessCont}>
                                        <Typography fontSize={13} color={'#fff'} >Click Buy below to buy today!</Typography>
                                    </Box>
                                </ListItem>



                            </List>

                            <Button className={classes.makeOfferModalBtn} fullWidth variant="contained" onClick={handleClose} >Buy Package</Button>

                        </Box>
                    </DialogContent>

                </Dialog>
            </Box>
        </>
    )
}

export default BuyModal;