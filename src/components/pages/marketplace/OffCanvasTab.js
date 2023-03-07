import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    mainBox: {
        borderRadius: '0.6rem',
         
    },
    
    
})



const Tab = styled(TabUnstyled)`
  font-family: poppins;
  color: #fff;
  cursor: pointer;
  width : 100%;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  margin: 6px 6px;
  border: none;
  border-radius: 3rem;

  &:hover {
    background-color: bg.default;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #ffa500 ;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: bg.default;
    outline: 3px solid #ffa500 ;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
 
  `,
);

const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: left;
  align-content: space-between;
  `,
);

export default function OffCanvasTab({OffCanvas1, OffCanvas2, }) {
    const classes = useStyles();
    return (

        <Box className={classes.mainBox} sx={{backgroundColor: 'bg.default',}}>
            <TabsUnstyled defaultValue={0}>

                <TabsList>
                    <Tab sx={{ backgroundColor : 'bg.default' }}>
                        <Typography fontWeight={700} color={'text.default'}>{OffCanvas1}</Typography>
                    </Tab>

                    <Tab sx={{ backgroundColor : 'bg.default' }}>
                        <Typography fontWeight={700} color={'text.default'}>{OffCanvas2}</Typography>
                    </Tab>
                    
                </TabsList>
            </TabsUnstyled>
        </Box>
    );
}