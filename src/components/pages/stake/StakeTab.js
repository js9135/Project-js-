import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import LockupTab from './lockup/LockupTab';
import Staking from './Staking';

const useStyles = makeStyles({
    mainBox: {
        backgroundColor: '#151515',
        padding: '1rem',
        borderRadius: '0.6rem',
        marginTop: '2rem'
    },
    mainBox2: {
        backgroundColor: '#151515',
        padding: '0.5rem',
        borderRadius: '0.6rem',
        marginTop: '2rem'
    },
    tabhding: {
        background: '-webkit-linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: '700 !important'
    },
    revenueBox: {
        backgroundColor: '#fcd3492e',
        borderRadius: '0.5rem',
        padding: '1rem',
        marginTop: '1rem'
    },
    listitem: {
        display: 'inherit !important',
        padding: '0.8rem 0.5rem !important'
    },
    freenft: {
        filter: 'invert(1)'
    }
})



const Tab = styled(TabUnstyled)`
  font-family: poppins;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 0px;
  border: none;
  border-radius: 12px;

  &:hover {
    background-color: bg.default;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #ffa500 ;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: bg.default;
    outline: 3px solid #ffa500 ;
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
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  '@media(max-width : 600px)':{
    display : inherit;
  }
  `,
);

export default function StakeTab() {
    const classes = useStyles();
    return (

        <TabsUnstyled defaultValue={0}>
            <Grid container spacing={2}>
                <Grid item lg={8.5} md={8.5} sm={12} xs={12}>
                    <Box className={classes.mainBox} sx={{ backgroundColor: 'disBtn.default' }}>

                        <TabsList>
                            <Tab sx={{ marginRight: '1rem', backgroundColor: 'bg.default', }}>
                                <Typography className={classes.tabhding} variant='h4'>sYDF</Typography>
                                <Typography fontWeight={700} color="text.default">Single Sided Staking</Typography>
                            </Tab>

                            <Tab sx={{ backgroundColor: 'bg.default', }}>
                                <Typography className={classes.tabhding} variant='h4'>slYDF</Typography>
                                <Typography fontWeight={700} color="text.default">YDF Liquidity Staking</Typography>
                            </Tab>

                        </TabsList>
                        <TabPanel value={0}>
                            <Box className={classes.revenueBox} sx={{ backgroundColor: 'revenue.default' }}>
                                <Typography fontWeight={700} color={'revenuetext.default'}><Typography component={'a'} href="#" color={'revenuetext.default'}>sYDF</Typography>
                                    <Typography component={'span'} color={'revenuetext.default'}>
                                        - Fully tradable, transferrable stake NFT: By staking your YDF,
                                        you will receive a NFT that can be traded freely on the open market
                                        through OpenSea or any other marketplace. It will retain its current
                                        entitled principal amount of YDF, lockup period, and APR from when
                                        it was originally created.
                                    </Typography>
                                </Typography>
                            </Box>
                            <LockupTab
                                NONE={"4"}
                                STEP1_DAYS={"8"}
                                STEP2_DAYS={"12"}
                                STEP3_DAYS={"20"}
                                STEP4_DAYS={"35"}
                            />
                        </TabPanel>
                        <TabPanel value={1}>
                            <Box className={classes.revenueBox} sx={{ backgroundColor: 'revenue.default' }}>
                                <Typography fontWeight={700} color={'revenuetext.default'}><Typography component={'a'} href="#" color={'revenuetext.default'}>slYDF</Typography>
                                    <Typography component={'span'} color={'revenuetext.default'}>
                                        - Fully tradable, transferrable stake NFT: By staking your liquidity,
                                        you will receive a NFT that can be traded freely on the open market through
                                        OpenSea or any other marketplace. It will retain its current entitled
                                        principal amount of Uni-LP, lockup period, and APR from when it
                                        was originally created.
                                    </Typography>
                                </Typography>
                            </Box>
                            <LockupTab
                                NONE={"8"}
                                STEP1_DAYS={"15"}
                                STEP2_DAYS={"25"}
                                STEP3_DAYS={"35"}
                                STEP4_DAYS={"50"}
                            />
                        </TabPanel>

                    </Box>
                </Grid>
                <Grid item lg={3.5} md={3.5} sm={12} xs={12}>




                    <TabPanel value={0}>
                        <Staking
                            LOCK_YDF={'0 YDF'}
                            LOCK_AMOUNT={"0"}
                            DAY={"0"}
                            APR={"4"}
                            EARN_YDF={"0"}
                            EARN_AMOUNT={"0"}
                            NFT_UPON={"sYDF"}
                        />
                    </TabPanel>
                    <TabPanel value={1}>
                        <Staking
                            LOCK_YDF={'100 Uni-LP'}
                            LOCK_AMOUNT={"1,198"}
                            DAY={"0"}
                            APR={"8"}
                            EARN_YDF={"5,463"}
                            EARN_AMOUNT={"96"}
                            NFT_UPON={"slYDF"}
                        />
                    </TabPanel>

                </Grid>
            </Grid>
        </TabsUnstyled>


    );
}