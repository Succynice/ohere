import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  CircularProgress,
} from "@mui/material";
import UserDetails from "../components/UserDetailComponents/UserDetails";
import FinancialStatistics from "../components/UserDetailComponents/FinancialStatistics";
import KYCStatus from "../components/UserDetailComponents/KYCStatus";
import TransactionHistory from "../components/UserDetailComponents/TransactionHistory";

// UserDetailPage component to display user details, financial statistics, KYC status, and transaction history
const UserDetailPage = () => {
  const [user, setUser] = useState({});
  const [financialStatistics, setFinancialStatistics] = useState({});
  const [kycStatus, setKycStatus] = useState("");
  const [transactions, setTransactions] = useState([]); // State for transactions
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch user details
        const userResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch financial statistics for the user
        setFinancialStatistics({
          totalIncome: "10000",
          totalExpenses: "5000",
          netIncome: "5000",
        });

        // Fetch KYC status for the user
        setKycStatus("Verified");

        // Fetch transaction history for the user
        const transactionResponse = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const transactionData = await transactionResponse.json();
        // Simulate transaction data
        const transactions = transactionData.map((post) => ({
          id: post.id,
          amount: Math.floor(Math.random() * 1000), // Random amount
          date: new Date(post.id * 1000).toLocaleDateString(), // Convert id to date
          type: Math.random() > 0.5 ? "Credit" : "Debit", // Random type
        }));
        setTransactions(transactions);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // If data is still loading, display a loading indicator
  if (loading) {
    return <CircularProgress />;
  }
  // Render the user detail page with user details, financial statistics, KYC status, and transaction history
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          color="warning.main"
          fontWeight="fontWeightBold"
        >
          User Details
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
          <UserDetails user={user} />
        </Paper>
        <Paper elevation={5} sx={{ p: 2, mt: 2 }}>
          {/* <Typography variant="h6" component="h2">
            User Details
          </Typography> */}
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1">
                <Typography
                  sx={{
                    color: "secondary.light",
                    fontWeight: "fontWeightBold",
                  }}
                >
                  📧 EMAIL:
                </Typography>{" "}
                {user.email}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1">
                <Typography
                  sx={{
                    color: "secondary.light",
                    fontWeight: "fontWeightBold",
                  }}
                >
                  📱 PHONE:
                </Typography>{" "}
                {user.phone}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1">
                <Typography
                  sx={{
                    color: "secondary.light",
                    fontWeight: "fontWeightBold",
                  }}
                >
                  🏠 ADDRESS:
                </Typography>
                {user.address &&
                  `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <FinancialStatistics financialStatistics={financialStatistics} />
          <KYCStatus kycStatus={kycStatus} />
          <TransactionHistory transactions={transactions} />{" "}
          {/* Pass transactions as a prop */}
        </Grid>
      </Box>
    </Container>
  );
};

export default UserDetailPage;
