import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Button, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import WindowIcon from '@mui/icons-material/Window';
import { Link } from 'react-router-dom';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';


const useStyles = makeStyles({
    mainBox: {

        marginTop: '2rem'
    },


    tabBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchWrap: {
        display: 'flex',
        alignItems: 'center'
    },
    searchBar: {
        display: 'flex',
        border: '1px solid #ffffff3b',
        alignItems: 'center',
        borderRadius: '2rem'
    },
    gridBtn: {
        borderRadius: '0.5rem',
        backgroundColor: '#080808',
        padding: '0.3rem 0.5rem',
        textTransform: 'none',
        marginLeft: '1rem',
        color: '#fff',
        display: 'inline-flex',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#ffa500',
            color: '#000'
        },
        '&:focus': {
            backgroundColor: '#ffa500',
            color: '#000'
        },
    }

})



const Tab = styled(TabUnstyled)`
  font-family: poppins;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: #080808;
  padding: 0.4rem 1.5rem;
  margin: 6px 0px;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    background-color: #080808;
  }

  &:focus {
    color: #000;
    
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #ffa500;
    color: #000;
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
  justify-content: left;
  align-content: space-between;
  `,
);

export default function PositionTab() {
    const classes = useStyles();
    return (

        <Box className={classes.mainBox}>
            <TabsUnstyled defaultValue={0}>
                <Box className={classes.tabBox}>
                    <TabsList>
                        <Tab sx={{ marginRight: '1rem' }}>
                            <Typography fontWeight={700}>My Open <br />Positions</Typography>
                        </Tab>

                        <Tab sx={{ marginRight: '1rem' }}>
                            <Typography fontWeight={700}>My Closed <br />Positions</Typography>
                        </Tab>

                        <Tab sx={{ marginRight: '1rem' }}>
                            <Typography fontWeight={700}>All Closed <br />Positions</Typography>
                        </Tab>

                    </TabsList>

                    <TabPanel value={0}>
                        <Box className={classes.searchWrap}>
                            <Box className={classes.searchBar}>
                                <Typography sx={{ cursor: 'context-menu', paddingLeft: '1rem' }} color={'#979494'}>Search Open Position ID #</Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            color: '#fff',
                                        }
                                    }}
                                />
                                <Button
                                    sx={{
                                        borderRadius: '0rem',
                                        backgroundColor: 'transparent',
                                        textTransform: 'none',
                                        borderLeft: '1px solid #ffffff3b',
                                        color: '#717171',
                                        '&:hover': {
                                            backgroundColor: '#ffa500',
                                            color: '#000'
                                        }
                                    }}
                                    variant="contained"
                                >Search
                                </Button>

                                <Button
                                    sx={{
                                        borderRadius: '0rem 2rem 02rem 0rem',
                                        backgroundColor: 'transparent',
                                        textTransform: 'none',
                                        color: '#717171',
                                        borderLeft: '1px solid #ffffff3b',
                                        '&:hover': {
                                            backgroundColor: '#ffa500',
                                            color: '#000'
                                        }
                                    }}
                                    variant="contained">
                                    Clear
                                </Button>
                            </Box>
                        </Box>
                    </TabPanel>

                    <TabPanel value={1}>
                        <Box className={classes.searchWrap}>
                            <Box className={classes.searchBar}>
                                <Typography sx={{ cursor: 'context-menu', paddingLeft: '1rem' }} color={'#979494'}>Search Open Position ID #</Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            color: '#fff',
                                        }
                                    }}
                                />
                            </Box>
                            <Link className={classes.gridBtn}>
                                <WindowIcon />
                            </Link>
                            <Link className={classes.gridBtn}>
                                <FormatListBulletedOutlinedIcon />
                            </Link>
                        </Box>
                    </TabPanel>

                    <TabPanel value={2}>
                        <Box className={classes.searchWrap}>
                            <Box className={classes.searchBar}>
                                <Typography sx={{ cursor: 'context-menu', paddingLeft: '1rem' }} color={'#979494'}>Search Open Position ID #</Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            color: '#fff',
                                        }
                                    }}
                                />
                            </Box>
                            <Link className={classes.gridBtn}>
                                <WindowIcon />
                            </Link>
                            <Link className={classes.gridBtn}>
                                <FormatListBulletedOutlinedIcon />
                            </Link>
                        </Box>
                    </TabPanel>
                </Box>



            </TabsUnstyled>
        </Box>
    );
}