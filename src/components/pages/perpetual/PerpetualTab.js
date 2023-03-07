import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ethIcon from '../../assets/images/ethIcon.svg'
import btcicon from '../../assets/images/btcicon.svg'
import cakeIcon from '../../assets/images/cakeIcon.svg'
import sushiIcon from '../../assets/images/sushiIcon.svg'
import uniswapIcon from '../../assets/images/uniswapIcon.svg'
import solIcon from '../../assets/images/solIcon.svg'
import bnbIcon from '../../assets/images/bnbIcon.svg'
import ChartP from './ChartP';


const useStyles = makeStyles({
    mainBox: {
        backgroundColor: '#151515',
        padding: '1rem',
        borderRadius: '0.6rem',
        marginTop: '2rem'
    },
    mainBox2: {
        backgroundColor: '#151515',
        padding: '0.5rem',
        borderRadius: '0.6rem',
        marginTop: '2rem'
    },
    tabhding: {
        background: '-webkit-linear-gradient(45deg, #ffa500 10%, #ff8e53 90%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: '700 !important'
    },
    revenueBox: {
        backgroundColor: '#fcd3492e',
        borderRadius: '0.5rem',
        padding: '1rem',
        marginTop: '1rem'
    },
    listitem: {
        display: 'inherit !important',
        padding: '0.8rem 0.5rem !important'
    },
    freenft: {
        filter: 'invert(1)'
    },
    coinBtn: {
         
        borderRadius: '2rem !important',
        border: '1px solid #ffa500 !important',
        padding: '0.4rem 0.7rem !important',
        marginLeft: '1rem !important'
    },
    coinBtn2: {
        
        borderRadius: '2rem !important',
        padding: '0.4rem 0.7rem !important',
        marginLeft: '1rem !important',
        border: '1px solid #ffa500 !important',
        '&:hover': {
            border: '1px solid #ffa500 !important',
        },
        '&:focus': {
            border: '1px solid #ffa500 !important',
        }
    },
    coinBtn3: {
       
        borderRadius: '2rem !important',
        padding: '0.4rem 0.6rem !important',
        marginLeft: '0.2rem !important',
        border: '1px solid #ffa500 !important',
        '&:hover': {
            border: '1px solid #ffa500 !important',
        },
        '&:focus': {
            border: '1px solid #ffa500 !important',
        }
    },
    coinBtnWrap: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ffa50080',
        padding: '1.5rem 0rem',
        '@media(max-width : 1200px)': {
            flexWrap: 'wrap',
            gap : '10px'
        }
    },
    tabBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #ffa500',
         '@media(max-width : 600px)':{
            flexDirection : 'column-reverse'
         }
    }
})



const Tab = styled(TabUnstyled)`
  font-family: poppins;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  margin: 6px 0px;
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
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: left;
  align-content: space-between;
  `,
);

