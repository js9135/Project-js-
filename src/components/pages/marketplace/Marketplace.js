import { Grid, } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Sidebar from "../../sidebar/Sidebar";
import { Box } from "@mui/system";
import MarketplaceCMP from "./MarketplaceCMP";
import CenterBar3 from "../../centerbar/CenterBar3";


const useStyles = makeStyles({
    
    mobGrid: {
        '@media(max-width : 900px)': {
            display: 'none'
        }
    }
})

const Marketplace = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{backgroundColor : 'bg.default'}}>
                <Grid container spacing={0}>
                    <Grid item lg={0.5} md={1} sm={1} xs={12} className={classes.mobGrid}>
                        <Sidebar />
                    </Grid>

                    <Grid item lg={3} md={11} sm={12} xs={12}>
                        <CenterBar3 />
                    </Grid>

                    <Grid item lg={8.5} md={12} sm={12} xs={12}>
                        <MarketplaceCMP />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Marketplace;