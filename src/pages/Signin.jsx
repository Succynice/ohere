import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider and createTheme

// Create a dark theme
const darkTheme = createTheme({
 palette: {
    mode: 'dark', // Set the theme to dark mode
 },
});

function Copyright(props) {
 return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      fontWeight="fontWeightMedium"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/" underline="none"> {/* Remove underline from the link */}
        Ohere App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
 );
}

export default function SignIn() {
 const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
 };

 return (
    <ThemeProvider theme={darkTheme}> {/* Wrap the component with ThemeProvider to apply the dark theme */}
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://ohere-online.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7e37d2e5-0aa4-4da6-8b15-2b37a3731ae6%2Fed38ebca-0977-4d89-9a47-6d7c4d022da1%2Fohere_logo.png?table=block&id=f9e51275-3738-4bd9-aaee-cbfc1726b01f&spaceId=7e37d2e5-0aa4-4da6-8b15-2b37a3731ae6&width=1020&userId=&cache=v2"
            alt="Company Logo"
            style={{ width: "100px", height: "100px", marginBottom: "16px" }}
          />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              borderRadius: 2,
              border: 1,
              borderColor: "grey.500",
              p: { xs: 2, sm: 2, md: 5 },
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              align="center"
              color="secondary"
              sx={{ fontWeight: "fontWeightBold", fontSize: "1.5rem" }}
            >
              Welcome Back!
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ fontWeight: "fontWeightBold", fontSize: "1.2rem",}}
            >
              Please sign in with your details....
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color="secondary"
              sx={{ my: 3 }}
              InputLabelProps={{
                style: { fontWeight: "bold" },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
              sx={{ mb: 3 }}
              InputLabelProps={{
                style: { fontWeight: "bold" },
              }}
            />
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
                <Link href="#" variant="body2">
                 Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 2, borderRadius: 3 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
 );
}