export default function PerpetualTab() {
    const classes = useStyles();
    return (

        <Box className={classes.mainBox} sx={{backgroundColor : 'disBtn.default'}}>
            <TabsUnstyled defaultValue={0}>
                <Box className={classes.tabBox}>
                    <TabsList sx={{
                        '@media(max-width : 900px)': {
                            flexWrap: 'wrap',
                        }
                    }}>
                        <Tab sx={{ marginRight: '1rem', backgroundColor : 'bg.default' }}>
                            <Typography fontWeight={700} color={'text.default'}>BTC</Typography>
                        </Tab>

                        <Tab sx={{ marginRight: '1rem',backgroundColor : 'bg.default' }}>
                            <Typography fontWeight={700} color={'text.default'}>ETH</Typography>
                        </Tab>

                        <Tab sx={{ marginRight: '1rem',backgroundColor : 'bg.default' }}>
                            <Typography fontWeight={700} color={'text.default'}>Swap Index</Typography>
                        </Tab>

                        <Tab sx={{ marginRight: '1rem',backgroundColor : 'bg.default' }}>
                            <Typography fontWeight={700} color="text.default">L1 Index</Typography>
                        </Tab>

                        <Tab sx={{ marginRight: '1rem',backgroundColor : 'bg.default' }}>
                            <Typography fontWeight={700} color={'text.default'}>Growth Tech Equities Index</Typography>
                        </Tab>

                    </TabsList>

                    <Typography sx={{'@media(max-width : 600px)':{marginBottom : '1rem'}}} color={'text.default'}>$22,152.31</Typography>
                </Box>
                <TabPanel value={0}>
                    <Box className={classes.coinBtnWrap}>
                        <Typography color={'text.default'}>Assets:</Typography>
                        <Button className={classes.coinBtn} sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={btcicon} />}>
                            BTC / USD - $22,152.31
                        </Button>
                    </Box>
                    <Box height={20} />
                    <ChartP />
                </TabPanel>

                <TabPanel value={1}>
                    <Box className={classes.coinBtnWrap}>
                        <Typography color={'text.default'}>Assets:</Typography>
                        <Button className={classes.coinBtn} sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={ethIcon} />}>
                            ETH / USD - $1,692.03
                        </Button>
                    </Box>
                    <Box height={20} />
                    <ChartP />
                </TabPanel>

                <TabPanel value={2}>
                    <Box className={classes.coinBtnWrap}>
                        <Typography color={'text.default'}>Assets:</Typography>
                        <Button className={classes.coinBtn2}sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={cakeIcon} />}>
                            CAKE / USD - $4.29 - 20%
                        </Button>
                        <Button className={classes.coinBtn2}sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={sushiIcon} />}>
                            SUSHI / USD - $1.42 - 40%
                        </Button>
                        <Button className={classes.coinBtn2} sx={{backgroundColor : 'bg.default', color : 'text.default'}}variant="outlined" startIcon={<Typography component={'img'} src={uniswapIcon} />}>
                            UNI / USD - $6.94 - 40%
                        </Button>
                    </Box>
                    <Box height={20} />
                    <ChartP />

                </TabPanel>

                <TabPanel value={3}>
                    <Box className={classes.coinBtnWrap}>
                        <Typography color={'text.default'}>Assets:</Typography>
                        <Button className={classes.coinBtn2}sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={btcicon} />}>
                            BTC / USD - $22,152.31
                        </Button>
                        <Button className={classes.coinBtn2}sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={ethIcon} />}>
                            ETH / USD - $1,692.03
                        </Button>
                        <Button className={classes.coinBtn2}sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={solIcon} />}>
                            SOL / USD - $23.70 - 13%
                        </Button>
                        <Button className={classes.coinBtn2}sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={bnbIcon} />}>
                            BNB / USD - $322.72 - 13%
                        </Button>
                    </Box>
                    <Box height={20} />
                    <ChartP />
                </TabPanel>

                <TabPanel value={4}>
                    <Box className={classes.coinBtnWrap}>
                        <Typography color={'text.default'}>Assets:</Typography>
                        <Button className={classes.coinBtn3} sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={btcicon} />}>
                            AAPL / USD - $154.73 - 25%
                        </Button>
                        <Button className={classes.coinBtn3} sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={ethIcon} />}>
                            AMZN / USD - $100.68 - 25%
                        </Button>
                        <Button className={classes.coinBtn3} sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={solIcon} />}>
                            MSFT / USD - $268.69 - 25%
                        </Button>
                        <Button className={classes.coinBtn3} sx={{backgroundColor : 'bg.default', color : 'text.default'}} variant="outlined" startIcon={<Typography component={'img'} src={bnbIcon} />}>
                            NFLX / USD - $361.09 - 25%
                        </Button>
                    </Box>
                    <Box height={20} />
                    <ChartP />
                </TabPanel>

            </TabsUnstyled>
        </Box>
    );
}