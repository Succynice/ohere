import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserManagement from "./pages/UserManagement";
import AdminDashboard from "./pages/AdminDashboard";
import UserDetailPage from "./pages/UserDetailPage";
import UserBankAccounts from "./pages/UserBankAccounts";
import KYCVerification from "./pages/KYCVerification";
import DarkTheme from "./components/DarkTheme";

function App() {
  return (
    <DarkTheme>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserManagement />} />
        <Route path="/admin/*" element={<AdminDashboard />}>
          {/* Nested routes for AdminDashboard */}
          <Route path="home" element={<Home />} />
          <Route path="user" element={<UserManagement />} />
          {/* <Route path="savings" element={<UserBankAccounts />} /> */}
          <Route path="bank" element={<UserBankAccounts />} />
          <Route path="Kyc" element={<KYCVerification />} />

          {/* Add more nested routes as needed */}
        </Route>
        {/* <Route path="userDetailPage" element={<UserDetailPage />} /> */}

        <Route path="/user/:id" element={<UserDetailPage />} />
      </Routes>
    </DarkTheme>
  );
}

export default App;
