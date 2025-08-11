import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import HomePage from './HomePage.js';

function App() {
    return (
    <Router>
      <Routes>
        <Route index path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
    </Router>
  );

}

export default App;
