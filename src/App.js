import './App.css';
import Drawer from './components/drawer';
import Homepage from './pages/Homepage';
import Header from './components/header';
import DefaultHeader from './components/defaultHeader';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Profile from './pages/Profile';

const spotify = new SpotifyWebApi(); //wrapper for the spotify api

export default function App() {

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  //run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; //this clears the access token from the url for security

    const _token = hash.access_token; //object that gets returned

    if (_token) { //if there is a token set it to the token in usestate
      setToken(_token);
      spotify.setAccessToken(_token); //giving it back to the spotify api

      spotify.getMe().then(user => {
        setUser(user);
        console.log(user.display_name);
      })
    }

  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <div>
      {token ?
          <Header user={user}/>
        :
          <DefaultHeader />
      }
        <Drawer />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path ="/profile" component={Profile} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
    );
  }