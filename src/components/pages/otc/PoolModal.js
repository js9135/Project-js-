import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, IconButton, MenuItem, Select, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";
import packageimg from '../../assets/images/packageimg.png'
import PackageModal from "./PackageModal";
import eth from '../../assets/images/ethIcon.svg'
import daiIcon from '../../assets/images/daiIcon.svg'
import usdcIcon from '../../assets/images/usdcIcon.svg'
import usdtIcon from '../../assets/images/usdtIcon.svg'



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
        padding: '1rem !important',
        display: 'inline-block !important',
        textTransform: 'none !important',
        borderRadius: '1rem !important',
        transition: '0.1s',
        textAlign: 'center',
        '@media(max-width : 600px)':{
            marginTop : '1.5rem !important'
        }
    },

    packagePoolBtnWrap: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    backBtn: {
        color: '#fff',
        textDecoration: 'none',
        marginTop: '1rem',
        display: 'inline-block',
    },

    revenueBox: {
        backgroundColor: '#fcd3492e',
        borderRadius: '0.5rem',
        padding: '0.5rem 0.7rem',
        marginTop: '1rem'
    },
    connectwalletbtn: {
        marginRight: '1rem !important',
        padding: '0.4rem 1rem !important',
        borderRadius: '3rem !important',
        textTransform: 'none !important',
        marginTop: '1rem !important'
    },
    enterBoxWrap2: {
        backgroundColor: '#151515',
        padding: '1rem',
        borderRadius: '0.5rem'
    },
    enterBox2: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    formCont2: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '0.5rem',
        backgroundColor: '#000',
        marginTop: '1rem'
    },

})



const Token = [


    {
        id: 1,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={eth} /><Typography ml={1} >ETH</Typography></Box>,
    },

    {
        id: 2,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={daiIcon} /><Typography ml={1} >DAI</Typography></Box>,
    },
    {
        id: 3,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={usdcIcon} /><Typography ml={1} >USDC</Typography></Box>,
    },
    {
        id: 4,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={usdtIcon} /><Typography ml={1} >USDT</Typography></Box>,
    },
    {
        id: 5,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={eth} /><Typography ml={1} >WETH</Typography></Box>,
    },

];


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

    const [tokenValue, setTokenValue] = React.useState(0);

    const handleChange3 = (event) => {
        setTokenValue(event.target.value);
    };




    return (
        <>


            
            <Button variant="contained" onClick={handleClickOpen('body')} className={classes.packagePoolBtn} sx={{
                backgroundColor: 'pkgbg.default', '&:hover': {
                    backgroundColor: '#9903ff ',
                }
            }} to="#">
                <Typography component={'img'} src={packageimg} width={'180px'} />
                <Typography variant="h5" color={'text.default'} fontWeight={700} mt={1}>Pool</Typography>
                <Typography color={'text.default'} mt={1}>Bundle up any combination of native ETH, ERC20 tokens, NFTs, and ERC1155 tokens all in a single tradable or sellable package.</Typography>
            </Button>

            <Box>
                <Dialog
                    sx={{
                        backgroundColor: '#0000003b',
                        '& .MuiPaper-root': {
                            width: '520px',
                            backgroundColor: 'bg.default',
                            border: '1px solid #ffa500',
                            color: 'text.default'
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
                            <Typography variant="h6" fontWeight={700}>Create OTC Pool on Ethereum Mainnet</Typography>
                            <IconButton onClick={handleClose}><ClearIcon sx={{ color: 'text.default' }} /></IconButton>
                        </Box>
                    </DialogTitle>

                    <DialogContent dividers={scroll === 'paper'}>
                        <Box>

                            <Box className={classes.enterBoxWrap2} sx={{backgroundColor : 'box2.default'}}>
                                <Box className={classes.enterBox2}>

                                    <Typography >Asset you want to sell:</Typography>
                                </Box>

                                <Box className={classes.formCont2} sx={{backgroundColor : 'bg.default'}}>
                                    <Typography  ml={2}>Select Token</Typography>
                                    <FormControl sx={{ minWidth: 120 }} size="small">

                                        <Select



                                            sx={{
                                                "& fieldset": { border: 'none', },
                                                '& .MuiSvgIcon-root': { color: 'text.default' },



                                            }}
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            defaultValue={0}
                                            onChange={handleChange3}
                                        >
                                            {Token.map((e) => (
                                                <MenuItem
                                                    
                                                    key={e.id} value={e.id}>
                                                    {e.label}

                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>


                            </Box>

                            <Box className={classes.revenueBox} sx={{backgroundColor : 'revenue.default'}}>
                                <Typography color={'revenuetext.default'}>There is a service fee of 0.010 ETH to create this OTC record.</Typography>
                            </Box>

                            <Box><Button className={classes.connectwalletbtn} sx={{backgroundColor : 'disBtn.default', color : 'text.default'}} fullWidth variant='contained' disabled>Please Complete All Fields</Button></Box>

                            <Box textAlign={'center'}>
                                <Button className={classes.backBtn} sx={{color : 'text.default','&:hover':{backgroundColor : 'transparent'}}} onClick={handleClose} to="#">Back</Button>
                            </Box>


                        </Box>
                    </DialogContent>

                </Dialog>
            </Box>
        </>
    )
}

export default PoolModal;