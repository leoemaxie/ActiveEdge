import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Excercise from './pages/Excercise';
import Footer from './pages/Footer';

function App() {
  return (
    <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/excercise/:id" element={<Excercise/>}/>
      </Routes>
    </Box>
  );
}

export default App;
