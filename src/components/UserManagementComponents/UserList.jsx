import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  TablePagination,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const UserList = ({ users, onUserClick }) => {
  // **** State to manage the search term
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0); // State for current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // State for rows per page

  // ** Function to filter users based on the search term
  const filteredUsers = users.filter(
    (user) =>
      (user.name &&
        user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.email &&
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.country &&
        user.country.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.kycStatus &&
        user.kycStatus.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // ** Use useTheme to access the current theme
  const theme = useTheme();

  // ** Use useMediaQuery to determine if the screen size is small or medium
  const isSmallOrMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // ** Calculate the width based on the screen size
  const tableWidth = isSmallOrMediumScreen ? "95%" : "90%";

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      {/* Table Container */}
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: tableWidth,
          overflowX: "auto",
          margin: "auto",
          boxShadow: 5,
          borderRadius: 3,
          padding: 2,
        }}
      >
        {/* Search Field */}
        <TextField
          // fullWidth
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: null,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              borderRadius: 2,
              height: 35,
            },
          }}
        />
        {/* Table */}
        <Table
          sx={{
            minWidth: 500,
          }}
          aria-label="User Information Table"
        >
          {/* Table Head */}
          <TableHead>
            <TableRow>
              {/* Header Cells */}
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderBottomWidth: 2,
                  color: theme.palette.secondary.main,
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderBottomWidth: 2,
                  color: theme.palette.secondary.main,
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderBottomWidth: 2,
                  color: theme.palette.secondary.main,
                }}
              >
                Country
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderBottomWidth: 2,
                  color: theme.palette.secondary.main,
                }}
              >
                KYC Status
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {/* Render each user */}
            {(rowsPerPage > 0
              ? filteredUsers.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : filteredUsers
            ).map((user, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
                onClick={() => onUserClick(user)}
              >
                {/* User Information Cells */}
                <TableCell>
                  {/* Flex container for aligning avatar and name */}
                  <Box display="flex" alignItems="center">
                    {/* User's avatar */}
                    <Avatar
                      alt={user.name}
                      src={`https://robohash.org/${user.email}?size=50x50`}
                      sx={{ marginRight: 1 }}
                    />
                    {/* User's name */}
                    {user.name}
                  </Box>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.country}</TableCell>
                <TableCell>{user.kycStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            "& .MuiTablePagination-select, & .MuiTablePagination-input": {
              color: "secondary.main",
            },
          }}
        />
      </TableContainer>
    </Box>
  );
};

export default UserList;
