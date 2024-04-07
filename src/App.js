import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Excercise from './pages/Excercise';
import Footer from './components/Footer';

function App() {
  return (
    <div className='Background-image'>
    <Box className= "InnerBackground" width="400px" sx={{ width: {xl: '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/excercise/:id" element={<Excercise/>}/>
      </Routes>
      <Footer/>
    </Box>
    </div>
  );
}

export default App;
