import './App.css';
import DefaultHeader from './components/defaultHeader';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import Dashboard from './Dashboard';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi(); //wrapper for the spotify api

export default function App() {
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; //this clears the access token from the url for security

    const _token = hash.access_token; //object that gets returned

    if (_token) { //if there is a token set it to the token in usestate
      setToken(_token);
      spotify.setAccessToken(_token); //giving it back to the spotify api
      setAuth(_token);
    }
  }, []);

  if (auth === null) {
      return <DefaultHeader />
  }
  if (auth){
      return (
        <Dashboard tokem={token} spotify={spotify}/>
    )
  } 
  return <DefaultHeader />
}