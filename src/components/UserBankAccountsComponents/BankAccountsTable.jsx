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
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

// ******* This component is designed to display a list of bank accounts in a table format, with the ability to filter bank accounts by a search query and paginate through the bank accounts. The TablePagination component provides controls for changing the number of bank accounts displayed per page and navigating between pages. ********//

const BankAccountsTable = ({ searchTerm, setSearchTerm }) => {
  const [bankAccounts, setBankAccounts] = useState([]);
  const [page, setPage] = useState(0); // Note: TablePagination uses 0-based indexing
  const [rowsPerPage, setRowsPerPage] = useState(10); // State to manage the number of bank accounts per page

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=200") // Fetch 200 random users
      .then((response) => {
        // Map the fetched users to a format suitable for the table
        const usersWithBankAccounts = response.data.results.map((user) => ({
          id: user.id.value,
          name: `${user.name.first} ${user.name.last}`,
          bankAccountNumber: `${user.id.value}`, // Simulate a bank account number
        }));
        setBankAccounts(usersWithBankAccounts);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Handler for changing the current page of bank accounts
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handler for changing the number of bank accounts per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when changing rows per page
  };

  // Filter bank accounts based on the search query
  const filteredAccounts = bankAccounts.filter(
    (account) =>
      (account.name &&
        account.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (account.bankAccountNumber &&
        account.bankAccountNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
  );

  // Determine which bank accounts to display based on pagination
  const paginatedAccounts = filteredAccounts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 5, p: 4, my: 4 }}>
      {/* Search field for filtering bank accounts */}
      <TextField
        label="Search User"
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
            borderRadius: 3,
            height: 40,
            width: 400,
          },
        }}
        sx={{ marginBottom: 2 }}
      />

      {/* Table to display bank accounts */}
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
          {/* Map over filtered and paginated bank accounts to display them in the table */}
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

      {/* Pagination controls for navigating through bank accounts */}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TablePagination
          component="div"
          count={filteredAccounts.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 25, 50, 100]}
          sx={{
            color: "warning.dark",
          }}
        />
      </Box>
    </TableContainer>
  );
};

export default BankAccountsTable;
