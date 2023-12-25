import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer';
import Home from './Components/Home';


function App() {
  return (
    <Container>
      <CssBaseline />
      <Header/>
      
      <Home/>
      <Footer/>
    </Container>
    
  );
}

export default App;
