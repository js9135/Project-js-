import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, Input, List, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { useAccount } from "wagmi";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const useStyles = makeStyles({

    rewardbtn: {
        background: 'linear-gradient(45deg, #ff007a8c 10%, #53a0ffcc 90%)',
        padding: '0.6rem !important',
        borderRadius: '2rem !important',
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
        '&:focus': {
            border: '1px solid #ffa500'
        }
    },
    dilogTitle: {
        padding: '16px 24px 0px 24px'
    },
    rewardBox: {
        background: 'linear-gradient(45deg, #ff007a8c 10%, #53a0ffcc 90%)',
        padding: '0.6rem 1rem',
        borderRadius: '0.5rem',
        height: '100px'
    },
    referralBox: {
        background: 'linear-gradient(45deg, #ff0058 10%, #ff8e53 90%)',
        padding: '0.6rem 1rem',
        borderRadius: '0.5rem',
        height: '100px'
    },
    DBox: {
        backgroundColor: '#000',
        padding: '0.6rem 1rem',
        borderRadius: '0.5rem',
    },
    DBox2: {
        backgroundColor: '#000',
        padding: '0.6rem 1rem',
        borderRadius: '0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    claimBtn: {
        backgroundColor: '#151515 !important',
        color: '#ffffff73 !important',
        borderRadius: '2rem !important',
        marginTop: '0.5rem !important',
        textTransform: 'none !important'
    },
    saveBtn: {
        backgroundColor: '#151515 !important',
        color: '#fff !important',
        borderRadius: '0.3rem !important',
        marginTop: '0.rem !important',
        textTransform: 'none !important'
    }

})




const ReferralModal = () => {
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

    const accountStatus = useAccount()



    const [copied, setCopied] = useState(false);
    const addressValue = `${accountStatus.isConnected && accountStatus.address}`;


    const [copiedLink, setCopiedLink] = useState(false);
    const addressValueLink = `https://app.yieldification.com/perpetual?ref=${accountStatus.isConnected && accountStatus.address}`;

    return (
        <>

            <Button onClick={handleClickOpen('body')} className={classes.rewardbtn} fullWidth variant="contained">
               Rewards/Referrals
            </Button>

            <Box>
                <Dialog
                    sx={{
                        backgroundColor: '#0000003b',
                        '& .MuiPaper-root': {
                            backgroundColor: '#000',
                            border: '1px solid #ffa500',
                            color: '#fff',
                            width: '600px'
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
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <MilitaryTechIcon />
                                <Typography variant="h6" ml={1} fontWeight={700}>My Rewards</Typography>
                            </Box>
                            <IconButton onClick={handleClose}><ClearIcon sx={{ color: '#fff' }} /></IconButton>
                        </Box>
                    </DialogTitle>

                    <DialogContent dividers={scroll === 'paper'}>
                        <Box>

                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <Box className={classes.rewardBox}>
                                            <Typography color={'#fff'} fontSize={13}>Your Overall Rewards</Typography>
                                            <Typography color={'#fff'} variant={'h6'} fontWeight={700}>0.0000 ETH</Typography>
                                            <Typography color={'#fca300'}>$0</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <Box className={classes.referralBox}>
                                            <Typography color={'#fff'} fontSize={13}>Your Overall Referral Rewards</Typography>
                                            <Typography color={'#fff'} variant={'h6'} fontWeight={700}>0 YDF</Typography>
                                            <Typography color={'#fca300'}>$0</Typography>
                                            <Typography color={'#fff'} fontSize={13} fontStyle={'italic'}>Can sync again at Feb 24, 2023 10:27</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box mt={2}>
                                <Grid container spacing={2}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <Box className={classes.DBox}>
                                            <Typography color={'#fff'} fontSize={13}>Total Aggregate Rewards</Typography>
                                            <Typography color={'#fff'} variant={'h6'} fontWeight={700}>327.4781 ETH</Typography>
                                            <Typography color={'#fca300'}>$546,207</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <Box className={classes.DBox}>
                                            <Typography color={'#fff'} fontSize={13}>Total Aggregate Referral Rewards</Typography>
                                            <Typography color={'#fff'} variant={'h6'} fontWeight={700}>2,697 YDF</Typography>
                                            <Typography color={'#fca300'}>$52</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box mt={2}>
                                <Grid container spacing={2}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <Box className={classes.DBox}>
                                            <Typography color={'#fff'} fontSize={13}>Unclaimed Rewards</Typography>
                                            <Typography color={'#fff'} variant={'h6'} fontWeight={700}>0.0000 ETH</Typography>
                                            <Typography color={'#fca300'}>$0</Typography>
                                            <Button className={classes.claimBtn} fullWidth variant="contained">No ETH Rewards to Claim</Button>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <Box className={classes.DBox}>
                                            <Typography color={'#fff'} fontSize={13}>Unclaimed Referral Rewards</Typography>
                                            <Typography color={'#fff'} variant={'h6'} fontWeight={700}>0 YDF</Typography>
                                            <Typography color={'#fca300'}>$0</Typography>
                                            <Button className={classes.claimBtn} fullWidth variant="contained">Only Claimable on Arbitrum</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box>
                                <Typography mt={2} mb={1} variant="h6" fontWeight={700}>Refer Your Friends</Typography>

                                <Box className={classes.DBox2}>
                                    <Box>
                                        <Typography color={'#fff'} fontSize={13}>Referral Code</Typography>
                                        <Typography color={'#fff'} fontSize={13} >
                                            {addressValue}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex' }}>
                                        <Box>
                                            <Button className={classes.saveBtn} variant="contained">Save</Button>
                                        </Box>
                                        <Box ml={1}>
                                            {
                                                copied ? <Button className={classes.saveBtn} startIcon={<ContentCopyIcon />} >
                                                    Copied!
                                                </Button>
                                                    :
                                                    <CopyToClipboard text={addressValue} onCopy={() => setCopied(true)}>
                                                        <Button className={classes.saveBtn} startIcon={<ContentCopyIcon />}>
                                                            Copy
                                                        </Button>
                                                    </CopyToClipboard>
                                            }
                                        </Box>
                                    </Box>
                                </Box>


                                <Box className={classes.DBox2} mt={2}>
                                    <Box>
                                        <Typography color={'#fff'} fontSize={13}>Referral Link</Typography>
                                        <Typography color={'#fff'} fontSize={13} >
                                            {addressValueLink}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex' }}>

                                        <Box ml={1}>
                                            {
                                                copiedLink ? <Button className={classes.saveBtn} startIcon={<ContentCopyIcon />} >
                                                    Copied!
                                                </Button>
                                                    :
                                                    <CopyToClipboard text={addressValueLink} onCopy={() => setCopiedLink(true)}>
                                                        <Button className={classes.saveBtn} startIcon={<ContentCopyIcon />}>
                                                            Copy
                                                        </Button>
                                                    </CopyToClipboard>
                                            }
                                        </Box>
                                    </Box>
                                </Box>



                            </Box>

                        </Box>
                    </DialogContent>

                </Dialog>
            </Box>
        </>
    )
}

export default ReferralModal;