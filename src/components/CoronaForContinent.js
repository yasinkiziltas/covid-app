import React, { useEffect, useState } from 'react'
import { API_URL, API_TOKEN } from '../constant'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CoronaForContinent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(`${API_URL}continentData`, {
      headers: {
        authorization: API_TOKEN
      }
    });
    setData(response.data.result);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='flex justify-center'>
      {loading ? <div className='text-xl font-bold'>Yükleniyor...</div> :

        <TableContainer component={Paper}>
          <p className='mb-4 font-black dark:text-white justify-center flex'>Corona Table</p>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Continent</TableCell>
                <TableCell align="right">ACTIVE CASES</TableCell>
                <TableCell align="right">NEW CASES</TableCell>
                <TableCell align="right">TOTAL CASES</TableCell>
                <TableCell align="right">TOTAL DEATHS</TableCell>
                <TableCell align="right">NEW DEATHS</TableCell>
                <TableCell align="right">TOTAL RECOVERED</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.continent}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.continent}
                  </TableCell>
                  <TableCell align="right">{item.activeCases}</TableCell>
                  <TableCell align="right">{item.newCases}</TableCell>
                  <TableCell align="right">{item.totalCases}</TableCell>
                  <TableCell align="right">{item.totalDeaths}</TableCell>
                  <TableCell align="right">{item.newDeaths}</TableCell>
                  <TableCell align="right">{item.totalRecovered}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }


    </div>
  )
}
