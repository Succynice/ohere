import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function CopyRight(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      fontWeight="fontWeightMedium"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="secondary"
        href="/"
        underline="none"
        sx={{
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
            color: "primary.main",
          },
        }}
      >
        Ohere App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default CopyRight;
