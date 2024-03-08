import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';



// Create our root component => App Component
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App
