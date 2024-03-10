import { Routes, Route, Link } from 'react-router-dom';
// import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SignIn from './pages/Signin';


const theme = createTheme({
  palette: {
    success: {
      main: '#38ffdb'
    },
    primary: {
      main: '#0278dc'
    },
    secondary: {
      main: '#06d0b0'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: '400',
    fontWeightRegular: '500',  
    fontWeightMedium: '600',  
    fontWeightBold: '700'  
  }
});



// Create our root component => App Component
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App
