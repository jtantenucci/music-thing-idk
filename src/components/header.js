import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Button, ClickAwayListener, Grid,
  Grow, MenuItem, MenuList, Paper, 
  Popper, Toolbar, Typography } from '@material-ui/core';
 
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

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
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
                        <Avatar className={classes.avatar}></Avatar> friend
                    </Button>
                        <Typography variant="h6" className={classes.title} noWrap>
                            we like music we like music
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
                                        <MenuItem onClick={handleClose}>my profile</MenuItem>
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
            </div>
        )
    }
