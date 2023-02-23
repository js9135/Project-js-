import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, List, ListItem, Slider, Typography } from "@mui/material";
import ohfimg from '../../assets/images/ohfimg.png'
import ethIcon from '../../assets/images/ethIcon.svg'
import logow from '../../assets/images/logow.svg'
import sfimg from '../../assets/images/sfimg.png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import eth from '../../assets/images/ethIcon.svg'
import daiIcon from '../../assets/images/daiIcon.svg'
import usdcIcon from '../../assets/images/usdcIcon.svg'
import usdtIcon from '../../assets/images/usdtIcon.svg'
import Modal from "./Modal";
import OffCanvas from "./OffCanvas";





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
    }
})


const NFTBOX = [
    {
        id: 1,
        NFTIMG: ohfimg,
        APR: '150% APR',
        STAKED: 'Staked YDF #11',
        OWNERADDRESS: '0x5584...4586',
        STAKE_PRINCIPAL: '6,969,000 YDF',
        STAKE_PRINCIPAL_IN: '($166,362)',
        EARNING: '10,453,500 YDF',
        EARNING_IN: '($249,543)',
        ENDS_DATE: 'Mar 31, 2023 19:51',
        REMAININD: '42D 9H 27M'
    },
    {
        id: 2,
        NFTIMG: sfimg,
        APR: '75% APR',
        STAKED: 'Staked Liquidity #15',
        OWNERADDRESS: '0xde27...d022',
        STAKE_PRINCIPAL: '3 Uni-LP',
        STAKE_PRINCIPAL_IN: '($44)',
        EARNING: '1,620 YDF',
        EARNING_IN: '($39)',
        ENDS_DATE: 'Aug 18, 2022 15:39',
        REMAININD: '0D 0H 0M'
    },
    {
        id: 3,
        NFTIMG: ohfimg,
        APR: '150% APR',
        STAKED: 'Staked YDF #11',
        OWNERADDRESS: '0x5584...4586',
        STAKE_PRINCIPAL: '6,969,000 YDF',
        STAKE_PRINCIPAL_IN: '($166,362)',
        EARNING: '10,453,500 YDF',
        EARNING_IN: '($249,543)',
        ENDS_DATE: 'Mar 31, 2023 19:51',
        REMAININD: '42D 9H 27M'
    },
    {
        id: 4,
        NFTIMG: sfimg,
        APR: '75% APR',
        STAKED: 'Staked Liquidity #15',
        OWNERADDRESS: '0xde27...d022',
        STAKE_PRINCIPAL: '3 Uni-LP',
        STAKE_PRINCIPAL_IN: '($44)',
        EARNING: '1,620 YDF',
        EARNING_IN: '($39)',
        ENDS_DATE: 'Aug 18, 2022 15:39',
        REMAININD: '0D 0H 0M'
    },
    {
        id: 5,
        NFTIMG: ohfimg,
        APR: '150% APR',
        STAKED: 'Staked YDF #11',
        OWNERADDRESS: '0x5584...4586',
        STAKE_PRINCIPAL: '6,969,000 YDF',
        STAKE_PRINCIPAL_IN: '($166,362)',
        EARNING: '10,453,500 YDF',
        EARNING_IN: '($249,543)',
        ENDS_DATE: 'Mar 31, 2023 19:51',
        REMAININD: '42D 9H 27M'
    },
    {
        id: 6,
        NFTIMG: sfimg,
        APR: '75% APR',
        STAKED: 'Staked Liquidity #15',
        OWNERADDRESS: '0xde27...d022',
        STAKE_PRINCIPAL: '3 Uni-LP',
        STAKE_PRINCIPAL_IN: '($44)',
        EARNING: '1,620 YDF',
        EARNING_IN: '($39)',
        ENDS_DATE: 'Aug 18, 2022 15:39',
        REMAININD: '0D 0H 0M'
    },
    {
        id: 7,
        NFTIMG: ohfimg,
        APR: '150% APR',
        STAKED: 'Staked YDF #11',
        OWNERADDRESS: '0x5584...4586',
        STAKE_PRINCIPAL: '6,969,000 YDF',
        STAKE_PRINCIPAL_IN: '($166,362)',
        EARNING: '10,453,500 YDF',
        EARNING_IN: '($249,543)',
        ENDS_DATE: 'Mar 31, 2023 19:51',
        REMAININD: '42D 9H 27M'
    },
    {
        id: 8,
        NFTIMG: sfimg,
        APR: '75% APR',
        STAKED: 'Staked Liquidity #15',
        OWNERADDRESS: '0xde27...d022',
        STAKE_PRINCIPAL: '3 Uni-LP',
        STAKE_PRINCIPAL_IN: '($44)',
        EARNING: '1,620 YDF',
        EARNING_IN: '($39)',
        ENDS_DATE: 'Aug 18, 2022 15:39',
        REMAININD: '0D 0H 0M'
    },
    {
        id: 9,
        NFTIMG: ohfimg,
        APR: '150% APR',
        STAKED: 'Staked YDF #11',
        OWNERADDRESS: '0x5584...4586',
        STAKE_PRINCIPAL: '6,969,000 YDF',
        STAKE_PRINCIPAL_IN: '($166,362)',
        EARNING: '10,453,500 YDF',
        EARNING_IN: '($249,543)',
        ENDS_DATE: 'Mar 31, 2023 19:51',
        REMAININD: '42D 9H 27M'
    },
    {
        id: 10,
        NFTIMG: sfimg,
        APR: '75% APR',
        STAKED: 'Staked Liquidity #15',
        OWNERADDRESS: '0xde27...d022',
        STAKE_PRINCIPAL: '3 Uni-LP',
        STAKE_PRINCIPAL_IN: '($44)',
        EARNING: '1,620 YDF',
        EARNING_IN: '($39)',
        ENDS_DATE: 'Aug 18, 2022 15:39',
        REMAININD: '0D 0H 0M'
    },
    {
        id: 11,
        NFTIMG: ohfimg,
        APR: '150% APR',
        STAKED: 'Staked YDF #11',
        OWNERADDRESS: '0x5584...4586',
        STAKE_PRINCIPAL: '6,969,000 YDF',
        STAKE_PRINCIPAL_IN: '($166,362)',
        EARNING: '10,453,500 YDF',
        EARNING_IN: '($249,543)',
        ENDS_DATE: 'Mar 31, 2023 19:51',
        REMAININD: '42D 9H 27M'
    },
    {
        id: 12,
        NFTIMG: sfimg,
        APR: '75% APR',
        STAKED: 'Staked Liquidity #15',
        OWNERADDRESS: '0xde27...d022',
        STAKE_PRINCIPAL: '3 Uni-LP',
        STAKE_PRINCIPAL_IN: '($44)',
        EARNING: '1,620 YDF',
        EARNING_IN: '($39)',
        ENDS_DATE: 'Aug 18, 2022 15:39',
        REMAININD: '0D 0H 0M'
    },
    {
        id: 13,
        NFTIMG: ohfimg,
        APR: '150% APR',
        STAKED: 'Staked YDF #11',
        OWNERADDRESS: '0x5584...4586',
        STAKE_PRINCIPAL: '6,969,000 YDF',
        STAKE_PRINCIPAL_IN: '($166,362)',
        EARNING: '10,453,500 YDF',
        EARNING_IN: '($249,543)',
        ENDS_DATE: 'Mar 31, 2023 19:51',
        REMAININD: '42D 9H 27M'
    },
    {
        id: 14,
        NFTIMG: sfimg,
        APR: '75% APR',
        STAKED: 'Staked Liquidity #15',
        OWNERADDRESS: '0xde27...d022',
        STAKE_PRINCIPAL: '3 Uni-LP',
        STAKE_PRINCIPAL_IN: '($44)',
        EARNING: '1,620 YDF',
        EARNING_IN: '($39)',
        ENDS_DATE: 'Aug 18, 2022 15:39',
        REMAININD: '0D 0H 0M'
    },
    {
        id: 15,
        NFTIMG: ohfimg,
        APR: '150% APR',
        STAKED: 'Staked YDF #11',
        OWNERADDRESS: '0x5584...4586',
        STAKE_PRINCIPAL: '6,969,000 YDF',
        STAKE_PRINCIPAL_IN: '($166,362)',
        EARNING: '10,453,500 YDF',
        EARNING_IN: '($249,543)',
        ENDS_DATE: 'Mar 31, 2023 19:51',
        REMAININD: '42D 9H 27M'
    },
    {
        id: 16,
        NFTIMG: sfimg,
        APR: '75% APR',
        STAKED: 'Staked Liquidity #15',
        OWNERADDRESS: '0xde27...d022',
        STAKE_PRINCIPAL: '3 Uni-LP',
        STAKE_PRINCIPAL_IN: '($44)',
        EARNING: '1,620 YDF',
        EARNING_IN: '($39)',
        ENDS_DATE: 'Aug 18, 2022 15:39',
        REMAININD: '0D 0H 0M'
    },

]


