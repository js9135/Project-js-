import { Grid, } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Sidebar from "../../sidebar/Sidebar";
import CenterBar from "../../centerbar/CenterBar";
import { Box } from "@mui/system";
import NftCMP from "./VestingCMP";


const useStyles = makeStyles({
    main: {
        backgroundColor: '#000',

    }
})

const Vesting = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.main}>
                <Grid container spacing={0}>
                    <Grid item lg={0.5} md={0.5} sm={12} xs={12}>
                        <Sidebar />
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <CenterBar />
                    </Grid>

                    <Grid item lg={8.5} md={8.5} sm={12} xs={12}>
                        <NftCMP />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Vesting;