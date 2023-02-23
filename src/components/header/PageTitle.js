import { Box, Typography } from "@mui/material";
import React from "react";

const PageHeading = [
    {
        id: 1,
        title: 'Dashboard'
    },
    {
        id: 2,
        title: 'Bridge'
    },
    {
        id: 3,
        title: 'Stake'
    },
    {
        id: 4,
        title: 'nft'
    },
    {
        id: 5,
        title: 'Vesting'
    },
    {
        id: 6,
        title: 'Perpetual Futures Trading'
    },
    {
        id: 7,
        title: 'Perps Stats'
    },
    {
        id: 8,
        title: 'NFT Marketplace'
    },
    {
        id: 9,
        title: 'OTC'
    },

]


const PageTitle = ({ HeaderTitle }) => {
    return (
        <>
            <Box >
                <Typography color={'#fff'} fontWeight={700}>{HeaderTitle}</Typography>
            </Box>
        </>
    )
}

export default PageTitle;