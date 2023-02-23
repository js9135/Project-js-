import { Box, Button, Divider, List, ListItem, Switch, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Slider from '@mui/material/Slider';
import Modal from "./Modal";


const useStyles = makeStyles({
    changeTokenBtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.5rem !important',
        borderRadius: '2rem !important',
        color: '#fff !important',
        marginTop: '1rem !important'
    },
    sizeWrap: {
        marginTop: '1rem',
        padding: '1rem',
        borderRadius: '1rem',
        backgroundColor: '#151515',
    },
    addTrigger: {
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        borderRadius: '1rem',
        backgroundColor: '#151515',
    },
    laverageSlider: {
        marginTop: '1rem',
        padding: '0rem 1rem',
        borderRadius: '1rem',
        backgroundColor: '#151515',
    },
    sliderRange: {
        marginTop: '2rem',
        marginBottom: '0px !important',
        '& .MuiSlider-track': {
            color: '#ffa500',
        },

        '& .MuiSlider-rail': {
            color: '#151515',
        },

        '& .MuiSlider-thumb': {
            color: '#fffd02',
        },
        '& .MuiSlider-markLabel': {
            color: '#fff',
            marginTop: '-3rem',
            transform: 'translateX(-125%)',
            marginLeft: '6px'
        },
    },
    switch: {
        '& .MuiSwitch-track': {
            backgroundColor: '#515050'
        },
        '& .MuiSwitch-thumb': {
            color: '#fffd02'
        }
    },
    switchWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    reached: {
        border: '1px solid #ffffff3b !important',
        color: '#fff !important',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important',
        backgroundColor: 'transparent !important',
        marginTop: '1rem !important',
        textTransform: 'none !important',
        fontSize: '16px !important'
    },
    infoListitem: {
        justifyContent: 'space-between !important',
        padding: '0.1rem 0rem !important'
    },
    longInfoBox: {
        padding: '0.5rem 1rem !important',
        marginTop: '1rem !important',
        borderRadius: '1rem',
        backgroundColor: '#151515',
    },
    triList: {
        backgroundColor: '#000',
        borderRadius: '0.4rem',
        marginTop: '0.7rem'
    },
    triPercentage: {
        backgroundColor: 'transparent !important',
        padding: '0.4rem 0.6rem !important',
        minWidth: '59px !important',
        borderRadius: '0.4rem !important',
        '&:hover': {
            backgroundColor: '#ffa500 !important',
            color: '#000',
        },
        '&:focus': {
            backgroundColor: '#ffa500 !important',
            color: '#000',
        }
    }
})

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 20,
        label: '2x',
    },
    {
        value: 40,
        label: '5x',
    },
    {
        value: 60,
        label: '10x',
    },
    {
        value: 80,
        label: '20x',
    },

    {
        value: 100,
        label: '50x',
    },
];

