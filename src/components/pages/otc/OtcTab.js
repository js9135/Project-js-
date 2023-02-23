import * as React from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Button,  styled, Typography } from '@mui/material';
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
        backgroundColor: '#252525 !important',
        padding: '0.4rem 1rem !important',
        borderRadius: '3rem !important',
        color: '#fff !important',
        textTransform: 'none !important'
    },
   
})



const Tab = styled(TabUnstyled)`
  font-family: poppins;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: #080808;
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TabsList>
                        <Tab sx={{ marginRight: '1rem' }}>
                            <Typography fontWeight={700}>Packages</Typography>
                        </Tab>

                        <Tab>
                            <Typography fontWeight={700}>Pools</Typography>
                        </Tab>

                    </TabsList>

                    <TabPanel value={0}>
                        <Box sx={{ display: 'flex' }}>
                            {accountStatus.isConnected ? <Box><CreateOTCModal/></Box> : <Box><Button className={classes.connectwalletbtn} variant='contained'>Connect Wallet</Button></Box>}
                            <Box ml={2}><OffCanvas /></Box>
                        </Box>

                    </TabPanel>
                    <TabPanel value={1}>
                        <Box sx={{ display: 'flex' }}>
                            {accountStatus.isConnected ? <Box><CreateOTCModal/></Box> : <Box><Button className={classes.connectwalletbtn} variant='contained'>Connect Wallet</Button></Box>}

                        </Box>

                    </TabPanel>
                </Box>
                <TabPanel value={0}>
                    <Collection/>

                </TabPanel>
                <TabPanel value={1}>
                     <PoolTab/>

                </TabPanel>
            </TabsUnstyled>
        </Box>

    );
}