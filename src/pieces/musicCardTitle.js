import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    songTitle: {
        fontSize: 19,
        textShadow: "0.5px 0.5px 5px #AACDA2",
    },
    songArtist: {
        fontSize: 14,
    },
    songAlbum: {
        fontSize: 12,
        fontStyle: 'oblique',
    },
}));

export default function MusicCardTitle({ name, artist, album }) {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.songTitle}>
                {name}
            </Typography>
            <Typography color="textSecondary" className={classes.songArtist}>
                {artist}
            </Typography>
            <Typography color="textSecondary" className={classes.songAlbum}>
                {album}
            </Typography>
        </>
    );
}