import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/material";

// const useStyles = makeStyles({
//   btn: {
//     fontSize: 60,
//     backgroundColor: "violet",
//   },
// });

function Login() {
  // const classes = useStyles();

  return (
    <section>
      <h1>Login Page</h1>
      <p>
        Click link below to go to the <Link to="/"> Home page </Link>
      </p>
      <br />
      <Typography variant="h2" color="primary">
        hello world
      </Typography>
      <Button variant="contained">
        Contained
      </Button>
    </section>
  );
}

export default Login;
