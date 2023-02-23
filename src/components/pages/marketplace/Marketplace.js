import { Grid, } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Sidebar from "../../sidebar/Sidebar";
import { Box } from "@mui/system";
import MarketplaceCMP from "./MarketplaceCMP";
import CenterBar3 from "../../centerbar/CenterBar3";


const useStyles = makeStyles({
    main: {
        backgroundColor: '#000',

    }
})

const Marketplace = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.main}>
                <Grid container spacing={0}>
                    <Grid item lg={0.5} md={0.5} sm={12} xs={12}>
                        <Sidebar />
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <CenterBar3 />
                    </Grid>

                    <Grid item lg={8.5} md={8.5} sm={12} xs={12}>
                        <MarketplaceCMP />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Marketplace;