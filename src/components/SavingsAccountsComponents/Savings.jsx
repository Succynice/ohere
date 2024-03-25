import React, { useState, useEffect } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TablePagination } from '@mui/material';
import { styled } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
 [`&.MuiTableCell-head`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
 },
}));

const Savings = () => {
 const [data, setData] = useState([]);
 const [page, setPage] = useState(0);
 const [rowsPerPage, setRowsPerPage] = useState(10);

 useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        // Transform the data to fit our needs
        const transformedData = json.map(item => ({
          user: `user${item.id}@example.com`, // Simulate user email
          // financialGoal: `Goal ${item.id}`, // Simulate financial goal
          goalTimeline: `${Math.floor(Math.random() * 5) + 1} years`, // Random timeline
          totalSavings: `${Math.floor(Math.random() * 10000)} USD`, // Random total savings
          availableBalance: `${Math.floor(Math.random() * 5000)} USD`, // Random available balance
          reward: `${Math.floor(Math.random() * 2000)} USD`, // Random reward
        }));
        setData(transformedData);
      })
      .catch(error => console.error('Error fetching data: ', error));
 }, []);

 const handleChangePage = (event, newPage) => {
    setPage(newPage);
 };

 const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
 };

 return (
    <Box sx={{ width: '100%' }}>
      <TableContainer component={Paper} sx={{ boxShadow: 5, p: 4, my: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell><Typography
                variant="h6"
                sx={{ color: "secondary.main" }}
              >
                User
              </Typography></StyledTableCell>
              {/* <StyledTableCell><Typography
                variant="h6"
                sx={{ color: "secondary.main" }}
              >
                Financial Goal
              </Typography></StyledTableCell> */}
              <StyledTableCell><Typography
                variant="h6"
                sx={{ color: "secondary.main" }}
              >
                Goal Timeline
              </Typography></StyledTableCell>
              <StyledTableCell><Typography
                variant="h6"
                sx={{ color: "secondary.main" }}
              >
                Total Savings
              </Typography></StyledTableCell>
              <StyledTableCell><Typography
                variant="h6"
                sx={{ color: "secondary.main" }}
              >
                Available Balance
              </Typography></StyledTableCell>
              <StyledTableCell><Typography
                variant="h6"
                sx={{ color: "secondary.main" }}
              >
                Reward
              </Typography></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.user}</TableCell>
                {/* <TableCell>{row.financialGoal}</TableCell> */}
                <TableCell>{row.goalTimeline}</TableCell>
                <TableCell>{row.totalSavings}</TableCell>
                <TableCell>{row.availableBalance}</TableCell>
                <TableCell>{row.reward}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            color: "warning.dark",
          }}
        />
      </TableContainer>
    </Box>
 );
};

export default Savings;
