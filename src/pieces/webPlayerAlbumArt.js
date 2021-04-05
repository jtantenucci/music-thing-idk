import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
    cover: {
        borderTop: '2px solid #9CE79C',
        borderBottom: '2px solid #9CE79C',
        height: 250,
        width: 250,
        flexShrink: 0,
    },
}));

export default function WebPlayerAlbumArt({ playingObject }) {
    const classes = useStyles();
    return (
        <>
            <CardMedia
                image={playingObject.songAlbumArt}
                className={classes.cover}
                title="image to pull from spotify api"
            />
        </>
    );
}