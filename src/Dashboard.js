import './App.css';
import Homepage from './pages/Homepage';
import Header from './components/header';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile';
import StickyFooter from './components/Footer';
import Playlists from './pages/Playlists';


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


export default function Dashboard({ token, spotify }) {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [contentOpen, setContentOpen] = useState(true);


  useEffect(() => {
    console.log("effect");
    spotify.getMe().then(user => {
      setUser(user);
      setUserName(user.display_name);
      setUserImage(user.images[0]);
    })

    spotify.getMyTopTracks().then(topTracks => {
      setTracks(topTracks.items)
    })

  }, [spotify])

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
          <Header
            userName={userName}
            userImage={userImage}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
            drawerOpen={drawerOpen}
            contentOpen={contentOpen}
            spotify={spotify}
          />
          <Switch>
            <Route exact path="/" component={() =>
              <Homepage
                token={token}
                contentOpen={contentOpen}
                tracks={tracks}
              />}
            />
            <Route exact path="/profile" component={() =>
              <Profile
                token={token}
                username={user.display_name}
                followers={user.followers.total}
                userImage={user.images[0]}
                contentOpen={contentOpen}
                spotify={spotify}
              />}
            />
            <Route exact path="/playlists" component={() =>
              <Playlists
                token={token}
                username={user.display_name}
                spotify={spotify}
              />}
            />
          </Switch>
          <StickyFooter />
        </div>
      </BrowserRouter>
    </div>
  );
}