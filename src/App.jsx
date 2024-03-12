// import { Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserManagement from "./pages/UserManagement";
import AdminDashboard from "./pages/TxtAdminLogin";
import UserDetailPage from "./pages/UserDetailPage";
import DarkTheme from "./components/DarkTheme";

// Root component => App Component
function App() {
  return (
    <DarkTheme>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserManagement />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
      </Routes>
    </DarkTheme>
  );
}

export default App;

