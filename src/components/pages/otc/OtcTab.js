import * as React from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Button, styled, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import OffCanvas from '../marketplace/OffCanvas'
import { useAccount } from 'wagmi';
import Collection from './Collection';
import PoolTab from './PoolTab';
import CreateOTCModal from './CreateOTCModal';


const useStyles = makeStyles({
    mainBox: {
        backgroundColor: 'transparent',
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
    },
    connectwalletbtn: {
        marginRight: '1rem !important',

        padding: '0.4rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#999 !important',
        textTransform: 'none !important',

    },

})



const Tab = styled(TabUnstyled)`
  font-family: poppins;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
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
  `,
);





export default function OtcTab() {
    const classes = useStyles();
    const accountStatus = useAccount()
    return (

        <Box className={classes.mainBox}>
            <TabsUnstyled defaultValue={0}>
                <Box sx={{
                    display: 'flex', justifyContent: 'space-between',
                    '@media(max-width : 600px)': { display: 'inherit' }
                }}>
                    <TabsList sx={{ '@media(max-width : 600px)': { justifyContent: 'left' } }}>
                        <Tab sx={{ marginRight: '1rem', backgroundColor: 'bg.default' }}>
                            <Typography fontWeight={700} color={'text.default'}>Packages</Typography>
                        </Tab>

                        <Tab sx={{ backgroundColor: 'bg.default' }}>
                            <Typography fontWeight={700} color={'text.default'}>Pools</Typography>
                        </Tab>

                    </TabsList>

                    <TabPanel value={0}>
                        <Box sx={{ display: 'flex', '@media(max-width : 600px)': { marginBottom: '1rem' } }}>
                            {accountStatus.isConnected ? <Box><CreateOTCModal /></Box> : <Box><Button className={classes.connectwalletbtn} sx={{
                                backgroundColor: 'disBtn.default', '&:hover': {
                                    backgroundColor: 'disBtn.default'
                                }
                            }} variant='contained'>Connect Wallet</Button></Box>}
                            <Box ml={2}><OffCanvas /></Box>
                        </Box>

                    </TabPanel>
                    <TabPanel value={1}>
                        <Box sx={{ display: 'flex', '@media(max-width : 600px)': { marginBottom: '1rem' } }}>
                            {accountStatus.isConnected ? <Box><CreateOTCModal /></Box> : <Box><Button className={classes.connectwalletbtn} sx={{
                                backgroundColor: 'disBtn.default', '&:hover': {
                                    backgroundColor: 'disBtn.default'
                                }
                            }} variant='contained'>Connect Wallet</Button></Box>}

                        </Box>

                    </TabPanel>
                </Box>
                <TabPanel value={0}>
                    <Collection />

                </TabPanel>
                <TabPanel value={1}>
                    <PoolTab />

                </TabPanel>
            </TabsUnstyled>
        </Box>

    );
}