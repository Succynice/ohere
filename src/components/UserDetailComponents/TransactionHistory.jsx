import React, { useState } from "react";
import {
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Paper,
 Box,
 TablePagination,
 TextField,
 InputAdornment,
 Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TransactionHistory = ({ transactions }) => {
 const [page, setPage] = useState(0);
 const [rowsPerPage, setRowsPerPage] = useState(5);
 const [searchQuery, setSearchQuery] = useState("");

 const handleChangePage = (event, newPage) => {
    setPage(newPage);
 };

 const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
 };

 const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.id.toString().includes(searchQuery) ||
      transaction.date.includes(searchQuery) ||
      transaction.amount.toString().includes(searchQuery) ||
      transaction.type.includes(searchQuery)
 );

 return (
    <Box sx={{ width: "95%", overflowX: "auto", margin: "auto" }}>
      <TableContainer component={Paper} sx={{ boxShadow: 5, p: 4, my: 4 }}>
        <TextField
          sx={{ marginBottom: 2 }}
          label="Search transactions"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: 5,
              height: 40,
            },
          }}
        />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                 Transaction ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                 Date
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                 Amount
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                 Type
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? filteredTransactions.slice(
                 page * rowsPerPage,
                 page * rowsPerPage + rowsPerPage
                )
              : filteredTransactions
            ).map((transaction) => (
              <TableRow
                key={transaction.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
                <TableCell align="right">{transaction.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredTransactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            '& .MuiTablePagination-select, & .MuiTablePagination-input': {
              color: 'secondary.main',
            },
          }}
        />
      </TableContainer>
    </Box>
 );
};

export default TransactionHistory;
