import React from 'react';
import { loginUrl } from '../spotify';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Grid,
   Toolbar, Typography } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiSpotify } from '@mdi/js';
 
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
        },
        '&:active': {
          color: theme.palette.secondary.main,
          textDecoration: 'none',  
        },
    },
    icon: {
        marginLeft: 5,
        marginRight: -5,
        color: theme.palette.secondary.main,
        '&:hover': {
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
        },
        '&:active': {
          color: theme.palette.secondary.main,
          textDecoration: 'none',  
        },
    }
  }));

export default function DefaultHeader() {
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                    <Grid container direction="row" justify="space-between" alignItems ="center">
                      <Button className={classes.button} href={loginUrl} variant="outlined">
                        log in with spotify 
                        <Icon path={mdiSpotify} size={1} className={classes.icon} />
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
