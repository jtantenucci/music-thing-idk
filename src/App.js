import './App.css';
import Drawer from './components/drawer';
import Homepage from './pages/Homepage';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi(); //wrapper for the spotify api

export default function App() {

  const [token, setToken] = useState(null);

  //run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; //this clears the access token from the url for security

    const _token = hash.access_token; //object that gets returned

    if (_token) { //if there is a token set it to the token in usestate
      setToken(_token);
      spotify.setAccessToken(_token); //giving it back to the spotify api

      spotify.getMe().then(user => {
        console.log(user);
      })
    }

  }, []);

  return (
    <div className="App">
      {token ?
        <div>
          <Drawer />
          <Homepage />
        </div>
        :
        <div><Login /></div>
      }
    </div>
  );
}


