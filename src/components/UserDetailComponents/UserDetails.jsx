import React from "react";
import { Typography, Grid, Avatar } from "@mui/material";

const UserDetails = ({ user }) => (
  <Grid container spacing={2} alignItems="center">
    {" "}
    {/* Aligning items vertically */}
    <Grid item xs={12} sm={6} md={4}>
      <Avatar
        alt={user.name}
        src={`https://jsonplaceholder.typicode.com/photos/${user.id}`}
        sx={{ width: 100, height: 100 }}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={8}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="body1">
            <Typography
              sx={{
                color: "secondary.light",
                fontWeight: "fontWeightBold",
              }}
            >
              NAME:
            </Typography>{" "}
            {user.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Typography
              sx={{
                color: "secondary.light",
                fontWeight: "fontWeightBold",
              }}
            >
              USER ID:
            </Typography>{" "}
            {user.id}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default UserDetails;
