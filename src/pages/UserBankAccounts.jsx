import React, { useState } from "react";
import BankAccountsTable from "../components/UserBankAccountsComponents/BankAccountsTable";
import { Container, Box, Typography, } from "@mui/material";

function UserBankAccounts() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            color="warning.main"
            fontWeight="fontWeightBold"
          >
            User Bank Accounts
          </Typography>
          <BankAccountsTable
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Box>
      </Container>
    </div>
  );
}

export default UserBankAccounts;
