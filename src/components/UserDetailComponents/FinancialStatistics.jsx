// FinancialStatistics.jsx
import React from "react";
import { Typography, Grid, IconButton, Box, Paper } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const FinancialStatistics = ({ financialStatistics }) => (
  <Grid item xs={12} sm={6} md={6}>
    <Paper elevation={5} sx={{ p: 2, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          align="center"
          color="secondary.main"
          fontWeight="fontweightBold"
        >
          Financial Statistics
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton aria-label="financial statistics">
            <AttachMoneyIcon sx={{ fontSize: "3rem", color: "warning.main", }} />
          </IconButton>
          <Typography variant="body1">
            <Typography
              sx={{ color: "primary.main", fontWeight: "fontWeightMedium" }}
            >
              Total Income:
            </Typography>{" "}
            {financialStatistics.totalIncome}
          </Typography>
          <Typography variant="body1" sx={{ px: 1 }}>
            <Typography
              sx={{ color: "error.dark", fontWeight: "fontWeightMedium" }}
            >
              Total Expenses:
            </Typography>{" "}
            {financialStatistics.totalExpenses}
          </Typography>
          <Typography variant="body1">
            <Typography
              sx={{ color: "success.dark", fontWeight: "fontWeightMedium" }}
            >
              Net Income:
            </Typography>{" "}
            {financialStatistics.netIncome}
          </Typography>
        </Box>
      </Box>
    </Paper>
  </Grid>
);

export default FinancialStatistics;
