import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    cardHeader: {
        height: 90,
    },
    songTitle: {
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 20,
        textShadow: "0.5px 0.5px 5px #AACDA2",
    },
    songArtist: {
        paddingLeft: 10,
        fontSize: 14,
    },
    songAlbum: {
        paddingLeft: 10,
        paddingBottom: 5,
        fontSize: 12,
        fontStyle: 'oblique',
    },
}));


export default function WebPlayerTitle({ playingObject }) {
    const classes = useStyles();
    return (
        <div className={classes.cardHeader}>
            <Typography className={classes.songTitle}>
                {playingObject.songTitle}
            </Typography>
            <Typography color="textSecondary" className={classes.songArtist}>
                {playingObject.songArtist}
            </Typography>
            <Typography color="textSecondary" className={classes.songAlbum}>
                {playingObject.songAlbum}
            </Typography>
        </div>
    );
}