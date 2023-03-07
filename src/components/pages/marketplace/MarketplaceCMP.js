import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, } from "react";
import { makeStyles } from "@mui/styles";
import Info from "../../info/Info";
import Header from "../../header/Header";
import gear from '../../assets/images/gear.svg'
import Collection from "./Collection";
import { ColorModeContext } from "../../../store/Index";

const useStyles = makeStyles({
    root: {
        overflowY: 'scroll',
        minHeight: '100vh',
        '@media(max-width  : 1200px)':{
            overflowY : 'inherit'
                    },
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
        paddingBottom: '1rem',
        height: '80vh',
        '@media(max-width : 1200px)': {
            height: 'auto'
        }
    },
    boxMain: {
        padding: '5rem 1.5rem 2rem 1.5rem',
        '@media(max-width : 1200px)': {
            padding: '2rem 1.5rem 2rem 1.5rem',
        }
    },

    statsBox: {
        
        padding: '1rem 1rem',
        borderRadius: '0.5rem',
        marginTop: '1rem'
    }

})


const statsBox = [
    {
        id: 1,
        Title: '1661',
        Para: 'Total NFTs',
    },
    {
        id: 1,
        Title: '887',
        Para: 'Owners',
    },
    {
        id: 1,
        Title: '$536,383',
        Para: 'Total Volume',
    },
    {
        id: 1,
        Title: '$26,819',
        Para: 'Platform Revenue',
    },
]


const MarketplaceCMP = () => {
    const classes = useStyles();
    const { mode, toggleMode } = useContext(ColorModeContext)

    return (
        <>
            <Box className={classes.root} sx={{"&::-webkit-scrollbar-track": {
            backgroundColor: 'Sliderroot.default',
        },}}>
                <Box className={classes.mainDiv} sx={{backgroundColor : 'bg.default'}}>
                    <Header HeaderTitle="NFT Marketplac" />
                    <Box className={classes.boxMain}>
                        <Info />


                        <Box mt={3}><Typography fontWeight={700} color={'text.default'}>Marketplace Stats</Typography></Box>
                        <Grid container spacing={2}>
                            {
                                statsBox.map((e, id) => {
                                    const { Title, Para } = e
                                    return (
                                        <Grid key={id} item lg={3} md={3} sm={6} xs={12}>
                                            <Box className={classes.statsBox} sx={{background: `${mode === 'dark' ? 'linear-gradient(290deg, #0f0f0f, #282828)' : 'linear-gradient(290deg, #edeaea, #d4d4d4)'}`,}}>
                                                <Typography variant="h5" fontWeight={700} color={'text.default'}>{Title}</Typography>
                                                <Box height={5} />
                                                <Typography color={'#999'} fontSize={'14px'}>{Para}</Typography>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                        <Collection />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default MarketplaceCMP;