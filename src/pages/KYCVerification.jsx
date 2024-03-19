import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Pagination,
  TextField,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

const KYCVerification = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 8; // Adjust this value to change the number of users per page

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const usersWithKYC = data.map((user) => ({
          ...user,
          documents: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
          ],
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
        }));
        setUsers(usersWithKYC);
      });
  }, []);

  const handleApprove = (id) => {
    console.log(`Approved user with ID: ${id}`);
    // Implement your approval logic here
  };

  const handleDisapprove = (id) => {
    console.log(`Disapproved user with ID: ${id}`);
    // Implement your disapproval logic here
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        color="warning.main"
        fontWeight="fontWeightBold"
      >
        User KYC Verification
      </Typography>
      <TextField
        label="Search Users"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />
      <Grid container spacing={2} justifyContent="start">
        {currentUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={user.id}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    overflowY: "auto",
                    maxHeight: "200px",
                    "&::-webkit-scrollbar": {
                      display: "none", // Hide scrollbar for Chrome, Safari, and Opera
                    },
                    scrollbarWidth: "none", // Hide scrollbar for Firefox
                  }}
                >
                  <Typography variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    {user.documents.map((doc, index) => (
                      <img
                        key={index}
                        src={doc}
                        alt="Document"
                        style={{ width: "250px", marginBottom: "10px" }}
                      />
                    ))}
                    <video width="320" height="240" controls>
                      <source src={user.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="success"
                  onClick={() => handleApprove(user.id)}
                  startIcon={<CheckCircleIcon />}
                >
                  Approve
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDisapprove(user.id)}
                  startIcon={<CloseIcon />}
                >
                  Disapprove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Pagination
          count={Math.ceil(filteredUsers.length / usersPerPage)}
          page={currentPage}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default KYCVerification;
