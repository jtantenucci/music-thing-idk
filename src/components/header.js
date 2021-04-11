import { React, useState, useEffect, useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import WebPlayerTitle from '../pieces/webPlayerTitle';
import WebPlayerAlbumArt from '../pieces/webPlayerAlbumArt';
import WebPlayerButtons from '../pieces/webPlayerButtons';
import {
  AppBar, Avatar, Button, ClickAwayListener, Grid,
  Grow, MenuItem, MenuList, Paper,
  Popper, Toolbar, Typography
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NowPlaying from './nowPlaying';


const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    flexGrow: 1,
  },
  title: {
    color: theme.palette.secondary.main,
    borderRadius: '5px',
    padding: "5px 5px",
    textShadow: "0.5px 0.5px 6px white",
    '&:hover': {
      color: theme.palette.primary.light,
      textDecoration: 'none',
    },
  },
  appBar: {
    height: 64,
    backgroundColor: theme.palette.primary.dark,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    height: 64,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
    paddingRight: 30,
    paddingLeft: 0,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.dark,
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      border: 0,
      paddingTop: 3,
      marginTop: 3,
    },
    marginLeft: 4,
    color: '#ffffff',
    borderColor: '#ffffff',
    fontStyle: 'italic',
  },
  buttonText: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: 4,
    color: theme.palette.primary.light,
  },
  menuButtonOpen: {
    display: 'none',
  },
  avatar: {
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    width: theme.spacing(3),
    margin: 5,
    height: theme.spacing(3),
    backgroundColor: theme.palette.primary.dark,
  },
  buttonDrawerOpen: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: 3,
      marginTop: 3,
      border: 0,
    },
    marginLeft: 4,
    color: '#ffffff',
    borderColor: '#ffffff',
    fontStyle: 'italic',
  },
}));

export default function Header({ handleDrawerOpen, handleDrawerClose, drawerOpen, userName, userImage, token, spotify }) {
  const theme = useTheme();
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isPlaying, setPlaying] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(
    {
      playing: {
        songTitle: "",
        songArtist: "",
        songAlbum: "",
        songAlbumArt: "",
        songUri: "",
      }
    });

  spotify.getMyCurrentPlaybackState().then(res => {
    setPlaying(res.is_playing);
  })

  useEffect(() => {
    if (isPlaying === null || isPlaying === false) {
      console.log("empty")
      setNowPlaying({
        playing: {
          songTitle: " ",
          songArtist: " ",
          songAlbum: " ",
          songAlbumArt: " ",
          songUri: " ",
        }
      })
    }
    if (isPlaying) {
      spotify.getMyCurrentPlayingTrack().then(res => {
        console.log(res.item);
        setNowPlaying({
          playing: {
            songTitle: res.item.name,
            songArtist: res.item.artists[0].name,
            songAlbum: res.item.album.name,
            songAlbumArt: res.item.album.images[0].url,
            songUri: res.item.uri,
          }
        })
      })
    }
  }, [isPlaying, spotify])

  const checkIfPlaying = () => {
    spotify.getMyCurrentPlaybackState().then(res => {
      setPlaying(res.is_playing);
      console.log(res.is_playing);
    })
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <Grid container justify="flex-start" alignItems="center">
            <Grid container justify="flex-start" alignItems="center">
              <Button
                variant="outlined"
                size="small"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={drawerOpen ? classes.buttonDrawerOpen : classes.button}>
                <Avatar
                  className={classes.avatar}
                  src={userImage}
                />
                <Typography variant="button" className={classes.buttonText}>
                  {userName}
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="flex-end" alignItems="center" spacing={1}>
            <Grid container justify="flex-end" alignItems="center">
              <Typography variant="h6" className={classes.title} noWrap>
                we like music
                      </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={drawerOpen ? classes.menuButtonOpen : classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'left' }}
              >
                <Paper className={classes.content}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      id="menu-list-grow"
                      autoFocusItem={open}
                    >
                      <MenuItem button onClick={handleClose}><Link to="/profile">my profile</Link></MenuItem>
                      <MenuItem button onClick={handleClose}>saved playlists</MenuItem>
                      <MenuItem button onClick={handleClose}>logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        open={drawerOpen}
        variant="persistent"
        anchor="right"
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Button onClick={checkIfPlaying}>
            check if music is playing
                    </Button>
        </div>
        <NowPlaying
          webPlayerTitle={<WebPlayerTitle playingObject={nowPlaying.playing} />}
          webPlayerAlbumArt={<WebPlayerAlbumArt playingObject={nowPlaying.playing} isPlaying={isPlaying} />}
          webPlayerButtons={<WebPlayerButtons playingObject={nowPlaying.playing} />}
        />
      </Drawer>
    </div>
  )
}
