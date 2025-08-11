import './App.css';
import { Route, Routes, HashRouter } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';

function App() {
    return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
    </HashRouter>
  );

}

export default App;
