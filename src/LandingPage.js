import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Typography } from '@mui/material';
import TitleComponent from './components/TitleComponent';
import useWindowSize from './hooks/useWindowSize';

function LandingPage() {
  const {width} = useWindowSize();
  const [nameInput, setNameInput] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    if (!nameInput) {
      setError(true);
      return;
    }

    try {
      const response = await fetch(
        `https://sheetdb.io/api/v1/qcqotidkxnz9p/search_or?Name=${encodeURIComponent(nameInput)}&Email=${encodeURIComponent(nameInput)}&Phone%20Number=${encodeURIComponent(nameInput)}`
      );
      const results = await response.json();
      localStorage.setItem('isWeddingGuest', 'false');
      localStorage.setItem('guestCities', null);

      if (results.length) {
        console.log(nameInput, 'nameInput');
        setError(false);
        localStorage.setItem('isWeddingGuest', 'true');
        localStorage.setItem('guestCities', results[0].Cities);
        navigate('/home');
      }
      else {
        console.log(nameInput, 'nameInput');
        setError(true);
      }
    } catch (err) {
      console.log(nameInput, 'nameInput');
      setError(true);
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
          <TitleComponent width={width} />
          {error && <span className="password-error">We didn't recognize that, please try again or contact host</span>}
          <input className="landing-page-input" onChange={(e)=>setNameInput(e.target.value)} placeholder='Enter your full name, email address, or phone number'></input>
          <button className="landing-page-button" type="submit">ENTER</button>
        </form>
    </div>
  );
}

export default LandingPage;
