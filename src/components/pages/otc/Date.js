import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Box, Typography } from '@mui/material';


export default function Date() {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3} mt={1}>
                <Box sx={{display : 'flex','@media(max-width : 600px)':{display : 'inherit'}}}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography mr={2}>Start:</Typography>
                    <MobileDatePicker
                      
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>

                <Box width={50} sx={{ '@media(max-width : 600px)':{height:'15px'}}}/>

                <Box style={{ display: 'flex', alignItems: 'center', }}>
                    <Typography mr={2}>End:</Typography>
                    <MobileDatePicker
                     
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                </Box>

            </Stack>
        </LocalizationProvider>
    );
}