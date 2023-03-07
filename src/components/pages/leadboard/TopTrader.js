import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import rank1 from '../../assets/images/rank1.svg'
import hundred from '../../assets/images/hundred.png'
import etherscan from '../../assets/images/etherscan.svg'
import { Link } from 'react-router-dom';
import rank2 from '../../assets/images/rank2.svg'
import rank3 from '../../assets/images/rank3.svg'


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(
        <Box textAlign={'center'} display={'inline-block'}>
            <Typography component={'img'} src={rank1} />
            <Typography>Rank</Typography>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '0.8rem 1rem 0.5rem 1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '2rem' }}>
                <Box width={50}><Typography component={'img'} src={hundred} width={'100%'} /></Box>
                <Typography fontWeight={700} ml={2}>0x5986...674A</Typography>
            </Box>
            <Box>
                <Link to="https://etherscan.io/address/0x59869c3fA6CfCB305C8724c383874F14B0e1674A" target={'_blank'}><Typography component={'img'} src={etherscan} /></Link>
            </Box>
        </Box>,

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >Trades</Typography>
                <Typography fontWeight={700}>318</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >PNL</Typography>
                <Typography fontWeight={700}>$334,812.89</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >Volume</Typography>
                <Typography fontWeight={700}>$43,281,906.25</Typography>
            </Box>
        </Box>),
    createData(
        <Box textAlign={'center'} display={'inline-block'}>
            <Typography component={'img'} src={rank2} />
            <Typography >Rank</Typography>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '0.8rem 1rem 0.5rem 1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '2rem' }}>
                <Box width={50}><Typography component={'img'} src={hundred} width={'100%'} /></Box>
                <Typography fontWeight={700} ml={2}>0x5986...674A</Typography>
            </Box>
            <Box>
                <Link to="https://etherscan.io/address/0x59869c3fA6CfCB305C8724c383874F14B0e1674A" target={'_blank'}><Typography component={'img'} src={etherscan} /></Link>
            </Box>
        </Box>,

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >Trades</Typography>
                <Typography color={'text.default'} fontWeight={700}>318</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >PNL</Typography>
                <Typography fontWeight={700}>$334,812.89</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >Volume</Typography>
                <Typography fontWeight={700}>$43,281,906.25</Typography>
            </Box>
        </Box>),
    createData(
        <Box textAlign={'center'} display={'inline-block'}>
            <Typography component={'img'} src={rank3} />
            <Typography >Rank</Typography>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '0.8rem 1rem 0.5rem 1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '2rem' }}>
                <Box width={50}><Typography component={'img'} src={hundred} width={'100%'} /></Box>
                <Typography fontWeight={700} ml={2}>0x5986...674A</Typography>
            </Box>
            <Box>
                <Link to="https://etherscan.io/address/0x59869c3fA6CfCB305C8724c383874F14B0e1674A" target={'_blank'}><Typography component={'img'} src={etherscan} /></Link>
            </Box>
        </Box>,

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >Trades</Typography>
                <Typography fontWeight={700}>318</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >PNL</Typography>
                <Typography fontWeight={700}>$334,812.89</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >Volume</Typography>
                <Typography fontWeight={700}>$43,281,906.25</Typography>
            </Box>
        </Box>),
    createData(
        <Box textAlign={'center'}>
            <Typography variant="h5" fontWeight={700}>04</Typography>
            <Typography >Rank</Typography>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '0.8rem 1rem 0.5rem 1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '2rem' }}>
                <Box width={50}><Typography component={'img'} src={hundred} width={'100%'} /></Box>
                <Typography fontWeight={700} ml={2}>0x5986...674A</Typography>
            </Box>
            <Box>
                <Link to="https://etherscan.io/address/0x59869c3fA6CfCB305C8724c383874F14B0e1674A" target={'_blank'}><Typography component={'img'} src={etherscan} /></Link>
            </Box>
        </Box>,

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >Trades</Typography>
                <Typography fontWeight={700}>318</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >PNL</Typography>
                <Typography fontWeight={700}>$334,812.89</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >Volume</Typography>
                <Typography fontWeight={700}>$43,281,906.25</Typography>
            </Box>
        </Box>),
    createData(
        <Box textAlign={'center'}>
            <Typography  variant="h5" fontWeight={700}>05</Typography>
            <Typography >Rank</Typography>
        </Box>,



        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '0.8rem 1rem 0.5rem 1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '2rem' }}>
                <Box width={50}><Typography component={'img'} src={hundred} width={'100%'} /></Box>
                <Typography  fontWeight={700} ml={2}>0x5986...674A</Typography>
            </Box>
            <Box>
                <Link to="https://etherscan.io/address/0x59869c3fA6CfCB305C8724c383874F14B0e1674A" target={'_blank'}><Typography component={'img'} src={etherscan} /></Link>
            </Box>
        </Box>,

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >Trades</Typography>
                <Typography  fontWeight={700}>318</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography fontSize={'13px'} >PNL</Typography>
                <Typography  fontWeight={700}>$334,812.89</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >Volume</Typography>
                <Typography  fontWeight={700}>$43,281,906.25</Typography>
            </Box>
        </Box>),
    createData(
        <Box textAlign={'center'}>
            <Typography  variant="h5" fontWeight={700}>06</Typography>
            <Typography >Rank</Typography>
        </Box>,



        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '0.8rem 1rem 0.5rem 1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '2rem' }}>
                <Box width={50}><Typography component={'img'} src={hundred} width={'100%'} /></Box>
                <Typography  fontWeight={700} ml={2}>0x5986...674A</Typography>
            </Box>
            <Box>
                <Link to="https://etherscan.io/address/0x59869c3fA6CfCB305C8724c383874F14B0e1674A" target={'_blank'}><Typography component={'img'} src={etherscan} /></Link>
            </Box>
        </Box>,

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >Trades</Typography>
                <Typography  fontWeight={700}>318</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >PNL</Typography>
                <Typography  fontWeight={700}>$334,812.89</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >Volume</Typography>
                <Typography  fontWeight={700}>$43,281,906.25</Typography>
            </Box>
        </Box>),
    createData(
        <Box textAlign={'center'}>
            <Typography  variant="h5" fontWeight={700}>07</Typography>
            <Typography >Rank</Typography>
        </Box>,



        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '0.8rem 1rem 0.5rem 1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '2rem' }}>
                <Box width={50}><Typography component={'img'} src={hundred} width={'100%'} /></Box>
                <Typography  fontWeight={700} ml={2}>0x5986...674A</Typography>
            </Box>
            <Box>
                <Link to="https://etherscan.io/address/0x59869c3fA6CfCB305C8724c383874F14B0e1674A" target={'_blank'}><Typography component={'img'} src={etherscan} /></Link>
            </Box>
        </Box>,

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >Trades</Typography>
                <Typography  fontWeight={700}>318</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >PNL</Typography>
                <Typography  fontWeight={700}>$334,812.89</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >Volume</Typography>
                <Typography  fontWeight={700}>$43,281,906.25</Typography>
            </Box>
        </Box>),
    createData(
        <Box textAlign={'center'}>
            <Typography  variant="h5" fontWeight={700}>08</Typography>
            <Typography >Rank</Typography>
        </Box>,



        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '0.8rem 1rem 0.5rem 1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: '2rem' }}>
                <Box width={50}><Typography component={'img'} src={hundred} width={'100%'} /></Box>
                <Typography  fontWeight={700} ml={2}>0x5986...674A</Typography>
            </Box>
            <Box>
                <Link to="https://etherscan.io/address/0x59869c3fA6CfCB305C8724c383874F14B0e1674A" target={'_blank'}><Typography component={'img'} src={etherscan} /></Link>
            </Box>
        </Box>,

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >Trades</Typography>
                <Typography  fontWeight={700}>318</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >PNL</Typography>
                <Typography  fontWeight={700}>$334,812.89</Typography>
            </Box>
        </Box>,


        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'box2.default',
            padding: '1rem',
            borderRadius: '0.5rem'
        }}>
            <Box sx={{ alignItems: 'center', mr: '2rem' }}>
                <Typography  fontSize={'13px'} >Volume</Typography>
                <Typography  fontWeight={700}>$43,281,906.25</Typography>
            </Box>
        </Box>),

];

