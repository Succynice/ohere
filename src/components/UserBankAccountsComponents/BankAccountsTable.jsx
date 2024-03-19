import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const BankAccountsTable = ({ searchTerm, setSearchTerm }) => {
  const [bankAccounts, setBankAccounts] = useState([]);
  const [page, setPage] = useState(0); // Note: TablePagination uses 0-based indexing
  const [rowsPerPage, setRowsPerPage] = useState(20);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=200") // Fetch 2000 random users
      .then((response) => {
        const usersWithBankAccounts = response.data.results.map((user) => ({
          id: user.id.value,
          name: `${user.name.first} ${user.name.last}`,
          bankAccountNumber: `${user.id.value}`, // Simulate a bank account number
        }));
        setBankAccounts(usersWithBankAccounts);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when changing rows per page
  };

  const filteredAccounts = bankAccounts.filter(
    (account) =>
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.bankAccountNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedAccounts = filteredAccounts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 5, p: 4, my: 4 }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            borderRadius: 5,
            height: 40,
            width: 400,
          },
        }}
        sx={{ marginBottom: 2 }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "secondary.main" }}
              >
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "secondary.main" }}
              >
                Bank Account Number
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedAccounts.map((account) => (
            <TableRow key={account.id}>
              <TableCell>
                <Typography variant="body1">{account.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">
                  {account.bankAccountNumber}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="body2">
        <TablePagination
          component="div"
          count={filteredAccounts.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            color: "warning.dark",
          }}
        />
      </Typography>
    </TableContainer>
  );
};

export default BankAccountsTable;
