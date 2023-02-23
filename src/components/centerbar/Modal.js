import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, List, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import AmplifiIcon from '../assets/images/AmplifiIcon.svg'
import { Link } from "react-router-dom";
import APEIcon from '../assets/images/APEIcon.svg'
import bcbIcon from '../assets/images/bcbIcon.svg'
import boneIcon from '../assets/images/boneIcon.svg'
import croIcon from '../assets/images/croIcon.svg'
import CultIcon from '../assets/images/CultIcon.svg'
import ChainLinkIcon from '../assets/images/ChainLinkIcon.svg'
import SHIBIcon from '../assets/images/SHIBIcon.svg'
import usdcIcon from '../assets/images/usdcIcon.svg'
import usdtIcon from '../assets/images/usdtIcon.svg'
import VoltIcon from '../assets/images/VoltIcon.svg'
import WrappedIcon from '../assets/images/WrappedIcon.svg'
import WETHIcon from '../assets/images/WETHIcon.svg'
import YDFIcon from '../assets/images/YDFIcon.svg'

const useStyles = makeStyles({

    makeOfferBtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
        marginTop: '1rem !important'
    },

    modalHding: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    makeOfferModalBtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        color: '#fff !important',
        marginTop: '1rem !important',
        borderRadius: '2rem !important',
        padding: '0.6rem 1rem !important'
    },
    ModalListItem: {
        display: 'flex',
        textDecoration: 'none',
        backgroundColor: '#151515',
        padding: '0.6rem !important',
        width: '25rem !important',
        borderRadius: '2rem',
        marginTop: '0.8rem',
        '&:focus':{
            border : '1px solid #ffa500'
        }
    },
    dilogTitle: {
        padding: '16px 24px 0px 24px'
    }
})




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


    return (
        <>

            <Button onClick={handleClickOpen('body')} className={classes.makeOfferBtn} fullWidth variant="contained">
                Change Collateral Token
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

                    <DialogTitle className={classes.dilogTitle} id="scroll-dialog-title">
                        <Box className={classes.modalHding}>
                            <Typography variant="h6" fontWeight={700}>Make Offer</Typography>
                            <IconButton onClick={handleClose}><ClearIcon sx={{ color: '#fff' }} /></IconButton>
                        </Box>
                    </DialogTitle>

                    <DialogContent dividers={scroll === 'paper'}>
                        <Box>



                            <List>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={AmplifiIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>AMPLIFI (Amplifi)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={APEIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>APE (ApeCoin)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={bcbIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>BCB (Blockchain Bets)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={boneIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>BONE (BONE SHIBASWAP)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={croIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>CRO (CRO)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={CultIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>CULT (Cult DAO)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={ChainLinkIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>LINK (ChainLink Token)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={SHIBIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>SHIB (SHIBA INU)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={usdcIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>USDC (USD Coin)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={usdtIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>USDT (Tether USD)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={VoltIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>VOLT (Volt Inu)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={WrappedIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>WBTC (Wrapped BTC)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={WETHIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>WETH (Wrapped Ether)</Typography>
                                </Link>

                                <Link className={classes.ModalListItem}>
                                    <Typography component={'img'} src={YDFIcon} />
                                    <Typography ml={1.5} color={'#fff'} fontWeight={500}>YDF (Yieldification)</Typography>
                                </Link>



                            </List>



                            <Button className={classes.makeOfferModalBtn} fullWidth variant="contained" onClick={handleClose}>Confirm Change</Button>

                        </Box>
                    </DialogContent>

                </Dialog>
            </Box>
        </>
    )
}

export default Modal;