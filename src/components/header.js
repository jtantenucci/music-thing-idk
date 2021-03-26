import { React, useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Button, ClickAwayListener, Grid,
  Grow, MenuItem, MenuList, Paper, 
  Popper, Toolbar, Typography, IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import Drawer from "@material-ui/core/Drawer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";


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
      zIndex: theme.zIndex.drawer + 1,
      display: 'flex',
      alignItems: '',
      justifyContent: 'start',
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


export default function Header() {

    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [user, setUser] = useState(null);
<<<<<<< HEAD
    const [name, setName] = useState(null);

    const handleDrawerOpen = () => {
      setOpenDrawer(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

=======
>>>>>>> 1ff89dcfba9dc179159da9906b05bf246eda67a1
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
<<<<<<< HEAD
          setName(user.display_name);
=======
          console.log(user.display_name);
>>>>>>> 1ff89dcfba9dc179159da9906b05bf246eda67a1
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
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
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
                            :)
                        </Typography>
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
                    <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          ></IconButton>
                </AppBar>
                <div className={classes.root}>
       <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </Drawer>
    </div>
            </div>
        )
    }
