import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('300', '273', '375,858 YDF', '$9,126', '$830,432'),
    createData('225', '13', '189,595 YDF', '$4,629', '$26,745'),
    createData('200', '331', '271,984 YDF', '$6,647', '$1,100,008'),
    createData('150', '92', '1,144,888 YDF', '$27,967', '$1,715,293'),
    createData('112.5', '2', '18,788 YDF', '$459', '$816'),
    createData('300', '273', '375,858 YDF', '$9,126', '$830,432'),
    createData('225', '13', '189,595 YDF', '$4,629', '$26,745'),
    createData('200', '331', '271,984 YDF', '$6,647', '$1,100,008'),
    createData('150', '92', '1,144,888 YDF', '$27,967', '$1,715,293'),
    createData('112.5', '2', '18,788 YDF', '$459', '$816'),
    createData('300', '273', '375,858 YDF', '$9,126', '$830,432'),
    createData('225', '13', '189,595 YDF', '$4,629', '$26,745'),
    createData('200', '331', '271,984 YDF', '$6,647', '$1,100,008'),
    createData('150', '92', '1,144,888 YDF', '$27,967', '$1,715,293'),
    createData('112.5', '2', '18,788 YDF', '$459', '$816'),
];

export default function TableOne() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: '#151515', }}>
                    <TableRow>
                        <TableCell sx={{color : '#fff',borderBottom : '1px solid rgb(224 218 224 / 55%)'}}>APR (%)</TableCell>
                        <TableCell sx={{color : '#fff', borderBottom : '1px solid rgb(224 218 224 / 55%)'}} align="left"># Stakes</TableCell>
                        <TableCell sx={{color : '#fff', borderBottom : '1px solid rgb(224 218 224 / 55%)'}} align="left">Avg YDF per stake/year</TableCell>
                        <TableCell sx={{color : '#fff', borderBottom : '1px solid rgb(224 218 224 / 55%)'}} align="left">Avg USD per stake/year</TableCell>
                        <TableCell sx={{color : '#fff', borderBottom : '1px solid rgb(224 218 224 / 55%)'}} align="left">Total USD per year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{backgroundColor : '#080808'}}>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{color : '#fff', borderBottom : '1px solid rgb(224 218 224 / 15%)'}} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell sx={{color : '#fff',borderBottom : '1px solid rgb(224 218 224 / 15%)'}} align="left">{row.calories}</TableCell>
                            <TableCell sx={{color : '#fff', borderBottom : '1px solid rgb(224 218 224 / 15%)'}} align="left">{row.fat}</TableCell>
                            <TableCell sx={{color : '#fff', borderBottom : '1px solid rgb(224 218 224 / 15%)'}} align="left">{row.carbs}</TableCell>
                            <TableCell sx={{color : '#fff', borderBottom : '1px solid rgb(224 218 224 / 15%)'}} align="left">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}