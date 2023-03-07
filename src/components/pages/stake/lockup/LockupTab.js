import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box,  Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import SliderBox from '../../bridge/SliderBox';
import LockupTabPanel from './LockupTabPanel';
import LockupBox from './LockupBox';
import { NoEncryptionGmailerrorredSharp } from '@mui/icons-material';

const useStyles = makeStyles({
    mainBox: {
        marginTop: '1rem'
    },
    tabhding: {
        background: '-webkit-linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: '700'
    },
    lockupHding: {
        marginTop: '2rem'
    },




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
   
  `,
);

export default function LockupTab({NONE, STEP1_DAYS, STEP2_DAYS, STEP3_DAYS, STEP4_DAYS}) {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box className={classes.lockupHding}>
                    <Typography fontWeight={700} color={'text.default'}>Lockup Period</Typography>
                </Box>
                <Box className={classes.mainBox}>
                    <TabsUnstyled defaultValue={0}>
                        <TabsList sx={{ '@media(max-width : 600px)': { display: 'inherit' } }}>
                            <Tab sx={{ marginRight: '1rem',backgroundColor: 'bg.default', }}>
                                <Typography fontWeight={700} variant='h6' color={'text.default'}>None</Typography>
                                <Typography className={classes.tabhding}>{NONE}%APR</Typography>
                            </Tab>

                            <Tab sx={{ marginRight: '1rem',backgroundColor: 'bg.default', }}>
                                <Typography fontWeight={700} variant='h6' color={'text.default'}>14 days</Typography>
                                <Typography className={classes.tabhding}>{STEP1_DAYS}%APR</Typography>
                            </Tab>

                            <Tab sx={{ marginRight: '1rem',backgroundColor: 'bg.default', }}>
                                <Typography fontWeight={700} variant='h6' color={'text.default'}>120 days</Typography>
                                <Typography className={classes.tabhding}>{STEP2_DAYS}%APR</Typography>
                            </Tab>

                            <Tab sx={{ marginRight: '1rem',backgroundColor: 'bg.default', }}>
                                <Typography fontWeight={700} variant='h6' color={'text.default'}>140 days</Typography>
                                <Typography className={classes.tabhding}>{STEP3_DAYS}%APR</Typography>
                            </Tab>

                            <Tab sx={{backgroundColor: 'bg.default',}}>
                                <Typography fontWeight={700} variant='h6' color={'text.default'}>360 days</Typography>
                                <Typography className={classes.tabhding}>{STEP4_DAYS}%APR</Typography>
                            </Tab>

                        </TabsList>
                        <TabPanel value={0}>
                            <LockupTabPanel />
                        </TabPanel>

                        <TabPanel value={1}>
                            <LockupBox />
                        </TabPanel>

                        <TabPanel value={2}>
                            <LockupBox />
                        </TabPanel>

                        <TabPanel value={3}>
                            <LockupBox />
                        </TabPanel>

                        <TabPanel value={4}>
                            <LockupBox />
                        </TabPanel>

                    </TabsUnstyled>
                </Box>
            </Grid>
        </Grid>
    );
}