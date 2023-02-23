import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, FormControl, List, ListItem, MenuItem, Select, Slider, Typography } from "@mui/material";
import eth from '../../assets/images/ethIcon.svg'
import daiIcon from '../../assets/images/daiIcon.svg'
import usdcIcon from '../../assets/images/usdcIcon.svg'
import usdtIcon from '../../assets/images/usdtIcon.svg'
import { useAccount } from "wagmi";


const useStyles = makeStyles({
    mainDiv: {
        margin: '1rem 12rem',
    },
    changePairBtn: {
        color: '#fff!important',
        padding: '0.4rem 1rem!important',
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        borderRadius: '3rem!important',
        textTransform: 'none!important',
    },
    changePairHeading: {
        background: "-webkit-linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: '700 !important'
    },
    changePairMainWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#151515',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        alignItems: 'center'
    },
    enterBoxWrap: {
        backgroundColor: '#151515',
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '0.5rem'
    },
    enterBox: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#3f3f3f',
        borderRadius: '0.5rem 0.5rem 0rem 0rem',
        alignItems: 'center',
        paddingRight: '0.5rem'
    },
    formCont: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    laverageSlider: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3f3f3f',
        padding: '0.4rem 0.5rem',
        borderRadius: '0rem 0rem 0.5rem 0.5rem'
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
    amountbg: {
        backgroundColor: '#75300a',
        padding: '0.4rem 0.5rem',
        borderRadius: '0.5rem 0rem 0.5rem 0rem'
    },

    amountbg2: {
        backgroundColor: '#0a5375 ',
        padding: '0.4rem 0.5rem',
        borderRadius: '0.5rem 0rem 0.5rem 0rem'
    },
    addressList: {
        backgroundColor: '#151515',
        borderRadius: '0.5rem',
        marginTop: '1rem !important'
    },
    addressWrap: {
        justifyContent: 'space-between !important',
        padding: '0.1rem 1rem !important'
    },
    addessFontSize: {
        fontSize: '14px !important'
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
    connectwalletbtn: {
        marginRight: '1rem !important',
        backgroundColor: '#252525 !important',
        padding: '0.4rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
        textTransform: 'none !important'
    },
    CreateOTCBtn: {
        marginRight: '1rem !important',
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.4rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
        textTransform: 'none !important'
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

const ChangePair = ({
    PAIR_HEADING,
    AMOUNT_TEXT,
    SWAP,
    SWAP_IN,
    COIN_TOP,
    AMOUNT_TEXT_BOTTOM,
    POOL,
    POOL_IN,
    COIN_BOTTOM,
    ER_ONE,
    ER_TWO,
    ER_THREE,
    ER_FOUR,
    PROGRESS_BAR

}) => {


    const classes = useStyles();

    const [val, setVal] = useState([0]);
    const updateRange = (e, data) => {
        setVal(data);
    };
    const [tokenValue, setTokenValue] = React.useState(0);
    const handleChange3 = (event) => {
        setTokenValue(event.target.value);
    };
    const accountStatus = useAccount()
    return (
        <>
            <Box className={classes.mainDiv}>
                <Box className={classes.changePairMainWrap}>
                    <Box><Typography className={classes.changePairHeading}>{PAIR_HEADING}</Typography></Box>
                    <Box>
                        <Button className={classes.changePairBtn} variant={'contained'}>Change Pair</Button>
                    </Box>
                </Box>

                <Box className={classes.enterBoxWrap}>
                    <Box className={classes.enterBox}>
                        <Typography className={classes.amountbg} fontSize={14} color={'#fff'}>Amount
                            <Typography fontSize={14} color={'#fff'} component={'span'}> {AMOUNT_TEXT}</Typography>
                        </Typography>
                        <Typography fontSize={13} color={'#999'}>Max you can swap:
                            <Typography fontSize={14} color={'#fff'} component={'span'}> {SWAP}
                                <Typography fontSize={14} color={'#ffa500'} component={'span'}> {SWAP_IN}</Typography>
                            </Typography>
                        </Typography>
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
                                defaultValue={COIN_TOP}
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
                        <Typography color={'#fff'} ml={2}>{val}%</Typography>
                    </Box>
                </Box>


                <Box className={classes.enterBoxWrap}>
                    <Box className={classes.enterBox}>
                        <Typography className={classes.amountbg2} fontSize={14} color={'#fff'}>Amount
                            <Typography fontSize={14} color={'#fff'} component={'span'}> {AMOUNT_TEXT_BOTTOM}</Typography>
                        </Typography>
                        <Typography fontSize={13} color={'#999'}>Amount left in this pool:
                            <Typography fontSize={14} color={'#fff'} component={'span'}> {POOL}
                                <Typography fontSize={14} color={'#ffa500'} component={'span'}> {POOL_IN}</Typography>
                            </Typography>
                        </Typography>
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
                                defaultValue={COIN_BOTTOM}
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
                        <Typography color={'#fff'} ml={2}>{val}%</Typography>
                    </Box>
                </Box>

                <List className={classes.addressList}>
                    <ListItem className={classes.addressWrap}>
                        <Box>
                            <Typography className={classes.addessFontSize} color={'#fff'}>Market comparison:</Typography>
                        </Box>
                        <Box>
                            <Typography color={'#FF494A'}>Market rate is currently better.</Typography>
                        </Box>
                    </ListItem>

                    <ListItem className={classes.addressWrap}>
                        <Box>
                            <Typography className={classes.addessFontSize} color={'#fff'}>Exchange rate (toggle):</Typography>
                        </Box>
                        <Box>
                            <Typography fontSize={14} color={'#fff'} component={'span'}> {ER_ONE}
                                <Typography fontSize={14} color={'#ffa500'} component={'span'}> {ER_TWO}
                                    <Typography fontSize={14} color={'#fff'} component={'span'}> {ER_THREE}
                                        <Typography fontSize={14} color={'#ffa500'} component={'span'}> {ER_FOUR}</Typography>
                                    </Typography>
                                </Typography>
                            </Typography>
                        </Box>
                    </ListItem>

                    <ListItem className={classes.addressWrap}>
                        <Slider
                            aria-label="Always visible"
                            defaultValue={PROGRESS_BAR}
                            getAriaValueText={valuetext}
                            step={10}
                            // marks={marks}
                            valueLabelDisplay="off"
                            className={classes.sliderRange}
                        />

                    </ListItem>
                </List>

                <Box mt={2}>
                    {accountStatus.isConnected ? <Box><Button fullWidth className={classes.CreateOTCBtn} variant='contained'>Swap</Button></Box> : <Box><Button fullWidth className={classes.connectwalletbtn} variant='contained'>Connect Wallet</Button></Box>}
                </Box>
            </Box>
        </>
    )
}

export default ChangePair;