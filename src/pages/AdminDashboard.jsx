import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { debounce } from "lodash"; // Import debounce from lodash

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export default function AdminDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Debounce the navigateTo function
  const navigateTo = debounce((path) => {
    navigate(path);
    handleDrawerClose();
  }, 300); // Debounce time in milliseconds

  // Function to determine if a route is active
  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* Home tab */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigateTo("/admin/home")}
              sx={{
                color: isActive("/admin/home") ? "primary.main" : "inherit",
                py: 2,
              }}
            >
              <ListItemIcon>
                <DashboardIcon
                  sx={{
                    color: isActive("/admin/home") ? "primary.main" : "inherit",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{
                  color: isActive("/admin/home") ? "primary.main" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* User Management tab */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigateTo("/admin/user")}
              sx={{
                color: isActive("/admin/user") ? "primary.main" : "inherit",
                py: 2,
              }}
            >
              <ListItemIcon>
                <PeopleIcon
                  sx={{
                    color: isActive("/admin/user") ? "primary.main" : "inherit",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="User Management"
                sx={{
                  color: isActive("/admin/user") ? "primary.main" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Savings Accounts tab */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigateTo("/admin/savings")}
              sx={{
                color: isActive("/admin/savings") ? "primary.main" : "inherit",
                py: 2,
              }}
            >
              <ListItemIcon>
                <AccountBalanceWalletIcon
                  sx={{
                    color: isActive("/admin/savings")
                      ? "primary.main"
                      : "inherit",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Savings Accounts"
                sx={{
                  color: isActive("/admin/savings")
                    ? "primary.main"
                    : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* User Bank Accounts tab */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigateTo("/admin/bank")}
              sx={{
                color: isActive("/admin/bank") ? "primary.main" : "inherit",
                py: 2,
              }}
            >
              <ListItemIcon>
                <AccountBalanceIcon
                  sx={{
                    color: isActive("/admin/bank") ? "primary.main" : "inherit",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="User Bank Accounts"
                sx={{
                  color: isActive("/admin/bank") ? "primary.main" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* KYC Verification tab */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigateTo("/admin/kyc")}
              sx={{
                color: isActive("/admin/kyc") ? "primary.main" : "inherit",
                py: 2,
              }}
            >
              <ListItemIcon>
                <VerifiedUserIcon
                  sx={{
                    color: isActive("/admin/kyc") ? "primary.main" : "inherit",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="KYC Verification"
                sx={{
                  color: isActive("/admin/kyc") ? "primary.main" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* Main Content for Dashboard */}
        <Outlet />{" "}
        {/* This is where the content for the child routes will be rendered */}
      </Box>
    </Box>
  );
}
