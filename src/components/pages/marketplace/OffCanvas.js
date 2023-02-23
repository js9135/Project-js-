import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import TuneIcon from '@mui/icons-material/Tune';
import { makeStyles } from '@mui/styles';
import RefreshIcon from '@mui/icons-material/Refresh';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, TextField } from '@mui/material';
import OffCanvasTab from './OffCanvasTab';
import { Link } from 'react-router-dom';
import collectionsydf from '../../assets/images/collection-sydf.png'
import collectionsBg1 from '../../assets/images/collectionsBg1.png'
import collectionsBg2 from '../../assets/images/collectionsBg2.png'
import collectionslydf from '../../assets/images/collection-slydf.png'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles({
    filterBtn: {
        border: '1px solid #fff !important',
        color: '#fff !important'
    },
    searchWrap: {
        display: 'flex',
        alignItems: 'center'
    },
    searchBar: {
        display: 'flex',
        border: '1px solid #ffffff3b',
        alignItems: 'center',
        borderRadius: '2rem'
    },
    collectionsYDF: {
        display: 'flex',
        backgroundImage: `url(${collectionsBg1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        padding: '0.5rem 1rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ffa5008a',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        opacity: '50%',
        '&:focus': {
            opacity: '100%'
        }
    },
    collectionslYDF: {
        display: 'flex',
        backgroundImage: `url(${collectionsBg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        padding: '0.5rem 1rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ffa5008a',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        opacity: '50%',
        '&:focus': {
            opacity: '100%'
        }
    },
    sliderRange: {
        marginTop: '2rem',
        marginBottom: '0px !important',
        '& .MuiSlider-track': {
            color: '#ffa500',
        },

        '& .MuiSlider-rail': {
            color: '#ffa500',
        },

        '& .MuiSlider-thumb': {
            color: '#fffd02',
        },
        '& .MuiSlider-markLabel': {
            color: '#fff',
            marginTop: '-3rem',
            transform: 'translateX(-125%)',
            marginLeft: '6px'
        },
    },
    valueTExt: {
        border: '1px solid #ffffff42',
        padding: '0.5rem 2.5rem'
    }
})



function valuetext(value) {
    return `${value}°C`;
}

export default function OffCanvas() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [value, setValue] = React.useState([0, 100]);

    const handleChange2 = (e) => {
        setValue(e.target.value);
    };
    const classes = useStyles();
    return (
        <div>
            <Button onClick={handleClickOpen} className={classes.filterBtn} variant="outlined" startIcon={<TuneIcon />}>
                Filter
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                // TransitionComponent={Transition}
                sx={{
                    backgroundColor: '#0000003b',
                    transition: '0.5s',
                    width: '400px',
                    position: 'absolute',
                    left: '71rem !important',

                    '& .MuiPaper-root': {
                        backgroundColor: '#161616',
                        // border: '1px solid #ffa500',
                        color: '#fff'
                    },

                }}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ flex: 1 }} variant="h6" component="div">
                            Filters
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="close"
                        >
                            <RefreshIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>


                <List sx={{ m: '1.5rem' }}>
                    <Accordion sx={{ border: '1px solid #ffa500', borderRadius: '0.5rem !important' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{ minHeight: '40px !important', '& .MuiSvgIcon-root': { color: '#fff' } }}
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 700 }}>
                                Search
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.searchWrap}>
                                <Box className={classes.searchBar}>
                                    <Typography sx={{ cursor: 'context-menu', paddingLeft: '1rem' }} color={'#979494'}>Search ID # </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        variant="standard"
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                color: '#fff',
                                            }
                                        }}
                                    />

                                </Box>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Box height={15} />

                    <Accordion sx={{ border: '1px solid #ffa500', borderRadius: '0.5rem !important' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{ minHeight: '40px !important', '& .MuiSvgIcon-root': { color: '#fff' } }}
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 700 }}>
                                My NFTs
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <OffCanvasTab OffCanvas1="ALL" OffCanvas2="MINE" />
                        </AccordionDetails>
                    </Accordion>

                    <Box height={15} />

                    <Accordion sx={{ border: '1px solid #ffa500', borderRadius: '0.5rem !important' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{ minHeight: '40px !important', '& .MuiSvgIcon-root': { color: '#fff' } }}
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 700 }}>
                                Collections
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                <Link className={classes.collectionsYDF}>
                                    <Typography component={'img'} src={collectionsydf} width={50} />
                                    <Typography color={'#fff'}>sYDF Collection</Typography>
                                </Link>
                                <Box height={15} />
                                <Link className={classes.collectionslYDF}>
                                    <Typography component={'img'} src={collectionslydf} width={50} />
                                    <Typography color={'#fff'}>slYDF Collection</Typography>
                                </Link>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Box height={15} />

                    <Accordion sx={{ border: '1px solid #ffa500', borderRadius: '0.5rem !important' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{ minHeight: '40px !important', '& .MuiSvgIcon-root': { color: '#fff' } }}
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 700 }}>
                                Listed & Offers
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <OffCanvasTab OffCanvas1="ALL" OffCanvas2="LISTED" />

                        </AccordionDetails>
                    </Accordion>

                    <Box height={15} />

                    <Accordion sx={{ border: '1px solid #ffa500', borderRadius: '0.5rem !important' }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{ minHeight: '40px !important', '& .MuiSvgIcon-root': { color: '#fff' } }}
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 700 }}>
                                APRs
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="4" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="4" />

                                    <FormControlLabel value="8" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="8" />

                                    <FormControlLabel value="12.5" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="12.5" />

                                    <FormControlLabel value="15" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="15" />

                                    <FormControlLabel value="20" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="20" />


                                    <FormControlLabel value="25" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="25" />

                                    <FormControlLabel value="30" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="30" />

                                    <FormControlLabel value="35" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="35" />

                                    <FormControlLabel value="37.5" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="37.5" />

                                    <FormControlLabel value="50" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="50" />
                                    <FormControlLabel value="75" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="75" />
                                    <FormControlLabel value="100" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="100" />
                                    <FormControlLabel value="112.5" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="112.5" />
                                    <FormControlLabel value="150" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="150" />
                                    <FormControlLabel value="200" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="200" />
                                    <FormControlLabel value="225" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="225" />
                                    <FormControlLabel value="300" control={<Radio sx={{
                                        color: '#ffa500',
                                        '&.Mui-checked': {
                                            color: '#ffa500',
                                        },
                                    }} />} label="300" />

                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>

                    <Box height={15} />

                    <Accordion sx={{ border: '1px solid #ffa500', borderRadius: '0.5rem !important' }} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{ minHeight: '40px !important', '& .MuiSvgIcon-root': { color: '#fff' } }}
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 700 }}>
                                List Price (USD)
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography className={classes.valueTExt}>{value}</Typography>
                                <Typography>to</Typography>
                                <Typography className={classes.valueTExt}>{value}</Typography>
                            </Box>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange2}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                className={classes.sliderRange}
                            />
                        </AccordionDetails>
                    </Accordion>

                </List>
            </Dialog>

        </div>
    );
}
