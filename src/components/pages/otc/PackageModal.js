import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";
import { Box, Button, styled, } from '@mui/material';
import packageimg from '../../assets/images/packageimg.png'
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Add from "./Add";



const useStyles = makeStyles({
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

    italicFormate: {
        backgroundColor: '#000',
        padding: '0.6rem 1rem',
        border: '1px solid #ffa5009c'
    }



})


const Tab = styled(TabUnstyled)`
  font-family: poppins;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: #080808;
  padding: 10px 12px;
  margin: 6px 0px;
  width: 100%;
  border: none;
  border-radius: 12px;
  &:hover {
    background-color: #000;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #14d96d66 ;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #000;
    outline: 3px solid #14d96d66 ;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
 
  `,
);

const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
  margin-bottom: 16px;
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
);



const PackageModal = () => {
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
                <Typography variant="h5" color={'#fff'} fontWeight={700} mt={1}>Package</Typography>
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
                            <Typography variant="h6" fontWeight={700}>Create OTC Package on Ethereum Mainnet</Typography>
                            <IconButton onClick={handleClose}><ClearIcon sx={{ color: '#fff' }} /></IconButton>
                        </Box>
                    </DialogTitle>

                    <DialogContent dividers={scroll === 'paper'}>
                        <Box>


                            <Box className={classes.italicFormate}>
                                <Typography fontStyle={'italic'}>Add assets to this package below...</Typography>
                            </Box>

                            <Box mt={2}>
                                <TabsUnstyled defaultValue={0}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <TabsList>
                                            <Tab sx={{ marginRight: '1rem', display: 'flex', justifyContent: 'center' }}>
                                                <AddCircleIcon sx={{ color: "#00ff81" }} />
                                                <Typography color={'#00ff81'} ml={1}>Add Token</Typography>
                                            </Tab>

                                            <Tab sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <AddCircleIcon sx={{ color: "#9903ff" }} />
                                                <Typography color={'#9903ff'} ml={1}>Add NFT</Typography>
                                            </Tab>

                                        </TabsList>


                                    </Box>
                                    <TabPanel value={0}>

                                        <Add />

                                    </TabPanel>
                                    <TabPanel value={1}>


                                    </TabPanel>
                                </TabsUnstyled>
                            </Box>

                        </Box>
                    </DialogContent>

                </Dialog>
            </Box>
        </>
    )
}

export default PackageModal;