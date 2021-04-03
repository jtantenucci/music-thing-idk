import './App.css';
import Homepage from './pages/Homepage';
import Header from './components/header';
import clsx from 'clsx';
import DefaultHeader from './components/defaultHeader';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile';
import StickyFooter from './components/Footer';

const spotify = new SpotifyWebApi(); //wrapper for the spotify api
const useStyles = makeStyles((theme) => ({
  app: {
      flexGrow: 1,
      padding: 80,
      backgroundColor: theme.palette.primary.dark,
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
  },
  appShift: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 200,
  },
}));


export default function App() {
  const classes = useStyles();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [contentOpen, setContentOpen] = useState(true);

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
      spotify.getMyTopTracks().then(topTracks => {
          setTracks(topTracks.items)
      })
    }

  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
    setContentOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setContentOpen(false);
  };

  return (
    <div className={clsx(classes.app, {
      [classes.appShift]: contentOpen,
    })}>
      <BrowserRouter>
      <div>
      {token ?
      <>
          <Header 
          user={user} 
          handleDrawerOpen={handleDrawerOpen} 
          handleDrawerClose={handleDrawerClose}
          drawerOpen={drawerOpen}
          contentOpen={contentOpen}  
          />
          <Switch>
            <Route exact path="/" component={() => <Homepage token={token} contentOpen={contentOpen} tracks={tracks}/>} />
            <Route exact path ="/profile" component={() => <Profile token={token} user={user}/>} />
          </Switch>
          <StickyFooter />
      </>
        :
        <>
          <DefaultHeader />
          <StickyFooter />
        </>
      }
      </div>
      </BrowserRouter>
    </div>
    );
  }