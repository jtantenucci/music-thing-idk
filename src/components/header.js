import { React, useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Button, ClickAwayListener, Grid,
  Grow, MenuItem, MenuList, Paper, 
  Popper, Toolbar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SpotifyWebApi from 'spotify-web-api-js';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
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
      color: theme.palette.secondary.main,
      borderRadius: '5px',
      textShadow: "0.5px 0.5px 6px white",
      '&:hover': {
        color: theme.palette.primary.light,
        textDecoration: 'none',  
      }
     },
    appBar: {
      backgroundColor: theme.palette.primary.dark,
      [theme.breakpoints.up('sm')]: {
        zIndex: theme.zIndex.drawer + 1,
        width: `calc(100% - ${200}px)`,
        marginRight: 200,
      },
      display: 'flex',
      alignItems: '',
      justifyContent: 'start',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      backgroundColor: theme.palette.primary.dark,
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: "#ffffff",
      padding: theme.spacing(3),
    },
    button: {
        color: '#ffffff',
        borderColor: '#ffffff',
        fontStyle: 'italic',
        paddingRight: 20,
        marginLeft: -10,
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


export default function Header(props) {
    const { window } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [user, setUser] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List className={classes.listItem}>
            {['brain', 'brain', 'brain', 'brain'].map((text, index) => (
              <ListItem button key={index}>
                  
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
      </div>
    );


    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };


    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
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

    const container = window !== undefined ? () => window().document.body : undefined;

        return (
            <div className={classes.root}>
            <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
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
                        <Typography variant="h6" className={classes.title} noWrap>
                            we like music we like music
                        </Typography>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      className={classes.menuButton}
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
                <Hidden smUp implementation="css">
                  <Drawer
                    container={container}
                    className={classes.drawer}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    variant="temporary"
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                          keepMounted: true,
                    }}
                    anchor="right"
                  >
                  {drawer}
                  </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                      variant="permanent"
                      open
                      anchor="right"
                    >
                      {drawer}
                    </Drawer>
                  </Hidden>
            </div>
        )
    }
