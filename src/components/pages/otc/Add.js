import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Divider, FormControl, MenuItem, Select, Slider, Switch, TextField, Typography } from "@mui/material";
import eth from '../../assets/images/ethIcon.svg'
import daiIcon from '../../assets/images/daiIcon.svg'
import usdcIcon from '../../assets/images/usdcIcon.svg'
import usdtIcon from '../../assets/images/usdtIcon.svg'



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
        backgroundColor: '#000',
    },

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


const Add = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const [showOne, setShowOne] = useState(false);


    const [tokenValue, setTokenValue] = React.useState(0);

    const handleChange3 = (event) => {
        setTokenValue(event.target.value);
    };

    const [val, setVal] = useState([0]);
    const updateRange = (e, data) => {
        setVal(data);
    };


    const [priceValue, setPriceValue] = useState(0)



    return (
        <>

            <Box className={classes.addTrigger}>
                <Box className={classes.switchWrap}>
                    <Typography color={'#fff'} fontWeight={700}>Set List Price</Typography>
                    <Switch className={classes.switch} onClick={() => setShow(prev => !prev)} />
                </Box>


                {show &&
                    <Box>
                        <Box className={classes.enterBoxWrap}>
                            <Box className={classes.enterBox}>
                                <Typography color={'#fff'}>Enter
                                    <Typography component={'span'}> ETH Amount</Typography>
                                </Typography>
                            </Box>

                            <Box className={classes.formCont}>

                                <TextField
                                    sx={{
                                        marginLeft: '1rem'
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
                        </Box>


                        <Box className={classes.enterBoxWrap}>
                            <Box className={classes.enterBox}>
                                <Typography color={'#fff'}>Enter
                                    <Typography component={'span'}> USD Amount</Typography>
                                </Typography>
                            </Box>

                            <Box className={classes.formCont}>
                                <TextField
                                    sx={{
                                        marginLeft: '1rem'
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

            <Box className={classes.addTrigger}>
                <Box className={classes.switchWrap}>
                    <Typography color={'#fff'} fontWeight={700}>Vesting Schedule (unlock start/end dates)</Typography>
                    <Switch className={classes.switch} onClick={() => setShowOne(prev => !prev)} />
                </Box>


                {showOne &&
                    <Box>
                         <Typography color={'#fff'}>bugajdagd</Typography>
                    </Box>


                }
            </Box>
        </>
    )
}

export default Add;