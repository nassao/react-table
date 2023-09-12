import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Titulo from './Titulo';

/**
 * Esta función se utiliza para......
 * @param {String} name
 * @param {integer} calories
 * @param {number} fat 
 * @param {integer} carbs 
 * @param {number} protein 
 * @returns {Postre}
 * @example
 * createNewDessert('Frozen yoghurt', 159, 6.0, 24, 4.0)
 */
function createNewDessert(name, calories, fat, carbs, protein) {
  const x = { name, calories, fat, carbs, protein };
  return x;
}

const dessertList = [
  createNewDessert('Chocolatina Hersheys', 180, 17.0, 40, 2.5),
  createNewDessert('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createNewDessert('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createNewDessert('Eclair', 262, 16.0, 24, 6.0),
  createNewDessert('Cupcake', 305, 3.7, 67, 4.3),
  createNewDessert('Gingerbread', 356, 16.0, 49, 3.9),
  createNewDessert('Torta', 200, 16.0, 49, 3.9),
  createNewDessert('Brazo de Reina', 400, 16.0, 49, 3.9),
  createNewDessert('Brownie', 123, 16.0, 49, 3.9),
  createNewDessert('Merengon', 400, 20.0, 100, 0.1),
  createNewDessert('Tiramisu', 518, 18.0, 50, 4.5),
  createNewDessert('Basbousa', 123, 16.0, 49, 3.9),
  createNewDessert('IslasFlotantes', 150, 15.0, 50, 3.9),
  createNewDessert('Manjar Blanco', 160, 16.0, 70, 5.6),
  createNewDessert('Cakepop', 10, 16.0, 10, 5.6),
  createNewDessert('Salami', 10, 16.0, 10, 5.6),
  createNewDessert('Arequipe', 120, 15.7, 23, 8.2),
];

export default function BasicTable() {
  return (
    <>
      <Titulo/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dessertList.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
