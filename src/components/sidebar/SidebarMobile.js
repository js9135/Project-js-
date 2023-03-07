import React, { useContext, } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import LayersIcon from '@mui/icons-material/Layers';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import StreamIcon from '@mui/icons-material/Stream';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import StoreIcon from '@mui/icons-material/Store';
import SummarizeIcon from '@mui/icons-material/Summarize';

import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from "../../store/Index";

const useStyles = makeStyles({



    mainDiv: {
        backgroundColor: '#000',
        height: 'auto',
        '@media(max-width : 900px)': {
            marginTop: '0rem'
        }

    },
    listitem: {
        display: 'inherit !important',
        padding: '1rem 0rem 1rem 1rem !important',
        cursor: 'pointer',
        transition: '0.5s',
    },
    iconWidth: {
        width: '2rem !important',
        height: '2rem !important'
    },
    lightMode: {
        color: '#ffa500'
    },

    iconText: {
        display: 'flex',
        alignItems: 'center'
    }
})

const SidebarMobile = () => {

    const { mode, toggleMode } = useContext(ColorModeContext)



    const classes = useStyles();
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#ffa500' : `${mode === 'dark' ? '#fff' : '#000'}`,
            transition: '0.5s',
            fontSize: '30px',
            textDecoration: 'none'
        }
    }
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.mainDiv} sx={{ backgroundColor: 'bg.default' }}>
                    <List>




                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/">
                                <Box className={classes.iconText}>
                                    <DashboardIcon className={classes.iconWidth} />
                                    <Typography ml={1}>Dashboard</Typography>
                                </Box>
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/bridge">
                                <Box className={classes.iconText}>
                                    <SwapHorizontalCircleIcon className={classes.iconWidth} />
                                    <Typography ml={1}>Bridge</Typography>
                                </Box>

                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/stake">

                                <Box className={classes.iconText}>
                                    <LayersIcon className={classes.iconWidth} />
                                    <Typography ml={1}>Stake!</Typography>
                                </Box>
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/nft">

                                <Box className={classes.iconText}>
                                    <PhotoLibraryIcon className={classes.iconWidth} />
                                    <Typography ml={1}>NFT</Typography>
                                </Box>
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/vesting">

                                <Box className={classes.iconText}>
                                    <AgricultureIcon className={classes.iconWidth} />
                                    <Typography ml={1}>Vesting</Typography>
                                </Box>
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/perpetual">

                                <Box className={classes.iconText}>
                                    <StreamIcon className={classes.iconWidth} />
                                    <Typography ml={1}>Perpetual</Typography>
                                </Box>
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/leadboard">

                                <Box className={classes.iconText}>
                                    <LeaderboardIcon className={classes.iconWidth} />
                                    <Typography ml={1}>Leadboard</Typography>
                                </Box>
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/marketplace">

                                <Box className={classes.iconText}>
                                    <StoreIcon className={classes.iconWidth} />
                                    <Typography ml={1}>Marketplace</Typography>
                                </Box>
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem} sx={{ '&:hover': { backgroundColor: 'hbg.default' } }}>
                            <NavLink style={navLinkStyles} to="/otc/eth">

                                <Box className={classes.iconText}>
                                    <SummarizeIcon className={classes.iconWidth} />
                                    <Typography ml={1}>OTC</Typography>
                                </Box>
                            </NavLink>
                        </ListItem>



                        <Box sx={{


                            padding: '0.5rem 0.6rem',

                        }}>
                            <IconButton sx={{ alignSelf: 'center' }} onClick={toggleMode} color="inherit">
                                {mode === 'dark' ? <Brightness7Icon sx={{ color: 'yellow' }} /> : <Brightness4Icon sx={{ color: '#ffa500' }} />}
                            </IconButton>
                        </Box>

                    </List>
                </Box>
            </Box>
        </>
    )
}

export default SidebarMobile;