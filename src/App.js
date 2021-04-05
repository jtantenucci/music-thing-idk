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
    minWidth: 450,
    flexGrow: 1,
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
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
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
    marginRight: 250,
  },
}));


export default function App() {
  const classes = useStyles();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isPlaying, setPlaying] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [contentOpen, setContentOpen] = useState(true);
  const [nowPlaying, setNowPlaying] = useState(
    {playing: {
        songTitle: "",
        songArtist: "",
        songAlbum: "",
        songAlbumArt: ""
    }
  });

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
        setUserName(user.display_name);
        setUserImage(user.images[0].url);
      })

      spotify.getMyTopTracks().then(topTracks => {
          setTracks(topTracks.items)
      })
    }

    spotify.getMyCurrentPlaybackState().then(res => {
      setPlaying(res.is_playing);
      console.log(res.is_playing);
    })

  }, []);

  //Unhandled Rejection (TypeError): Cannot read property 'name' of null (when ad is playing but status is checked)
const checkIfPlaying = () => {
  spotify.getMyCurrentPlaybackState().then(res => {
    setPlaying(res.is_playing);
    console.log(res.is_playing);
    if (isPlaying) {
      spotify.getMyCurrentPlayingTrack().then(res => {
        console.log(res.item);
        setNowPlaying({...nowPlaying, playing: {
            songTitle: res.item.name,
            songArtist: res.item.artists[0].name,
            songAlbum: res.item.album.name,
            songAlbumArt: res.item.album.images[0].url,
          }
        })
      })
    }
  })
};

console.log(nowPlaying);

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
            userName={userName}
            userImage={userImage} 
            handleDrawerOpen={handleDrawerOpen} 
            handleDrawerClose={handleDrawerClose}
            drawerOpen={drawerOpen}
            checkIfPlaying={checkIfPlaying}
            contentOpen={contentOpen}
            playingObject={nowPlaying.playing} 
          />
          <Switch>
            <Route exact path="/" component={() => 
              <Homepage 
                token={token} 
                contentOpen={contentOpen} 
                tracks={tracks}
              />} 
            />
            <Route exact path ="/profile" component={() => 
              <Profile 
                token={token} 
                username={user.display_name}
                followers={user.followers.total}
                profileLink={user.external_urls.spotify}
                userImage={user.images[0].url}
              />} 
            />
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