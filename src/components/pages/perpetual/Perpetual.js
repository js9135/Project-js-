import { Grid, } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Sidebar from "../../sidebar/Sidebar";
import { Box } from "@mui/system";
import PerpetualCMP from "./PerpetualCMP";
import CenterBar2 from "../../centerbar/CenterBar2";


const useStyles = makeStyles({
    mobGrid: {
        '@media(max-width : 900px)': {
            display: 'none'
        }
    }
})

const Perpetual = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{backgroundColor : 'bg.default'}}>
                <Grid container spacing={0}>
                    <Grid item lg={0.5} md={1} sm={1} xs={12} className={classes.mobGrid}>
                        <Sidebar />
                    </Grid>

                    <Grid item lg={3} md={11} sm={12} xs={12}>
                        <CenterBar2 />
                    </Grid>

                    <Grid item lg={8.5} md={12} sm={12} xs={12}>
                        <PerpetualCMP />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Perpetual;