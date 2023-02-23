import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import freenft from '../../assets/images/freenft.png'
import LockupTab from './lockup/LockupTab';

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
  background-color: #080808;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 0px;
  border: none;
  border-radius: 12px;

  &:hover {
    background-color: #000;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #ffa500 ;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #000;
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
  min-width: 400px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
);

export default function StakeTab() {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item lg={8.5} md={8.5} sm={12} xs={12}>
                <Box className={classes.mainBox}>
                    <TabsUnstyled defaultValue={0}>
                        <TabsList>
                            <Tab sx={{ marginRight: '1rem' }}>
                                <Typography className={classes.tabhding} variant='h4'>sYDF</Typography>
                                <Typography fontWeight={700}>Single Sided Staking</Typography>
                            </Tab>

                            <Tab>
                                <Typography className={classes.tabhding} variant='h4'>slYDF</Typography>
                                <Typography fontWeight={700}>YDF Liquidity Staking</Typography>
                            </Tab>

                        </TabsList>
                        <TabPanel value={0}>
                            <Box className={classes.revenueBox}>
                                <Typography fontWeight={700} color={'#FCD349'}><Typography component={'a'} href="#" color={'#FCD349'}>sYDF</Typography>
                                    <Typography component={'span'} color={'#FCD349'}>
                                        - Fully tradable, transferrable stake NFT: By staking your YDF,
                                        you will receive a NFT that can be traded freely on the open market
                                        through OpenSea or any other marketplace. It will retain its current
                                        entitled principal amount of YDF, lockup period, and APR from when
                                        it was originally created.
                                    </Typography>
                                </Typography>
                            </Box>
                            <LockupTab />
                        </TabPanel>
                        <TabPanel value={1}>
                            <Box className={classes.revenueBox}>
                                <Typography fontWeight={700} color={'#FCD349'}><Typography component={'a'} href="#" color={'#FCD349'}>slYDF</Typography>
                                    <Typography component={'span'} color={'#FCD349'}>
                                        - Fully tradable, transferrable stake NFT: By staking your liquidity,
                                        you will receive a NFT that can be traded freely on the open market through
                                        OpenSea or any other marketplace. It will retain its current entitled
                                        principal amount of Uni-LP, lockup period, and APR from when it
                                        was originally created.
                                    </Typography>
                                </Typography>
                            </Box>
                            <LockupTab />
                        </TabPanel>
                    </TabsUnstyled>
                </Box>
            </Grid>
            <Grid item lg={3.5} md={3.5} sm={12} xs={12}>
                <Box className={classes.mainBox2}>
                    <List>
                        <ListItem className={classes.listitem}>
                            <Typography color={'#fff'}>Lock Amount:</Typography>
                            <Typography className={classes.tabhding} variant="h6">100 YDF</Typography>
                            <Typography color={'#fff'}>($2)</Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <Typography color={'#fff'}>Lockup Period:</Typography>
                            <Typography className={classes.tabhding} variant="h6">0 days</Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <Typography color={'#fff'}>APR:</Typography>
                            <Typography className={classes.tabhding} variant="h6">4%</Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <Typography color={'#fff'}>Earn Amount (every 365 days):</Typography>
                            <Typography className={classes.tabhding} variant="h6">4 YDF</Typography>
                            <Typography color={'#fff'}>($0)</Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <Typography color={'#fff'} variant="h6" fontWeight={700}>You will receive a free sYDF NFT upon staking!</Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <Typography className={classes.freenft} component={'img'} src={freenft} width={'100%'} />
                        </ListItem>
                    </List>
                </Box>
            </Grid>
        </Grid>
    );
}