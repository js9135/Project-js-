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
import logo from '../assets/images/logo.png'
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from "../../store/Index";

const useStyles = makeStyles({
    root: {
        overflowY: 'scroll',
        minHeight: '100vh',
        "&::-webkit-scrollbar": {
            width: '4px',
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: '#250C05',
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: '10px',
            background: '-webkit-linear-gradient(45deg, #f97d25, #f9e025 80%)',
        },
    },


    mainDiv: {
        backgroundColor: '#000',
        height: '80vh'

    },
    listitem: {
        justifyContent: 'center !important',
        padding: '1.2rem 0rem !important',
        cursor: 'pointer',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#181818'
        }
    },
    iconWidth: {
        width: '2rem !important',
        height: '2rem !important'
    },
    lightMode: {
        color: '#ffa500'
    },
    logoBox: {
        width: '36px',
        display: 'inline-block',
        padding: '1rem 0.7rem',
        marginBottom: '1.5rem'
    }
})

const Sidebar = () => {

    const { mode, toggleMode } = useContext(ColorModeContext)



    const classes = useStyles();
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#ffa500' : '#fff',
            transition: '0.5s',
            fontSize: '30px'
        }
    }
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.mainDiv} sx={{backgroundColor : 'background.default'}}>
                    <List>

                        <Link className={classes.logoBox} to="/">
                            <Typography component={'img'} src={logo} width='100%' />
                        </Link>


                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/">
                                <DashboardIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/bridge">
                                <SwapHorizontalCircleIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/stake">
                                <LayersIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/nft">
                                <PhotoLibraryIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/vesting">
                                <AgricultureIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/perpetual">
                                <StreamIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/leadboard">
                                <LeaderboardIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/marketplace">
                                <StoreIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <NavLink style={navLinkStyles} to="/otc/eth">
                                <SummarizeIcon className={classes.iconWidth} />
                            </NavLink>
                        </ListItem>



                        <Box sx={{padding : '0.6rem'}}>
                            <IconButton sx={{ alignSelf: 'center' }} onClick={toggleMode} color="inherit">
                                {mode === 'dark' ? <Brightness7Icon sx={{ color: 'yellow' }} /> : <Brightness4Icon sx={{ color: 'yellow' }} />}
                            </IconButton>
                        </Box>

                    </List>
                </Box>
            </Box>
        </>
    )
}

export default Sidebar;