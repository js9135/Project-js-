import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Dialog, DialogContent, DialogTitle, FormControl, IconButton, MenuItem, Select, Slider, TextField, Typography } from "@mui/material";
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
import eth from '../../assets/images/ethIcon.svg'
import daiIcon from '../../assets/images/daiIcon.svg'
import usdcIcon from '../../assets/images/usdcIcon.svg'
import usdtIcon from '../../assets/images/usdtIcon.svg'
import walletIcon from '../../assets/images/walletIcon.svg'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const useStyles = makeStyles({
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
    },

    italicFormate: {
        backgroundColor: '#000',
        padding: '0.6rem 1rem',
        border: '1px solid #ffa5009c'
    },
    backBtn: {
        color: '#fff',
        textDecoration: 'none',
        marginTop: '1rem',
        display: 'inline-block',
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

    laverageSlider: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem'
    },
    sliderRange2: {

        marginBottom: '0px !important',

        '& .MuiSlider-track': {
            color: '#ffa500',
            padding: '2px',
        },

        '& .MuiSlider-rail': {
            color: '#ffb102',
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
    searchBar: {
        display: 'flex',
        border: '1px solid #ffffff3b',
        backgroundColor: '#000',
        padding: '0.5rem 1rem',
        alignItems: 'center',
        borderRadius: '0.5rem',
        '@media(max-width : 600px)':{
            marginTop : '1rem'
        }
    },


})


const Tab = styled(TabUnstyled)`
  font-family: poppins;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 10px 12px;
  margin: 6px 0px;
  width: 100%;
  border: none;
  border-radius: 12px;
  &:hover {
    background-color: tbbox.default;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #14d96d66 ;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: tbbox.default;
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

function valuetext(value) {
    return `${value}°C`;
}

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


            <Button variant="contained" onClick={handleClickOpen('body')} className={classes.packagePoolBtn} sx={{
                backgroundColor: 'pkgbg.default', '&:hover': {
                    backgroundColor: '#9903ff ',
                }
            }} to="#">
                <Typography component={'img'} src={packageimg} width={'180px'} />
                <Typography variant="h5" color={'text.default'} fontWeight={700} mt={1}>Package</Typography>
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
                        <Box className={classes.modalHding} >
                            <Typography variant="h6" fontWeight={700}>Create OTC Package on Ethereum Mainnet</Typography>
                            <IconButton onClick={handleClose}><ClearIcon sx={{ color: 'text.default' }} /></IconButton>
                        </Box>
                    </DialogTitle>

                    <DialogContent dividers={scroll === 'paper'}>
                        <Box>


                            <Box className={classes.italicFormate} sx={{ backgroundColor: 'bg.default' }}>
                                <Typography fontStyle={'italic'}>Add assets to this package below...</Typography>
                            </Box>

                            <Box mt={2}>
                                <TabsUnstyled defaultValue={0}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between','@media(max-width : 600px)':{display : 'inherit'} }}>
                                        <TabsList sx={{'@media(max-width : 600px)':{display : 'inherit'}}}>
                                            <Tab sx={{ marginRight: '1rem', display: 'flex', justifyContent: 'center', backgroundColor: 'tbbox.default' }}>
                                                <AddCircleIcon sx={{ color: "#00ff81" }} />
                                                <Typography color={'#00ff81'} ml={1}>Add Token</Typography>
                                            </Tab>

                                            <Tab sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'tbbox.default' }}>
                                                <AddCircleIcon sx={{ color: "#9903ff" }} />
                                                <Typography color={'#9903ff'} ml={1}>Add NFT</Typography>
                                            </Tab>

                                        </TabsList>


                                    </Box>
                                    <TabPanel value={0}>
                                        <Box className={classes.enterBoxWrap2} sx={{ backgroundColor: 'box2.default' }}>
                                            <Box className={classes.enterBox2}>
                                                <Typography color={'text.default'}>Enter
                                                    <Typography component={'span'}> USDC Amount</Typography>
                                                </Typography>
                                                <Typography color={'text.default'}>USDC Balance: 0.0000 USDC ($0)</Typography>
                                            </Box>

                                            <Box className={classes.formCont2} sx={{ backgroundColor: 'bg.default' }}>
                                                <Typography variant="h6" color={'text.default'} fontWeight={700} ml={2}>0</Typography>
                                                <FormControl sx={{ minWidth: 120 }} size="small">

                                                    <Select
                                                        className={classes.textfield3

                                                        }
                                                        sx={{
                                                            "& fieldset": { border: 'none', },
                                                            '& .MuiSvgIcon-root': { color: 'text.default' },



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
                                                    size="small"
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
                                        <Add />
                                        <Box textAlign={'center'}>
                                            <Button className={classes.backBtn} sx={{ color: 'text.default', '&:hover': { backgroundColor: 'transparent' } }} onClick={handleClose} to="#">Back</Button>
                                        </Box>

                                    </TabPanel>
                                    <TabPanel value={1}>
                                        <Box className={classes.formCont2} sx={{ backgroundColor: 'box2.default' }}>
                                            <Typography color={'text.default'} ml={2}>Select NFT</Typography>
                                            <FormControl sx={{ minWidth: 120 }} size="small">

                                                <Select
                                                    className={classes.textfield3

                                                    }
                                                    sx={{
                                                        "& fieldset": { border: 'none', },
                                                        '& .MuiSvgIcon-root': { color: 'text.default' },



                                                    }}
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    defaultValue={1}
                                                    onChange={handleChange3}
                                                >
                                                    <Box sx={{ padding: '0rem 1rem' }}>
                                                        <Box className={classes.searchBar} sx={{ backgroundColor: 'bg.default' }}>
                                                            <SearchOutlinedIcon width={25} />
                                                            <TextField
                                                                id="outlined-basic"
                                                                variant="standard"
                                                                placeholder="Enter Any NFT contract here"
                                                                InputProps={{
                                                                    disableUnderline: true,
                                                                }}
                                                                sx={{
                                                                    width: '100%',
                                                                    '& .MuiInputBase-root': {
                                                                        color: 'text.default',
                                                                    }
                                                                }}
                                                            />

                                                        </Box>
                                                        <Box height={15} />
                                                        <MenuItem>
                                                            <Typography color={'text.default'}>No NFTs found that you own...</Typography>
                                                        </MenuItem>
                                                    </Box>

                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <Add />
                                        <Box textAlign={'center'}>
                                            <Button className={classes.backBtn} sx={{ color: 'text.default', '&:hover': { backgroundColor: 'transparent' } }} onClick={handleClose} to="#">Back</Button>
                                        </Box>
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