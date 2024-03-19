import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserList from "../components/UserManagementComponents/UserList";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate(); // For user navigation

  // ****** States that would be used for pagination
  //  const [currentPage, setCurrentPage] = useState(1);
  //  const itemsPerPage = 10; // Adjust this value as needed

  useEffect(() => {
    // This code simulate fetching data from an API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const formattedUsers = data.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          country: user.address.country,
          kycStatus: user.kycStatus || "pending",
        }));
        setUsers(formattedUsers);
        setFilteredUsers(formattedUsers);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Implement navigation
  const handleUserClick = (user) => {
    // console.log("Navigating to user detail page for user ID:", user.id);
    navigate(`/user/${user.id}`);
  };

  // ****** definitions to calculate pagination
  // const indexOfLastUser = currentPage * itemsPerPage;
  // const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  // const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div>
      {/* Styled "Users" as a header bar */}
      {/* <Paper
        sx={{
          padding: 2,
          marginBottom: 2,
          borderRadius: 0,
          backgroundColor: (theme) => theme.palette.secondary.main,
          color: (theme) => theme.palette.secondary.contrastText,
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Users
        </Typography>
      </Paper> */}

      {/* USER LIST */}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12}>
          <UserList users={filteredUsers} onUserClick={handleUserClick} />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserManagement;

