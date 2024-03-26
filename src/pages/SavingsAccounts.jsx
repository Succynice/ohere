import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SchoolIcon from "@mui/icons-material/School";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import Divider from "@mui/material/Divider";
import SavingsTable from "../components/SavingsAccountsComponents/SavingsTable";
import StudentCreditTable from "../components/SavingsAccountsComponents/StudentCreditTable";
import GadgetCreditTable from "../components/SavingsAccountsComponents/GadgetCreditTable";
import JapaVisaCreditTable from "../components/SavingsAccountsComponents/JapaVisaCreditTable";
import NewLandGoalTable from "../components/SavingsAccountsComponents/NewLandGoalTable";

// Custom TabPanel component to render the content of each tab panel
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  // Only render the content of the tab panel if it is the currently selected tab
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// PropTypes for CustomTabPanel to ensure correct props are passed
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Helper function to provide accessibility props for each tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Main component for the Savings Accounts page
export default function SavingsAccounts() {
  // State to keep track of the currently selected tab
  const [value, setValue] = React.useState(0);

  // Handler for changing the selected tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Container for the tabs */}
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {/* Tab for Just Save */}
          <Tab
            label="Just Save"
            icon={<AccountBalanceWalletIcon sx={{ color: "primary.main" }} />}
            {...a11yProps(0)}
          />
          {/* Tab for Student Credit */}
          <Tab
            label="Student Credit"
            icon={<SchoolIcon sx={{ color: "purple" }} />}
            {...a11yProps(1)}
          />
          {/* Tab for Gadget Credit */}
          <Tab
            label="Gadget Credit"
            icon={<DeviceHubIcon sx={{ color: "error.light" }} />}
            {...a11yProps(2)}
          />
          {/* Tab for Japa (Visa) Credit */}
          <Tab
            label="Japa (Visa) Credit"
            icon={<CreditCardIcon sx={{ color: "secondary.main" }} />}
            {...a11yProps(3)}
          />
          {/* Tab for New Land Goal */}
          <Tab
            label="New Land Goal"
            icon={<HomeWorkIcon sx={{ color: "black" }} />}
            {...a11yProps(4)}
          />
        </Tabs>
        <Divider />
      </Box>
      {/* Custom TabPanel components for each tab */}
      <CustomTabPanel value={value} index={0}>
        <SavingsTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <StudentCreditTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <GadgetCreditTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <JapaVisaCreditTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <NewLandGoalTable />
      </CustomTabPanel>
    </Box>
  );
}