const marks = [
    {
        value: 0,
        label: '0',
    },

    {
        value: 100,
        label: 'Max',
    },
];



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

const Collection = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };


    return (
        <>
            <Box className={classes.collectionHeading}>
                <Typography color={'#fff'} fontWeight={700}>Collection List</Typography>
                <OffCanvas />
            </Box>

            <Box>
                <Grid container spacing={3}>
                    {
                        NFTBOX.map((e, id) => {
                            const {
                                NFTIMG: ohfimg,
                                APR,
                                STAKED,
                                OWNERADDRESS,
                                STAKE_PRINCIPAL,
                                STAKE_PRINCIPAL_IN,
                                EARNING,
                                EARNING_IN,
                                ENDS_DATE,
                                REMAININD,
                            } = e
                            return (
                                <Grid key={id} item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={classes.marketplaceBox}>
                                        <Box className={classes.topBoxM}>
                                            <Box className={classes.nftImage}>
                                                <Typography component={'img'} src={ohfimg} width={'100%'} />
                                            </Box>
                                            <Box className={classes.stakedMark}>
                                                <Typography  ><Typography component={'span'} className={classes.sYDF} color={'#fff'}>sYDF</Typography>
                                                    <Typography component={'span'} color={'#fff'} fontWeight={700}> {APR}</Typography>
                                                </Typography>
                                                <Box height={10} />
                                                <Typography component={'a'} href={'#'} variant="h6" color={'#fff'} fontWeight={700}>{STAKED}</Typography>
                                            </Box>
                                        </Box>

                                        <List className={classes.addressList}>
                                            <ListItem className={classes.addressWrap}>
                                                <Box>
                                                    <Typography className={classes.addessFontSize} color={'#999'}>Owner:</Typography>
                                                </Box>
                                                <Box className={classes.addessCont}>
                                                    <Typography component={'img'} src={ethIcon} />
                                                    <Typography component={'a'} href="https://etherscan.io/address/0x558400EEfcBA45b227163B08e9d60F4d388d4586" target={'_blank'} fontWeight={700} color={'#fff'} ml={1}>{OWNERADDRESS}</Typography>
                                                </Box>
                                            </ListItem>

                                            <ListItem className={classes.addressWrap}>
                                                <Box>
                                                    <Typography className={classes.addessFontSize} color={'#999'}>Stake Principal:</Typography>
                                                </Box>
                                                <Box className={classes.addessCont}>
                                                    <Typography component={'img'} src={logow} />
                                                    <Typography fontWeight={700} color={'#fff'} ml={1}>{STAKE_PRINCIPAL}
                                                        <Typography component={'span'} color={'#ffa500'}> {STAKE_PRINCIPAL_IN}</Typography>
                                                    </Typography>
                                                </Box>
                                            </ListItem>

                                            <ListItem className={classes.addressWrap}>
                                                <Box>
                                                    <Typography className={classes.addessFontSize} color={'#999'}>Earning Per Annum:</Typography>
                                                </Box>
                                                <Box className={classes.addessCont}>
                                                    <Typography component={'img'} src={logow} />
                                                    <Typography fontWeight={700} color={'#fff'} ml={1}>{EARNING}
                                                        <Typography component={'span'} color={'#ffa500'}> {EARNING_IN}</Typography>
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                        </List>

                                        <List className={classes.addressList}>
                                            <ListItem className={classes.addressWrap}>
                                                <Box>
                                                    <Typography className={classes.addessFontSize} color={'#fff'}>Lockup Expires</Typography>
                                                    <Typography color={'#fff'}>Ends
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
                                                <Typography color={'#fff'}>Time Remaining:
                                                    <Typography component={'span'}> {REMAININD}</Typography>
                                                </Typography>
                                            </ListItem>




                                        </List>

                                        <Modal />
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>

            <Stack spacing={2}>
                {/* <Typography color={'#fff'}>Page: {page}</Typography> */}
                <Pagination sx={{
                    marginTop: '2rem',
                    '& .MuiButtonBase-root': { color: '#fff' },
                    '& .MuiPagination-ul': { justifyContent: 'center' }
                }} color="primary" count={10} page={page} onChange={handleChange} />

            </Stack>

        </>
    )
}

export default Collection;