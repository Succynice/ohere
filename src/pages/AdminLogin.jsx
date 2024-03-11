import React, { useState } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import userData from "../data/userData.json";
import Copyright from "../components/Copyright.jsx";
import DarkTheme from "../components/DarkTheme";
import CustomLoginForm from "../components/CustomLoginForm";

export default function SignIn() {
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );

    const user = userData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setLoginError(false);
      console.log("Login successful:", user);
    } else {
      setLoginError(true);
      console.log("Login failed: Invalid email or password");
    }
  };

  return (
    <DarkTheme>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Company Logo"
            src="https://ohere-online.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7e37d2e5-0aa4-4da6-8b15-2b37a3731ae6%2Fed38ebca-0977-4d89-9a47-6d7c4d022da1%2Fohere_logo.png?table=block&id=f9e51275-3738-4bd9-aaee-cbfc1726b01f&spaceId=7e37d2e5-0aa4-4da6-8b15-2b37a3731ae6&width=1020&userId=&cache=v2"
            sx={{ width: 140, height: 130, mb: 2 }}
          />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              borderRadius: 2,
              border: 2,
              borderColor: "grey.500",
              p: { xs: 2, sm: 2, md: 5 },
              elevation: 8,
              boxShadow: 5,
            }}
          >
            <Typography
              variant="h6"
              align="center"
              color="secondary"
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "1.5rem", 
                  md: "1.9rem", 
                },
             }}
            >
              Welcome Back! 😊
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{
                fontWeight: "regular",
                fontSize: {
                  xs: "0.9rem", 
                  md: "1.2rem", 
                },
             }}
            >
              Please sign in with your details....
            </Typography>
            
            {/***  Form Field Component ****/}
            <CustomLoginForm />

            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <FormControlLabel
                  control={<Checkbox value="remember" color="secondary" />}
                  label={<Typography>Remember me</Typography>}
                />
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color="error">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            {loginError && (
              <Typography color="error" align="center">
                Invalid email or password
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{
                mt: 3,
                mb: 2,
                padding: "0.6rem",
                borderRadius: 3,
                fontSize: "1.4rem",
                fontWeight: "bold",
              }}
            >
              LOGIN
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </DarkTheme>
  );
}
