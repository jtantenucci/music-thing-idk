import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    cover: {
        borderTop: '2px solid #9CE79C',
        borderBottom: '2px solid #9CE79C',
        height: 250,
        width: 250,
        flexShrink: 0,
    },
    blank: {
        borderTop: '2px solid #9CE79C',
        borderBottom: '2px solid #9CE79C',
        height: 250,
        width: 250,
        flexShrink: 0,
    },
}));

export default function WebPlayerAlbumArt({ playingObject, isPlaying }) {
    const classes = useStyles(); 
    return (
        isPlaying ? 
        <>
            <img
                src={playingObject.songAlbumArt}
                alt={playingObject.songAlbumArt}
                className={classes.cover}
            />
        </> 
        :
        <div className={classes.blank} /> 
    ); 
}