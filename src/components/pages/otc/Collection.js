import React, { useContext, } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, List, ListItem, Slider, Typography } from "@mui/material";
import ethIcon from '../../assets/images/ethIcon.svg'
import logow from '../../assets/images/logow.svg'
import logoww from '../../assets/images/logoww.svg'
import logo from '../../assets/images/logo.png'
import packageimg from '../../assets/images/packageimg.png'
import ethsilver from '../../assets/images/ethsilver.png';
import MakeOfferModal from "./MakeOfferModal";
import BuyModal from "./BuyModal";
import { ColorModeContext } from "../../../store/Index";






const useStyles = makeStyles({
    collectionHeading: {
        marginTop: '1.5rem',
        marginBottom: '1rem',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between'
    },

    marketplaceBox: {
        backgroundColor: '#151515',
        borderRadius: '1rem',
        padding: '1rem'
    },
    nftImage: {
        width: '100px'
    },
    topBoxM: {
        display: 'flex',
        alignItems: 'center'
    },
    stakedMark: {
        marginLeft: '1rem'
    },
    sYDF: {
        padding: '0.3rem 0.6rem',
        borderRadius: '0.4rem',
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        fontSize: '13px !important'
    },
    addessCont: {
        display: 'flex'
    },
    addressWrap: {
        justifyContent: 'space-between !important',
        padding: '0.1rem 1rem !important'
    },
    addessFontSize: {
        fontSize: '14px !important'
    },
    addressList: {
        backgroundColor: '#000',
        borderRadius: '0.5rem',
        marginTop: '1rem !important'
    },
    listPriceG: {
        
        borderRadius: '0.5rem',
        marginTop: '1rem !important'
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
    makeOfferBtn: {
        background: 'linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        padding: '0.5rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
        marginTop: '1rem !important'
    },
    stakedPlaceBox: {
        padding: '1rem 8rem',
        border: '1px solid #ffa50033',
        borderRadius: '0.5rem'
    },
    modalHding: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    textfield3: {
        border: '1px solid transparent  !important',
        borderRadius: '12px',
        backgroundColor: '#000',
        color: '#fff !important'
    },
    enterBox: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    enterBoxWrap: {
        backgroundColor: '#151515',
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '0.5rem'
    },
    laverageSlider: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem'
    },
    formCont: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '0.5rem',
        backgroundColor: '#000',
        marginTop: '1rem'
    },
    menuItemSelect: {
        backgroundColor: "#000 !important",
        '&:hover': { backgroundColor: '#292929 !important', }
    },
    duration: {
        padding: '0.6rem 1rem',
        marginTop: '0.5rem',
        borderRadius: '0.5rem',
        backgroundColor: '#fcd34912',
    },
    earningRewardBox: {
        backgroundColor: '#151515',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginTop: '0.6rem'
    },
    makeOfferModalBtn: {
        backgroundColor: '#646464 !important',
        color: '#fff !important',
        marginTop: '1rem !important',
        borderRadius: '2rem !important',
        padding: '0.6rem 1rem !important'
    },
    asset: {
        backgroundColor: '#ffa500d9',
        padding: '0.3rem 0.5rem',
        borderRadius: '0.3rem'
    },
    modalBtn: {
        display: 'flex'
    }
})


const NFTBOX = [
    {
        id: 1,
        NFTIMG: packageimg,
        ETH: '0.00500 ETH',
        ETH_IN: '($8.21)',
        ASSET: 'Assets in Package',
        STAKED: 'OTC Package #2',
        STAKE_PRINCIPAL: '25.5 YDF',
        STAKE_PRINCIPAL_IN: '($0.48)',
        ETH_ONE: '1 ETH',
        ETH_ONE_IN: '($1,642.63)',
        ENDS_DATE: 'Feb 1, 2023 07:25',
        START_DATE: 'Jan 30, 2023 07:25',
        REMAININD: '0D 0H 0M',
        OWNER: '0x3a15...Af1e',
        WETH: '0.000691 WETH',
        WETH_IN: '($1.13)'
    },

]








function valuetext(value) {
    return `${value}°C`;
}