export default function TopTrader() {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: '1rem', backgroundColor: 'disBtn.default' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                {/* <TableHead sx={{ backgroundColor: '#151515', }}>
                    <TableRow>
                        <TableCell sx={{ color: '#fff', borderBottom: '1px solid rgb(224 218 224 / 55%)' }}>APR (%)</TableCell>
                        <TableCell sx={{ color: '#fff', borderBottom: '1px solid rgb(224 218 224 / 55%)' }} align="left"># Stakes</TableCell>
                        <TableCell sx={{ color: '#fff', borderBottom: '1px solid rgb(224 218 224 / 55%)' }} align="left">Avg YDF per stake/year</TableCell>
                        <TableCell sx={{ color: '#fff', borderBottom: '1px solid rgb(224 218 224 / 55%)' }} align="left">Avg USD per stake/year</TableCell>
                        <TableCell sx={{ color: '#fff', borderBottom: '1px solid rgb(224 218 224 / 55%)' }} align="left">Total USD per year</TableCell>
                    </TableRow>
                </TableHead> */}
                <TableBody >
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ color: 'text.default', borderBottom: 'none' }} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell sx={{ color: 'text.default', borderBottom: 'none' }} align="left">{row.calories}</TableCell>
                            <TableCell sx={{ color: 'text.default', borderBottom: 'none' }} align="left">{row.fat}</TableCell>
                            <TableCell sx={{ color: 'text.default', borderBottom: 'none' }} align="left">{row.carbs}</TableCell>
                            <TableCell sx={{ color: 'text.default', borderBottom: 'none' }} align="left">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}