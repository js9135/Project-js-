import * as React from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Button, Divider, styled, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAccount } from 'wagmi';
import ethconnect from '../../assets/images/ethconnect.png'
import Dogpadconnect from '../../assets/images/Dogpadconnect.webp'
import logo from '../../assets/images/logo.png'
import usdcIcon from '../../assets/images/usdcIcon.svg'
import ChangePair from './ChangePair';


const useStyles = makeStyles({
    mainBox: {
        backgroundColor: 'transparent',
        borderRadius: '0.6rem',
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
    },
    mainTab: {
        backgroundColor: '#151515',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        margin: '1rem 12rem',
        '@media(max-width : 1200px)':{
            margin: '1rem 8rem',
            '@media(max-width : 900px)':{
                margin: '1rem 2rem',
                '@media(max-width : 600px)':{
                    margin: '1rem 0rem',
                    padding: '1rem 1.5rem',
                }
            }
        }
    }
})



const Tab = styled(TabUnstyled)`
  font-family: poppins;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  padding:8px 10px 4px 10px;
  margin: 6px 0px;
  border: none;
  border-radius: 2rem;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  `,
);





export default function PoolTab() {
    const classes = useStyles();
    const accountStatus = useAccount()
    return (

        <Box className={classes.mainBox}>
            <TabsUnstyled defaultValue={0}>
                <Box className={classes.mainTab} sx={{backgroundColor : 'disBtn.default'}}>
                    <Box>
                        <Typography color={'#ffa500'}>Tradable Pairs</Typography>
                    </Box>
                    <Divider sx={{ margin: '0.6rem 0rem' }} />
                    <TabsList>
                        <Tab sx={{ marginRight: '1rem', backgroundColor : 'bg.default' }}>
                            <Typography display={'inline-block'} component={'img'} src={ethconnect} width={25} />
                            <Typography display={'inline-block'} component={'img'} src={Dogpadconnect} width={25} ml={-0.5} />
                        </Tab>

                        <Tab sx={{ marginRight: '1rem',backgroundColor : 'bg.default' }}>
                            <Typography display={'inline-block'} component={'img'} src={ethconnect} width={25} />
                            <Typography display={'inline-block'} component={'img'} src={logo} width={25} ml={-0.5} />
                        </Tab>

                        <Tab sx={{backgroundColor : 'bg.default'}}>
                            <Typography display={'inline-block'} component={'img'} src={usdcIcon} width={25} />
                            <Typography display={'inline-block'} component={'img'} src={logo} width={25} ml={-0.5} />
                        </Tab>

                    </TabsList>
                </Box>





                <TabPanel value={0}>
                    <ChangePair
                        PAIR_HEADING="Swap ETH for DOGPAD"
                        AMOUNT_TEXT={'ETH you will give'}
                        SWAP={'0.0125 ETH'}
                        SWAP_IN={'($20.40)'}
                        COIN_TOP={1}
                        AMOUNT_TEXT_BOTTOM={'DOGPAD you will receive'}
                        POOL={'9,950,000 DOGPAD'}
                        POOL_IN={'($11.24)'}
                        COIN_BOTTOM={2}
                        ER_ONE={'1 ETH'}
                        ER_TWO={'($1,641)'}
                        ER_THREE={'= 796,347,500 DOGPAD'}
                        ER_FOUR={'($916)'}
                        PROGRESS_BAR={100}
                    />
                </TabPanel>
                <TabPanel value={1}>

                    <ChangePair
                        PAIR_HEADING="Swap ETH for YDF"
                        AMOUNT_TEXT={'ETH you will give'}
                        SWAP={'0.000241 ETH'}
                        SWAP_IN={'($0.40)'}
                        COIN_TOP={1}
                        AMOUNT_TEXT_BOTTOM={'YDF you will receive'}
                        POOL={'9.900 YDF'}
                        POOL_IN={'($0.19)'}
                        COIN_BOTTOM={3}
                        ER_ONE={'1 ETH'}
                        ER_TWO={'($1,642)'}
                        ER_THREE={'= 41,031 YDF'}
                        ER_FOUR={'($794)'}
                        PROGRESS_BAR={100}
                    />
                </TabPanel>
                <TabPanel value={2}>
                    <ChangePair
                        PAIR_HEADING="Swap USDC for YDF"
                        AMOUNT_TEXT={'USDC you will give'}
                        SWAP={'110 USDC'}
                        SWAP_IN={'($110.19)'}
                        COIN_TOP={3}
                        AMOUNT_TEXT_BOTTOM={'YDF you will receive'}
                        POOL={'5,505 YDF'}
                        POOL_IN={'($106.52)'}
                        COIN_BOTTOM={2}
                        ER_ONE={'1 USDC'}
                        ER_TWO={'($1)'}
                        ER_THREE={'= 49.9 YDF'}
                        ER_FOUR={'($0.966)'}
                        PROGRESS_BAR={20}
                    />

                </TabPanel>
            </TabsUnstyled>
        </Box>

    );
}