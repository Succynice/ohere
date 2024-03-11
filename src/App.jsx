import { Routes, Route, } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";

// Root component => App Component
function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
