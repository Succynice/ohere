import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import HomePage from "./Home";
import UserBankAccounts from "./UserBankAccounts";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SchoolIcon from "@mui/icons-material/School";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import Savings from "../components/SavingsAccountsComponents/Savings";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SavingsAccounts() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label="Just Save"
            icon={<AccountBalanceWalletIcon sx={{ color: "primary.main" }} />}
            {...a11yProps(0)}
          />
          <Tab
            label="Student Credit"
            icon={<SchoolIcon sx={{ color: "purple" }} />}
            {...a11yProps(1)}
          />
          <Tab
            label="Gadget Credit"
            icon={<DeviceHubIcon sx={{ color: "error.light" }} />}
            {...a11yProps(2)}
          />
          <Tab
            label="Japa (Visa) Credit"
            icon={<CreditCardIcon sx={{ color: "secondary.main" }} />}
            {...a11yProps(3)}
          />
          <Tab
            label="New Land Goal"
            icon={<HomeWorkIcon sx={{ color: "black" }} />}
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
        <HomePage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
        <UserBankAccounts />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
        <Savings />
      </CustomTabPanel>
    </Box>
  );
}
