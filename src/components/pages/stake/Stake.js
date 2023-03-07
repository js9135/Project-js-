import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Sidebar from "../../sidebar/Sidebar";
import CenterBar from "../../centerbar/CenterBar";
import StakeCMP from "./StakeCMP";
import { Box } from "@mui/system";


const useStyles = makeStyles({
    
    mobGrid: {
        '@media(max-width : 900px)': {
            display: 'none'
        }
    }
})

const Bridge = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{backgroundColor : 'bg.default'}}>
                <Grid container spacing={0}>
                    <Grid item lg={0.5} md={1} sm={1} xs={12} className={classes.mobGrid}>
                        <Sidebar />
                    </Grid>

                    <Grid item lg={3} md={11} sm={12} xs={12}>
                        <CenterBar />
                    </Grid>

                    <Grid item lg={8.5} md={12} sm={12} xs={12}>
                        <StakeCMP />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Bridge;