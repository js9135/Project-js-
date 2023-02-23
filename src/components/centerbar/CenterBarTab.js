import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import greenArrow from '../assets/images/greenArrow.svg'
import redArrow from '../assets/images/redArrow.svg'
import Size from './Size';


const useStyles = makeStyles({
    mainBox: {
        marginTop: '1rem'
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
  display : flex;
  border: none;
  border-radius: 12px;
  &:hover {
    background-color: #080808;
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

export default function CenterBarTab() {
    const classes = useStyles();
    return (


        <Box className={classes.mainBox}>
            <TabsUnstyled defaultValue={0}>
                <TabsList>
                    <Tab sx={{ marginRight: '1rem' }}>
                        <Typography component={'img'} src={greenArrow} />
                        <Typography fontWeight={700} ml={1}>Long</Typography>
                    </Tab>

                    <Tab>
                        <Typography component={'img'} src={redArrow} />
                        <Typography fontWeight={700} ml={1}>Short</Typography>
                    </Tab>

                </TabsList>
                <TabPanel value={0}>
                    <Size TabTitle="LONG" />

                </TabPanel>
                <TabPanel value={1}>
                    <Size TabTitle="SHORT"/>

                </TabPanel>
            </TabsUnstyled>
        </Box>

    );
}