const Collection = () => {
    const classes = useStyles();
    const { mode, toggleMode } = useContext(ColorModeContext)

    return (
        <>


            <Box>
                <Grid container spacing={3}>
                    {
                        NFTBOX.map((e, id) => {
                            const {
                                OWNER,
                                NFTIMG: ohfimg,
                                ETH,
                                ETH_IN,
                                STAKED,
                                STAKE_PRINCIPAL,
                                STAKE_PRINCIPAL_IN,
                                ASSET,
                                ETH_ONE,
                                ETH_ONE_IN,
                                ENDS_DATE,
                                START_DATE,
                                REMAININD,
                                WETH,
                                WETH_IN
                            } = e
                            return (
                                <Grid key={id} item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={classes.marketplaceBox} sx={{backgroundColor : 'disBtn.default'}}>
                                        <Box className={classes.topBoxM}>
                                            <Box className={classes.nftImage}>
                                                <Typography component={'img'} src={ohfimg} width={'100%'} />
                                            </Box>
                                            <Box className={classes.stakedMark}>
                                                <Typography  ><Typography component={'span'} className={classes.sYDF} color={'text.default'}>PACKAGE</Typography>

                                                </Typography>
                                                <Box height={10} />
                                                <Typography component={'a'} href={'#'} variant="h6" color={'text.default'} fontWeight={700}>{STAKED}</Typography>
                                            </Box>
                                        </Box>

                                        <List className={classes.addressList} sx={{backgroundColor : 'bg.default'}}>

                                            <ListItem className={classes.addressWrap}>
                                                <Box className={classes.addessCont}>

                                                    <Typography className={classes.asset} mb={1} fontSize={14} color={'#000'} >{ASSET}</Typography>
                                                </Box>
                                            </ListItem>
                                            <Box height={5} />
                                            <ListItem className={classes.addressWrap}>
                                                <Box className={classes.addessCont}>
                                                    <Typography component={'img'} src={logo} width={25} />
                                                    <Typography fontWeight={700} color={'text.default'} ml={1}>{STAKE_PRINCIPAL}
                                                        <Typography component={'span'} color={'#ffa500'}> {STAKE_PRINCIPAL_IN}</Typography>
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                            <Box height={5} />
                                            <ListItem className={classes.addressWrap}>
                                                <Box className={classes.addessCont}>
                                                    <Typography component={'img'} src={ethsilver} width={25} />
                                                    <Typography fontWeight={700} color={'text.default'} ml={1}>{ETH}
                                                        <Typography component={'span'} color={'#ffa500'}> {ETH_IN}</Typography>
                                                    </Typography>
                                                </Box>
                                            </ListItem>

                                        </List>

                                        <List className={classes.listPriceG} sx={{background: `${mode === 'dark' ? 'linear-gradient(220deg, #000000 45%, #d98c004f 100%)' : 'linear-gradient(220deg, #f1f1f1 45%, #d98c004f 100%)'}`,}}>


                                            <ListItem className={classes.addressWrap}>
                                                <Box>
                                                    <Typography className={classes.addessFontSize} color={'text.default'}>List Price</Typography>
                                                </Box>
                                            </ListItem>

                                            <ListItem className={classes.addressWrap}>
                                                <Box className={classes.addessCont}>
                                                    <Typography fontWeight={700} color={'text.default'} >{ETH_ONE}
                                                        <Typography component={'span'} color={'#ffa500'}> {ETH_ONE_IN}</Typography>
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                            <ListItem className={classes.addressWrap}>
                                                <Box className={classes.addessCont}>
                                                    <Typography fontSize={13} color={'text.default'} >Click Buy below to buy today!</Typography>
                                                </Box>
                                            </ListItem>



                                        </List>

                                        <List className={classes.addressList} sx={{backgroundColor : 'bg.default'}}>
                                            <ListItem className={classes.addressWrap}>
                                                <Box>
                                                    <Typography className={classes.addessFontSize} color={'text.default'}>Vesting Period</Typography>
                                                    <Typography color={'text.default'}>Starts:
                                                        <Typography component={'span'}> {START_DATE}</Typography>
                                                    </Typography>
                                                    <Typography color={'text.default'}>Ends:
                                                        <Typography component={'span'}> {ENDS_DATE}</Typography>
                                                    </Typography>
                                                </Box>
                                            </ListItem>

                                            <ListItem className={classes.addressWrap}>
                                                <Slider
                                                    aria-label="Always visible"
                                                    defaultValue={70}
                                                    getAriaValueText={valuetext}
                                                    step={10}
                                                    // marks={marks}
                                                    valueLabelDisplay="off"
                                                    className={classes.sliderRange}
                                                />

                                            </ListItem>

                                            <ListItem className={classes.addressWrap}>
                                                <Typography color={'text.default'}>Time Remaining:
                                                    <Typography component={'span'}> {REMAININD}</Typography>
                                                </Typography>
                                            </ListItem>




                                        </List>

                                        <List className={classes.addressList} sx={{backgroundColor : 'bg.default'}}>
                                            <ListItem className={classes.addressWrap}>
                                                <Box>
                                                    <Typography className={classes.addessFontSize} color={'#999'}>Owner:</Typography>
                                                </Box>
                                                <Box className={classes.addessCont}>
                                                    <Typography component={'img'} src={ethIcon} />
                                                    <Typography component={'a'} href="https://etherscan.io/address/0x558400EEfcBA45b227163B08e9d60F4d388d4586" target={'_blank'} fontWeight={700} color={'text.default'} ml={1}>{OWNER}</Typography>
                                                </Box>
                                            </ListItem>

                                            <ListItem className={classes.addressWrap}>
                                                <Box>
                                                    <Typography className={classes.addessFontSize} color={'#999'}>Highest Offer:</Typography>
                                                </Box>
                                                <Box className={classes.addessCont}>
                                                    <Typography component={'img'} src={`${mode === 'dark' ? logow : logoww}`} />
                                                    <Typography fontWeight={700} color={'text.default'} ml={1}>{WETH}
                                                        <Typography component={'span'} color={'#ffa500'}> {WETH_IN}</Typography>
                                                    </Typography>
                                                </Box>
                                            </ListItem>


                                        </List>

                                        <Box className={classes.modalBtn}>
                                            <MakeOfferModal />
                                            <Box width={30}/>
                                            <BuyModal />
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>















        </>
    )
}

export default Collection;