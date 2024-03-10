import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import logo from "../assets/ohereLogo.png";

const CenteredBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "500px", // Set maximum width for the box
  height: "100vh", // Set height to full viewport height
  margin: "0 auto", // Center the box horizontally
  padding: "20px", // Add some padding
});

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "95%",
  outline: "1px solid black",
  padding: "20px",
  borderRadius: "8px"
});

// const FieldBox = styled(Box)({
//   borderRadius: '10px', // Add borderRadius here
//   // Add other styles as needed
//   marginTop: '30px',
//   Display: 'block',
//  });

const AdminLogin = () => {
  // State variables
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const handdleSubmit = (e) => {
    e.preventDefault();

    if (title && password) {
      console.log(title, password);
    }
  };

  return (
    <CenteredBox>
      <ContentBox>
        <Typography variant="h5" gutterBottom>
          Welcome to Admin Panel
        </Typography>
        <form
          noValidate
          autoComplete="off"
          style={{ width: "100%" }}
          onSubmit={handdleSubmit}
        >
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            sx={{
              mb: 2,
            }}
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "1.2rem" },
            }}
          />

          <TextField
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            label="Password "
            variant="outlined"
            color="secondary"
            fullWidth
            required
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "1.2rem" },
            }}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
            style={{ marginBottom: '0px' }} // Add this line to remove extra margin
          />
          <Link href="#" variant="body2" style={{ alignSelf: 'flex-end' }}> {/* Adjusted alignment */}
            Forgot password?
          </Link>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 2 }}
          >
            Login
          </Button>
        </form>
      </ContentBox>
    </CenteredBox>
  );
};

export default AdminLogin;
