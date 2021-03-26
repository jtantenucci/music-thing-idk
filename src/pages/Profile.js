import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, Typography  } from '@material-ui/core';
import SpotifyWebApi from 'spotify-web-api-js';
import Header from '../components/header';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 275,
        backgroundColor: theme.palette.primary.dark,
    },
    box: {
        borderRadius: '5px',
        backgroundColor: theme.palette.primary.dark,
    },
    title: {
        fontSize: 14,
    },
    titleBar: {
        fontStyle: 'oblique',
        color: theme.palette.primary.light,
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    pageHead: {
        color: theme.palette.secondary.light,
        textShadow: "0.5px 0.5px 5px #AACDA2",
        fontStyle: 'oblique',
        textAlign: 'center',
    },
}))

const spotify = new SpotifyWebApi();

export default function Profile() {

    const classes = useStyles();

    const [user, setUser] = useState(null);

    useEffect(() => {
        spotify.getMe().then(user => {
          setUser(user)
      })
    
    
    }, []);
    
    return (
        <div className={classes.root}>
            <Header />

        </div>
    );
}