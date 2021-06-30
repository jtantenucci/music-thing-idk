import React from 'react';
import {makeStyles, CssBaseline, Typography} from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexgrow: 1
    },
    pageHead: {
        color: theme.palette.secondary.light,
        textShadow: "0.5px 0.5px 5px #AACDA2",
        fontStyle: 'oblique',
        textAlign: 'center'
    },
    cover: {
        flexShrink: 0,
        height: 175,
        width: 175,
      },
}))

export default function Playlists({token, spotify}) {
    const classes = useStyles();
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        spotify.getUserPlaylists({limit: 5}).then(playlists => {
            console.log(playlists)
          setPlaylists(playlists.items)
        })
    
      }, [spotify])

    return (
            <div className={classes.root}>
            <CssBaseline />
                <Typography variant='h2' className={classes.pageHead}>
                    Playlists go here
                    {playlists}
                </Typography>
            </div>
    );
}