import { Grid, } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Sidebar from "../../sidebar/Sidebar";
import { Box } from "@mui/system";
import OtcCMP from "./OtcCMP";
import CenterBar4 from "../../centerbar/CenterBar4";


const useStyles = makeStyles({
    main: {
        backgroundColor: '#000',

    }
})

const Otc = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.main}>
                <Grid container spacing={0}>
                    <Grid item lg={0.5} md={0.5} sm={12} xs={12}>
                        <Sidebar />
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <CenterBar4  />
                    </Grid>

                    <Grid item lg={8.5} md={8.5} sm={12} xs={12}>
                        <OtcCMP />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Otc;