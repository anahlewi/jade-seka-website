import './App.css';
import { Route, Routes, HashRouter } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route index path="/" element={<LandingPage/>} />
          <Route path="/home" element={<HomePage/>}></Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
