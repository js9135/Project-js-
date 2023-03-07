import React, { useContext, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Divider, FormControl, MenuItem, Select, Slider, Switch, TextField, Typography } from "@mui/material";
import eth from '../../assets/images/ethIcon.svg'
import daiIcon from '../../assets/images/daiIcon.svg'
import usdcIcon from '../../assets/images/usdcIcon.svg'
import usdtIcon from '../../assets/images/usdtIcon.svg'
import Date from "./Date";
import walletIcon from '../../assets/images/walletIcon.svg'
import walletIconb from '../../assets/images/walletIconb.svg'
import { Link } from "react-router-dom";
import { ColorModeContext } from "../../../store/Index";



const useStyles = makeStyles({
    addTrigger: {
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        backgroundColor: '#151515',
        border: '1px solid #ffa5009c'
    },
    switchWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    switch: {
        '& .MuiSwitch-track': {
            backgroundColor: '#515050'
        },
        '& .MuiSwitch-thumb': {
            color: '#fffd02'
        }
    },
    enterBoxWrap: {
        backgroundColor: '#090909',
        marginTop: '1rem',
        borderRadius: '0.5rem'
    },

    enterBox: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem 1rem'
    },

    formCont: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '0.5rem',
    },

    searchBar: {
        display: 'flex',
        border: '1px solid #ffffff3b',
        backgroundColor: '#000',
        padding: '0.5rem 1rem',
        alignItems: 'center',
        borderRadius: '0.5rem'
    },
    revenueBox: {
        backgroundColor: '#fcd3492e',
        borderRadius: '0.5rem',
        padding: '0.5rem 0.7rem',
        marginTop: '1rem'
    },
    connectwalletbtn: {
        marginRight: '1rem !important',
        backgroundColor: '#444444 !important',
        padding: '0.4rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
        textTransform: 'none !important',
        marginTop: '1rem !important'
    },
    laverageSlider: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem'
    },

})



const Token = [


    {
        id: 1,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={eth} /><Typography ml={1}  >ETH</Typography></Box>,
    },

    {
        id: 2,
        label: <Box sx={{ p: '5px 0px', display: 'flex', alignItems: 'center' }}><Typography component={"img"} src={daiIcon} /><Typography ml={1}>DAI</Typography></Box>,
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


const Add = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);


    const [tokenValue, setTokenValue] = React.useState(0);

    const handleChange3 = (event) => {
        setTokenValue(event.target.value);
    };

    const [val, setVal] = useState([0]);
    const updateRange = (e, data) => {
        setVal(data);
    };


    const [priceValue, setPriceValue] = useState(0)


    const { mode, toggleMode } = useContext(ColorModeContext)



    return (
        <>


            <Box className={classes.addTrigger} sx={{ backgroundColor: 'box2.default' }}>
                <Box className={classes.switchWrap}>
                    <Typography color={'text.default'} fontWeight={700}>Set List Price</Typography>
                    <Switch className={classes.switch} onClick={() => setShow(prev => !prev)} />
                </Box>


                {show &&
                    <Box>
                        <Box className={classes.enterBoxWrap} sx={{ backgroundColor: 'bg.default' }}>
                            <Box className={classes.enterBox}>
                                <Typography color={'text.default'}>Enter
                                    <Typography component={'span'}> ETH Amount</Typography>
                                </Typography>
                            </Box>

                            <Box className={classes.formCont}>

                                <TextField
                                    sx={{
                                        width : '100%',
                                        marginLeft: '1rem',
                                        '& input[type=number]': {
                                            '-moz-appearance': 'textfield'
                                        },
                                        '& input[type=number]::-webkit-outer-spin-button': {
                                            '-webkit-appearance': 'none',
                                            margin: 0
                                        },
                                        '& input[type=number]::-webkit-inner-spin-button': {
                                            '-webkit-appearance': 'none',
                                            margin: 0
                                        }
                                    }}
                                    value={priceValue * 0.0005992150283129101}
                                    onChange={(e) => setPriceValue(e.target.value)}
                                    id="outlined-basic"
                                    variant="standard"
                                    type={'number'}
                                    placeholder="0"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />

                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">

                                    <Select
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

                                                key={e.id} value={e.id}>
                                                {e.label}

                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>


                        <Box className={classes.enterBoxWrap} sx={{ backgroundColor: 'bg.default' }}>
                            <Box className={classes.enterBox}>
                                <Typography color={'text.default'}>Enter
                                    <Typography component={'span'}> USD Amount</Typography>
                                </Typography>
                            </Box>

                            <Box className={classes.formCont}>
                                <TextField
                                    sx={{
                                        width : '100%',
                                        marginLeft: '1rem',
                                        '& input[type=number]': {
                                            '-moz-appearance': 'textfield'
                                        },
                                        '& input[type=number]::-webkit-outer-spin-button': {
                                            '-webkit-appearance': 'none',
                                            margin: 0
                                        },
                                        '& input[type=number]::-webkit-inner-spin-button': {
                                            '-webkit-appearance': 'none',
                                            margin: 0
                                        }
                                    }}
                                    value={priceValue}
                                    onChange={(e) => setPriceValue(e.target.value)}
                                    id="outlined-basic"
                                    variant="standard"
                                    type={'number'}
                                    placeholder="0"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />

                            </Box>
                        </Box>
                    </Box>


                }
            </Box>

            <Box className={classes.addTrigger} sx={{ backgroundColor: 'box2.default' }}>
                <Box className={classes.switchWrap}>
                    <Typography color={'text.default'} fontWeight={700}>Vesting Schedule (unlock start/end dates)</Typography>
                    <Switch className={classes.switch} onClick={() => setShowOne(prev => !prev)} />
                </Box>


                {showOne &&
                    <Box>
                        <Date />
                    </Box>


                }
            </Box>


            <Box className={classes.addTrigger} sx={{ backgroundColor: 'box2.default' }}>
                <Box className={classes.switchWrap}>
                    <Typography color={'text.default'} fontWeight={700}>Only allow specific wallet to buy package</Typography>
                    <Switch className={classes.switch} onClick={() => setShowTwo(prev => !prev)} />
                </Box>


                {showTwo &&
                    <Box>
                        <Box className={classes.searchBar} sx={{ backgroundColor: 'bg.default' }}>
                            <Typography component={'img'} src={`${mode === 'dark' ? walletIcon : walletIconb}`} width={25} mr={2} />
                            <TextField
                                id="outlined-basic"
                                variant="standard"
                                placeholder="Enter Wallet Address"
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
                    </Box>


                }
            </Box>

            <Box className={classes.revenueBox} sx={{ backgroundColor: 'revenue.default' }}>
                <Typography color={'revenuetext.default'}>There is a service fee of 0.010 ETH to create this OTC record. For packages there is also a 1% fee when your package is purchased.</Typography>
            </Box>

            <Box><Button className={classes.connectwalletbtn} fullWidth variant='contained' disabled>Please Complete All Fields</Button></Box>


        </>
    )
}

export default Add;