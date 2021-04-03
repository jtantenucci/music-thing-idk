import { React, useState, useEffect, useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AppBar, Avatar, Button, ClickAwayListener, Grid,
  Grow, MenuItem, MenuList, Paper, 
  Popper, Toolbar, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SpotifyWebApi from 'spotify-web-api-js';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: theme.palette.primary.dark,
        flexGrow: 1,
    },
    title: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      flexShrink: 0,
      color: theme.palette.secondary.main,
      borderRadius: '5px',
      padding: "5px 5px",
      textShadow: "0.5px 0.5px 6px white",
      '&:hover': {
        color: theme.palette.primary.light,
        textDecoration: 'none',  
      }
     },
     appBar: {
       height: 64,
       justifyItems: 'center',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      justifyItems: 'center',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
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
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.main,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    button: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      color: '#ffffff',
      borderColor: '#ffffff',
      fontStyle: 'italic',
      paddingRight: 20,
      paddingTop: 0,
      paddingBottom: 0,
    },
    avatar: {
        width: theme.spacing(3),
        margin: theme.spacing(1),
        height: theme.spacing(3),
        color: '#ffffff',
        backgroundColor: theme.palette.primary.dark,
    }
  }));
  
const spotify = new SpotifyWebApi();


export default function Header({ handleDrawerOpen, handleDrawerClose, drawerOpen, contentOpen }) {
    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [user, setUser] = useState(null);


    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };




    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };

    useEffect(() => {
        spotify.getMe().then(user => {
          setUser(user.display_name);
          console.log(user.display_name);
        })
      
    }, []);

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
                  <Grid container direction="row" justify="space-between" alignItems ="center">
                    <Button 
                        variant="outlined"
                        size="small"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true" 
                        onClick={handleToggle} 
                        className={classes.button}>
                        <Avatar className={classes.avatar}></Avatar> {user}
                    </Button>
                  </Grid>
                    <Grid container justify="flex-end" alignItems="center">
                        <Typography variant="h6" className={classes.title} noWrap>
                            we like music
                        </Typography>
                        <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          edge="end"
                          onClick={handleDrawerOpen}
                          className={clsx(drawerOpen && classes.hide)}
                        >
                          <MenuIcon />
                        </IconButton>
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
                                        <MenuItem onClick={handleClose}><Link to="/profile">my profile</Link></MenuItem>
                                        <MenuItem onClick={handleClose}>saved playlists</MenuItem>
                                        <MenuItem onClick={handleClose}>logout</MenuItem>
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
                    }}
                    anchor="right">
                  <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                  </div>
                  <List className={classes.listItem}>
                      {['brain', 'brain', 'brain', 'brain'].map((text, index) => (
                        <ListItem button key={index}>
                            
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                    </List>
                  </Drawer>
            </div>
        )
    }