function valuetext(value) {
    return `${value}°C`;
}
const Size = ({ TabTitle }) => {

    const [val, setVal] = useState([0]);
    const updateRange = (e, data) => {
        setVal(data);
    };
    const classes = useStyles();
    const [show, setShow] = useState(false);
    return (
        <>
            <Box>
                <Box mt={2}>
                    <Typography color={'#fff'} variant="h6">Size</Typography>
                </Box>
            </Box>

            <Box className={classes.sizeWrap}>
                <Box>
                    <Box>
                        <Typography color={'#999'}>PAY
                            <Typography component={'span'} color={'#fff'} fontWeight={700}> 0 YDF</Typography>
                        </Typography>
                    </Box>
                    <Box>

                        <Typography color={'#fff'} fontWeight={700}>YDF Bal: 0.00 ($0.00)
                            <Typography sx={{ textDecoration: 'none' }} component={'a'} href={'#'} color={'#ffa500'}> MAX</Typography>
                        </Typography>

                    </Box>
                </Box>

                <Modal />
            </Box>


            <Box className={classes.sizeWrap}>
                <Box>
                    <Box>
                        <Typography color={'#999'} >{TabTitle}
                            <Typography component={'span'} color={'#fff'} fontWeight={700}> 0  YDF</Typography>
                        </Typography>
                    </Box>

                    <Box>
                        <Typography color={'#fff'}>Leverage:
                            <Typography component={'span'} color={'#fff'} fontWeight={700}> {val}</Typography>
                        </Typography>
                    </Box>
                </Box>
            </Box>





            <Box mt={2}>
                <Typography color={'#fff'} variant="h6">Leverage</Typography>
            </Box>

            <Box className={classes.laverageSlider}>
                <Slider
                    aria-label="Always visible"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    step={10}
                    marks={marks}
                    onChange={updateRange}
                    valueLabelDisplay="off"
                    className={classes.sliderRange}
                />
            </Box>


            <Box className={classes.addTrigger}>
                <Box className={classes.switchWrap}>
                    <Typography color={'#fff'} fontWeight={700}>Add Trigger Order (TP/SL)</Typography>
                    <Switch className={classes.switch} onClick={() => setShow(prev => !prev)} />
                </Box>


                {show &&
                    <Box>
                        <Box className={classes.triList}>
                            <Button variant="contained" className={classes.triPercentage} >50%</Button>
                            <Button variant="contained" className={classes.triPercentage} >60%</Button>
                            <Button variant="contained" className={classes.triPercentage} >75%</Button>
                            <Button variant="contained" className={classes.triPercentage} >105%</Button>
                            <Button variant="contained" className={classes.triPercentage} >200%</Button>
                        </Box>
                        <Typography color={'#999'} mt={1} mb={1}>Current index price: $24,536.11</Typography>
                        <Divider sx={{ borderColor: '#ffffff40' }} />
                        <Typography color={'#999'} mt={1} mb={1}>-50.00% index price movement downwards from open</Typography>
                        <Divider sx={{ borderColor: '#ffffff40' }} />
                        <Typography color={'#999'} mt={1} mb={1}>Collateral: 0 YDF</Typography>
                        <Divider sx={{ borderColor: '#ffffff40' }} />
                        <Typography color={'#999'} mt={1} mb={1}>Value at close: 0 YDF
                            <Typography component={'span'} color="#ffa5006b">(+0)</Typography>
                        </Typography>
                    </Box>
                }
            </Box>


            <Box className={classes.addTrigger}>
                <Box className={classes.switchWrap}>
                    <Typography color={'#fff'}>Enter Referral Code</Typography>
                    <TextField
                        id="outlined-basic"
                        variant="standard"
                        placeholder="..."
                        InputProps={{
                            disableUnderline: true,
                        }}
                        sx={{
                            width: '50%',
                            '& .MuiInputBase-root': {
                                color: '#fff',
                            },
                            '& .MuiInputBase-input': {
                                textAlign: 'right'
                            }
                        }}
                    />
                </Box>
            </Box>

            <Box>
                <Button className={classes.reached} variant="contained" fullWidth>Max Collateral Reached</Button>
            </Box>

            <Box mt={2}>
                <Typography color={'#fff'} variant="h6">Long Info</Typography>
            </Box>

            <Box>
                <List className={classes.longInfoBox}>
                    <ListItem className={classes.infoListitem}>
                        <Typography color={'#999'} fontSize={'14px'}>Collateral</Typography>
                        <Typography color={'#fff'} fontSize={'14px'}></Typography>
                    </ListItem>

                    <ListItem className={classes.infoListitem}>
                        <Typography color={'#999'} fontSize={'14px'}>Index Entry Price</Typography>
                        <Typography color={'#fff'} fontSize={'14px'} >$22,152.31</Typography>
                    </ListItem>

                    <ListItem className={classes.infoListitem}>
                        <Typography color={'#999'} fontSize={'14px'}>Index Liq. Price</Typography>
                        <Typography color={'#fff'} fontSize={'14px'} >$2,215.23</Typography>
                    </ListItem>

                    <ListItem className={classes.infoListitem}>
                        <Typography color={'#999'} fontSize={'14px'}>Leverage</Typography>
                        <Typography color={'#fff'} fontSize={'14px'}>1x</Typography>
                    </ListItem>

                    <ListItem className={classes.infoListitem}>
                        <Typography color={'#999'} fontSize={'14px'}>Pay</Typography>
                        <Typography color={'#fff'} fontSize={'14px'} >0 ($0.00)</Typography>
                    </ListItem>

                    <ListItem className={classes.infoListitem}>
                        <Typography color={'#999'} fontSize={'14px'}>Long</Typography>
                        <Typography color={'#fff'} fontSize={'14px'}>0 ($0.00)</Typography>
                    </ListItem>

                    <ListItem className={classes.infoListitem}>
                        <Typography color={'#999'} fontSize={'14px'}>Open Fee</Typography>
                        <Typography color={'#fff'} fontSize={'14px'}>0.00</Typography>
                    </ListItem>

                    <ListItem className={classes.infoListitem}>
                        <Typography color={'#999'} fontSize={'14px'}>Borrow Fee</Typography>
                        <Typography color={'#fff'} fontSize={'14px'}>0 / hr.</Typography>
                    </ListItem>
                </List>
            </Box>
            <Box height={30} />
        </>
    )
}

export default Size;