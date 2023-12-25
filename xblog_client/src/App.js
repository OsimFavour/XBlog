import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer';


function App() {
  return (
    <Container>
      <CssBaseline />
      <Header/>
      
      
      <Footer/>
    </Container>
    
  );
}

export default App;
