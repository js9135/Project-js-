import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";
import packageimg from '../../assets/images/packageimg.png'
import PackageModal from "./PackageModal";



const useStyles = makeStyles({

    CreateOTCBtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.4rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
        textTransform: 'none !important'
    },
    modalHding: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    packagePoolBtn: {
        textDecoration: 'none',
        backgroundColor: '#000',
        padding: '1rem',
        borderRadius: '1rem',
        display: 'inline-block',
        transition: '0.1s',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: '#9903ff '
        }
    },

    packagePoolBtnWrap: {
        display: 'flex',
        justifyContent: 'space-between'
    }



})






const PoolModal = () => {
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


            <Link onClick={handleClickOpen('body')} className={classes.packagePoolBtn} to="#">
                <Typography component={'img'} src={packageimg} width={'180px'} />
                <Typography variant="h5" color={'#fff'} fontWeight={700} mt={1}>Pool</Typography>
                <Typography color={'#fff'} mt={1}>Bundle up any combination of native ETH, ERC20 tokens, NFTs, and ERC1155 tokens all in a single tradable or sellable package.</Typography>
            </Link>

            <Box>
                <Dialog
                    sx={{
                        backgroundColor: '#0000003b',
                        '& .MuiPaper-root': {
                            width: '520px',
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
                            <Typography variant="h6" fontWeight={700}>Select OTC type to create</Typography>
                            <IconButton onClick={handleClose}><ClearIcon sx={{ color: '#fff' }} /></IconButton>
                        </Box>
                    </DialogTitle>

                    <DialogContent dividers={scroll === 'paper'}>
                        <Box>





                        </Box>
                    </DialogContent>

                </Dialog>
            </Box>
        </>
    )
}

export default PoolModal;