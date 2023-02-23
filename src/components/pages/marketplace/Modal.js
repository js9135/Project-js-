import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, List, ListItem, MenuItem, Select, Slider, Typography } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import ohfimg from '../../assets/images/ohfimg.png'
import ethIcon from '../../assets/images/ethIcon.svg'
import logow from '../../assets/images/logow.svg'
import sfimg from '../../assets/images/sfimg.png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';
import eth from '../../assets/images/ethIcon.svg'
import daiIcon from '../../assets/images/daiIcon.svg'
import usdcIcon from '../../assets/images/usdcIcon.svg'
import usdtIcon from '../../assets/images/usdtIcon.svg'





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
        marginTop: '1rem !important'
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
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
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
    // menuItemSelect: {
    //     backgroundColor: "#000 !important",
    //     '&:hover': { backgroundColor: '#292929 !important', }
    // },
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
        backgroundColor: '#646464 !important',
        color: '#fff !important',
        marginTop: '1rem !important',
        borderRadius: '2rem !important',
        padding: '0.6rem 1rem !important'
    }
})









const Token = [


    {
        id: 1,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={eth} /><Typography ml={1} color={'#fff'}>ETH</Typography></Box>,
    },

    {
        id: 2,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={daiIcon} /><Typography ml={1} color={'#fff'}>DAI</Typography></Box>,
    },
    {
        id: 3,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={usdcIcon} /><Typography ml={1} color={'#fff'}>USDC</Typography></Box>,
    },
    {
        id: 4,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={usdtIcon} /><Typography ml={1} color={'#fff'}>USDT</Typography></Box>,
    },
    {
        id: 5,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={eth} /><Typography ml={1} color={'#fff'}>WETH</Typography></Box>,
    },

];


function valuetext(value) {
    return `${value}°C`;
}

const Modal = () => {
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
                Make Offer
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
                            <Typography variant="h6" fontWeight={700}>Make Offer</Typography>
                            <IconButton onClick={handleClose}><ClearIcon sx={{ color: '#fff' }} /></IconButton>
                        </Box>
                    </DialogTitle>

                    <DialogContent dividers={scroll === 'paper'}>
                        <Box>
                            <Box className={classes.stakedPlaceBox}>
                                <Typography mb={2}>You are about to place an offer for</Typography>
                                <Box className={classes.topBoxM}>
                                    <Box className={classes.nftImage}>
                                        <Typography component={'img'} src={ohfimg} width={'100%'} />
                                    </Box>
                                    <Box className={classes.stakedMark}>
                                        <Typography  ><Typography component={'span'} className={classes.sYDF} color={'#fff'}>sYDF</Typography>
                                            <Typography component={'span'} color={'#fff'} fontWeight={700}> 150% APR</Typography>
                                        </Typography>
                                        <Box height={10} />
                                        <Typography component={'a'} href={'#'} variant="h6" color={'#fff'} fontWeight={700}>Staked YDF #16</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box className={classes.enterBoxWrap}>
                                <Box className={classes.enterBox}>
                                    <Typography color={'#fff'}>Enter
                                        <Typography component={'span'}> USDC Amount</Typography>
                                    </Typography>
                                    <Typography color={'#fff'}>USDC Balance: 0.0000 USDC ($0)</Typography>
                                </Box>

                                <Box className={classes.formCont}>
                                    <Typography variant="h6" color={'#fff'} fontWeight={700} ml={2}>0</Typography>
                                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">

                                        <Select
                                            

                                            
                                            sx={{
                                                "& fieldset": { border: 'none', },
                                                '& .MuiSvgIcon-root': { color: '#fff' },



                                            }}
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            defaultValue={1}
                                            onChange={handleChange3}
                                        >
                                            {Token.map((e) => (
                                                <MenuItem
                                                    className={classes.menuItemSelect}
                                                    key={e.id} value={e.id}>
                                                    {e.label}

                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box className={classes.laverageSlider}>
                                    <Slider
                                        aria-label="Always visible"
                                        defaultValue={0}
                                        getAriaValueText={valuetext}
                                        step={1}
                                        // marks={marks}
                                        onChange={updateRange}
                                        valueLabelDisplay="off"
                                        className={classes.sliderRange2}
                                    />
                                    <Typography ml={2}>{val}%</Typography>
                                </Box>
                            </Box>

                            <Box>
                                <Typography mt={2} variant="h6" color={'#fff'}>Duration</Typography>
                                <Box className={classes.duration}>
                                    <Typography color={'#FCD349'}>Offer will expire February 24, 2023 16:44 PM</Typography>
                                </Box>
                            </Box>



                            <Box>
                                <Typography mt={2} variant="h6" color={'#fff'}>Earnings & Rewards</Typography>
                                <Box className={classes.earningRewardBox}>
                                    <Typography>Principal Amount</Typography>
                                    <Typography variant="h6" fontWeight={700}>6,969,000 YDF</Typography>
                                    <Typography color={'#FCD349'}>$164,885</Typography>
                                </Box>

                                <Box className={classes.earningRewardBox}>
                                    <Typography>Earning Per Annum</Typography>
                                    <Typography variant="h6" fontWeight={700}>10,453,500 YDF</Typography>
                                    <Typography color={'#FCD349'}>$247,328</Typography>
                                </Box>
                            </Box>


                            <Button className={classes.makeOfferModalBtn} fullWidth variant="contained" onClick={handleClose} disabled>Make Offer</Button>

                        </Box>
                    </DialogContent>

                </Dialog>
            </Box>
        </>
    )
}

export default Modal;