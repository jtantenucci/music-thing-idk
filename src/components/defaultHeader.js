import React, { useState, useEffect } from 'react';
import { loginUrl } from '../spotify';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Button, Grid,
   Toolbar, Typography } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: theme.palette.primary.dark,
        flexGrow: 1,
    },
    title: {
        color: theme.palette.secondary.light,
        borderRadius: '5px',
        textShadow: "0.5px 0.5px 6px white",
        '&:hover': {
          color: theme.palette.secondary.main,
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
        '&:hover': {
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
          textDecoration: 'none',  
        },
        '&:active': {
          color: theme.palette.secondary.main,
          textDecoration: 'none',  
        },
    },
    avatar: {
        width: theme.spacing(3),
        margin: theme.spacing(1),
        height: theme.spacing(3),
        color: '#ffffff',
        backgroundColor: theme.palette.primary.dark,
    }
  }));

export default function DefaultHeader() {
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
                    <Button className={classes.button} href={loginUrl} variant="outlined">
                      log in with spotify 
                    </Button>
                        <Typography variant="h6" className={classes.title} noWrap>
                            placeholderlol
                        </Typography>
                    </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
